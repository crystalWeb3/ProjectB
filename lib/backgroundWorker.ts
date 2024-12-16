// lib/backgroundWorker.ts
import { globalData } from "../dataStore";
import { Bet22UsingList, getBet22Data, startBet22Bot } from "./22bet";
import { getBetMGMData, } from "./betmgm";
import { N1BetsetUsingList, getN1Data,  startN1Bot } from "./n1bet";
import { startTonyBot, getTonyData } from "./tony_back";
import { startX3000Bot, getX3000Data } from "./x3000_back";
import { EventEmitter } from 'events';

import Redis from 'ioredis'

const REIDS_URL =  process.env.REDIS_URL || '';
const redis = new Redis(REIDS_URL);

const workerEmitter = new EventEmitter();

let serverOn: boolean = false;

const makeListFromName = (name: string): string[] => {
  // Replace '-' with spaces, remove non-alphabetic characters, and split into words
  name = name.replace(/-/g, " ");
  const cleanedText = name.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
  return cleanedText.split(" ").sort((a, b) => b.length - a.length);
};

const isSameGame = (listA: string[], listB: string[]): boolean => {
  let matchCount = 0;
  listA.forEach((word) => {
    if (word.length > 2 && listB.includes(word)) matchCount++;
  });
  const smallerLength = Math.min(listA.length, listB.length);
  return matchCount > 0 && smallerLength / matchCount <= 2;
};

let usingList: any = {}


const getUseList = (casinos: any) : any[] => {

  let sameList: any[] = []
  let flg:any = {}
  for (let i = 0; i < casinos?.length; i++) {
    for (let j = i + 1; j < casinos?.length; j++) {
      let firstCasino = casinos[i];
      let secondCasino = casinos[j];
      usingList = {}
      firstCasino?.data?.forEach((xd: any) => {
        secondCasino?.data?.forEach((tb: any) => {
          if (isSameGame(tb.nameList, xd.nameList)) {
            let casino_name = firstCasino?.id;
            let game_id = casino_name + xd?.id
            
            if(!flg[game_id]) {
              usingList[casino_name] = [];
              usingList[casino_name].push(xd)              
              flg[game_id] = true
            }

            casino_name = secondCasino?.id;
            game_id = casino_name + tb?.id
            
            if(!flg[game_id]) {
              usingList[casino_name] = [];
              usingList[casino_name].push(tb)
              flg[game_id] = true
            }

            const sameOne = {
              name: xd.name,
              sport: xd.sport,
              time: xd.time,              
              casinos: { first: firstCasino?.name, second: secondCasino?.name },              
            };
            sameList.push(sameOne);
          }
        });
      });
    }
  }

  return sameList
}

const calcArbitrage = (casinos: any): any[] => {
  usingList = {}
  const arbitrages: any[] = [];
  const compareKeys = ["dnb", "btts"];
  let flg:any = {}
  for (let i = 0; i < casinos?.length; i++) {
    for (let j = i + 1; j < casinos?.length; j++) {
      let firstCasino = casinos[i];
      let secondCasino = casinos[j];
      firstCasino?.data?.forEach((xd: any) => {
        secondCasino?.data?.forEach((tb: any) => {
          if (isSameGame(tb.nameList, xd.nameList)) {                        
            compareKeys.forEach((key) => {
              if (tb[key] && xd[key]) {
                const tbOdds = tb[key];
                const xdOdds = xd[key];

                if (tbOdds.length === 2 && xdOdds.length === 2) {
                  const [tbOdd1, tbOdd2] = tbOdds;
                  const [xdOdd1, xdOdd2] = xdOdds;

                  const tonyPro1 = 1.0 / tbOdd1;
                  const tonyPro2 = 1.0 / tbOdd2;
                  const x3000Pro1 = 1.0 / xdOdd1;
                  const x3000Pro2 = 1.0 / xdOdd2;

                  if (true) {
                    const arbitrage = {
                      name: xd.name,
                      sport: xd.sport,
                      time: xd.time,
                      type: key,
                      casinos: {first: firstCasino?.name, second: secondCasino?.name},
                      odds: {
                        first: [tbOdd1, tbOdd2],
                        second: [xdOdd1, xdOdd2]
                      },
                      stake: {
                        first: tonyPro1 + x3000Pro2 < 1
                        ? `1: ${(tonyPro1 / (tonyPro1 + x3000Pro2) * 100).toFixed(2)}`
                        : `2: ${(tonyPro2 / (tonyPro2 + x3000Pro1) * 100).toFixed(2)}`,
                        second: tonyPro1 + x3000Pro2 < 1
                        ? `2: ${(x3000Pro2 / (tonyPro1 + x3000Pro2) * 100).toFixed(2)}`
                        : `1: ${(x3000Pro1 / (tonyPro2 + x3000Pro1) * 100).toFixed(2)}`
                      },
                      profit: {
                        first: tonyPro1 + x3000Pro2 < 1
                        ? `1: ${((tbOdd1 * (tonyPro1 / (tonyPro1 + x3000Pro2) * 100)) - 100).toFixed(2)}`
                        : `2: ${((tbOdd2 * (tonyPro2 / (tonyPro2 + x3000Pro1) * 100)) - 100).toFixed(2)}`,
                        second:  tonyPro1 + x3000Pro2 < 1
                        ? `2: ${((xdOdd2 * (x3000Pro2 / (tonyPro1 + x3000Pro2) * 100)) - 100).toFixed(2)}`
                        : `1: ${((xdOdd1 * (x3000Pro1 / (tonyPro2 + x3000Pro1) * 100)) - 100).toFixed(2)}`
                      }
                    };

                    arbitrages.push(arbitrage);
                  }
                }
              }
            });
          }
        });
      });
    }
  }

  return arbitrages;
};

