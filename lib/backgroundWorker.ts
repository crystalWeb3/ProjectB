// lib/backgroundWorker.ts
import { globalData } from '../dataStore';
import { startTonyBot, getTonyData } from './tony_back';
import {startX3000Bot, getX3000Data} from './x3000_back'

let backgroundWorkerInterval: any

const makeListFromName = (name: string): string[] => {
  // Replace '-' with spaces, remove non-alphabetic characters, and split into words
  name = name.replace(/-/g, ' ');
  const cleanedText = name.replace(/[^a-zA-Z\s]/g, '').toLowerCase();
  return cleanedText.split(' ').sort((a, b) => b.length - a.length);
};

const isSameGame = (listA: string[], listB: string[]): boolean => {
  let matchCount = 0;
  listA.forEach((word) => {
    if (word.length > 2 && listB.includes(word)) matchCount++;
  });
  const smallerLength = Math.min(listA.length, listB.length);
  return matchCount > 0 && smallerLength / matchCount <= 2;
};

const calcArbitrageBothScore = (tonyData: any, x3000Data: any): any[] => {
  const arbitrages: any[] = [];
  const compareKeys = ['dnb', 'btts'];

  x3000Data.forEach((xd: any) => {
    tonyData.forEach((tb: any) => {
      if (
        isSameGame(tb.nameList, xd.nameList) &&
        xd.sport.toLowerCase() === 'football'
      ) {
        // console.log(tb)
        // console.log(xd)
        // console.log("- - - - - - - - - - - - - - - - - - - ")
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
                  tbOdds: `1: ${tbOdd1} 2: ${tbOdd2}`,
                  xdOdds: `1: ${xdOdd1} 2: ${xdOdd2}`,
                  tbStake: tonyPro1 + x3000Pro2 < 1
                    ? `1: ${(tonyPro1 / (tonyPro1 + x3000Pro2) * 100).toFixed(2)}`
                    : `2: ${(tonyPro2 / (tonyPro2 + x3000Pro1) * 100).toFixed(2)}`,
                  xdStake: tonyPro1 + x3000Pro2 < 1
                    ? `2: ${(x3000Pro2 / (tonyPro1 + x3000Pro2) * 100).toFixed(2)}`
                    : `1: ${(x3000Pro1 / (tonyPro2 + x3000Pro1) * 100).toFixed(2)}`,
                  tbProfit: tonyPro1 + x3000Pro2 < 1
                    ? `1: ${((tbOdd1 * (tonyPro1 / (tonyPro1 + x3000Pro2) * 100)) - 100).toFixed(2)}`
                    : `2: ${((tbOdd2 * (tonyPro2 / (tonyPro2 + x3000Pro1) * 100)) - 100).toFixed(2)}`,
                  xdProfit: tonyPro1 + x3000Pro2 < 1
                    ? `2: ${((xdOdd2 * (x3000Pro2 / (tonyPro1 + x3000Pro2) * 100)) - 100).toFixed(2)}`
                    : `1: ${((xdOdd1 * (x3000Pro1 / (tonyPro2 + x3000Pro1) * 100)) - 100).toFixed(2)}`,
                };

                arbitrages.push(arbitrage);
              }
            }
          }
        });
      }
    });
  });
  // console.log(arbitrages)
  return arbitrages;
};

const calcArbitrage = (casinos: any): any[] => {
  const arbitrages: any[] = [];
  const compareKeys = ['dnb', 'btts'];

  for (let i = 0; i < casinos?.length; i ++) {
    for(let j = i + 1; j < casinos?.length; j ++) {
      let firstCasino = casinos[i]
      let secondCasino = casinos[j]
      firstCasino?.data?.forEach((xd: any) => {
        secondCasino?.data?.forEach((tb: any) => {
          if (
            isSameGame(tb.nameList, xd.nameList)
          ) {
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
  try {
    let tonyData = getTonyData();
  

    if (!Array.isArray(tonyData)) {
      throw new Error('fetchFootballBothScoreTony returned a non-array value');
    }

    tonyData = tonyData.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    let x3000Data = getX3000Data();
    
    if (!Array.isArray(x3000Data)) {
      throw new Error('getX3000Data returned a non-array value');
    }

    x3000Data = x3000Data.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));
    let casinoData: Record<string, any> = {}
    
    
    casinoData['x3000'] = x3000Data
    casinoData['tony'] = tonyData

    let casinos = Object.entries(casinoData).map(([key, value]) => ({
      data: value,
      name: key,
      id: key,      
    }))

    const results = calcArbitrage(casinos);
    if (results.length) {
      
      globalData.opps = results
      
    } else {
      console.log('No arbitrage opportunities found.');
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};


export const startBackgroundWorker = () => {
  startX3000Bot()
  startTonyBot()
  console.log("Clear")
  console.log(backgroundWorkerInterval)
  if(backgroundWorkerInterval) {
    clearInterval(backgroundWorkerInterval); 
    console.log('Background worker stopped');
  }
  else {
    backgroundWorkerInterval  = setInterval(updateGlobalData, 500); 
  }
  
  
  console.log(backgroundWorkerInterval)
  console.log('Background worker started');
};

export const endBackgroundWorker = () => {
  console.log(backgroundWorkerInterval)
  if (backgroundWorkerInterval) {
    clearInterval(backgroundWorkerInterval); 
    backgroundWorkerInterval = null; 
    console.log('Background worker stopped');
  } else {
    console.log('No background worker is running');
  }

}