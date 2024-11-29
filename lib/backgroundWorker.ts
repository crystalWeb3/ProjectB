// lib/backgroundWorker.ts
import { globalData } from '../dataStore';
import { fetchTonyBetData, fetchFootballBothScoreTony } from '../dataFetcher';
import {startX3000Bot, getX3000Data} from './x3000_back'

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

const calcArbitrageBothScore = (): any[] => {
  const arbitrages: any[] = [];
  const compareKeys = ['dnb', 'btts'];

  globalData.x3000Data.forEach((xd: any) => {
    globalData.footballBothScoreData.forEach((tb: any) => {
      if (
        isSameGame(tb.nameList, xd.nameList) &&
        xd.sport.toLowerCase() === 'football'
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

              if (tonyPro1 + x3000Pro2 < 1 || tonyPro2 + x3000Pro1 < 1) {
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

  return arbitrages;
};

const updateGlobalData = async () => {
  try {
    const footballBothScoreData = await fetchFootballBothScoreTony();
    console.log('Fetched Football Data:', footballBothScoreData);

    if (!Array.isArray(footballBothScoreData)) {
      throw new Error('fetchFootballBothScoreTony returned a non-array value');
    }

    globalData.footballBothScoreData = footballBothScoreData.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    const x3000Data = getX3000Data();
    if (!Array.isArray(x3000Data)) {
      throw new Error('getX3000Data returned a non-array value');
    }

    globalData.x3000Data = x3000Data.map((game: any) => ({
      ...game,
      nameList: game.name ? makeListFromName(game.name) : [],
    }));

    const results = calcArbitrageBothScore();
    if (results.length) {
      console.log('Arbitrage Opportunities:', results);
    } else {
      console.log('No arbitrage opportunities found.');
    }
  } catch (error) {
    console.error('Error updating data:', error);
  }
};




// Background worker that keeps fetching data periodically
export const startBackgroundWorker = () => {
    startX3000Bot()
  setInterval(updateGlobalData, 2000); 
  console.log('Background worker started');
};