const updateGlobalData = async () => {

  console.log("The Update func is running.")
  try {
    //get Tonydata
    let tonyData = getTonyData();

    if (!Array.isArray(tonyData)) {
      throw new Error("fetchFootballBothScoreTony returned a non-array value");
    }

    tonyData = tonyData.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    //get X3000 Data

    let x3000Data = getX3000Data();

    if (!Array.isArray(x3000Data)) {
      throw new Error("getX3000Data returned a non-array value");
    }

    x3000Data = x3000Data.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    //get BetMGM Data

    let betMGMData = getBetMGMData();

    if (!Array.isArray(betMGMData)) {
      throw new Error("betMGMData returned a non-array value");
    }

    betMGMData = betMGMData.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    //get N1Bot Data

    let n1BetData = getN1Data();

    if (!Array.isArray(n1BetData)) {
      throw new Error("N1BetData returned a non-array value");
    }

    n1BetData = n1BetData.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

   
    //get Bet22 Data

    let bet22Data = getBet22Data();

    if (!Array.isArray(bet22Data)) {
      throw new Error("Bet22Data returned a non-array value");
    }

    bet22Data = bet22Data.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    


    let casinoData: Record<string, any> = {};

    casinoData["x3000"] = x3000Data;
    casinoData["tony"] = tonyData;
    // casinoData["betmgm"] = betMGMData;
    casinoData["n1bet"] = n1BetData;
    casinoData["bet22"] = bet22Data;    

    let casinos = Object.entries(casinoData).map(([key, value]) => ({
      data: value,
      name: key,
      id: key,
    }));

    const sameNameList = getUseList(casinos);
    

    N1BetsetUsingList (usingList['n1bet'])
    Bet22UsingList (usingList['bet22'])

    let results = calcArbitrage(casinos)


    if (results.length) {
      globalData.opps = results;
    } else {
      console.log("No arbitrage opportunities found.");
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
};


export const startBackgroundWorker = async () => {

  if (serverOn) {
    console.log("Background worker is already running.");
    return;
  }

  await redis.set('serverOn', 1)
  console.log(redis)
  console.log("Starting background worker...");

  startX3000Bot();
  startTonyBot();
  // startBetMGMBot()
  startN1Bot();

  startBet22Bot();
  

  console.log("Trigger On")

  workerEmitter.emit('start');

  
  console.log("Background worker started");
};

workerEmitter.on('start', async function runWorker() {

  
  const serverOn = await redis.get('serverOn');
  console.log(serverOn)
  if (serverOn === '1') {
    try {
      await updateGlobalData();
    } catch (error) {
      console.log("Error in updateGlobalData: ", error);
    }
    setTimeout(() => workerEmitter.emit('start'), 1000);
  } else {
    console.log("Background worker stopped");
  }
});

export const endBackgroundWorker = async () => {
  serverOn = false

  console.log("Process End Required.")
  
  await redis.set('serverOn', 0)

  workerEmitter.emit('start');
};
