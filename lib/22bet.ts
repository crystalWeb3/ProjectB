// https://22bet.com/LiveFeed/Get1x2_VZip?count=50&lng=en&gr=151&mode=4&country=207&partner=151&ZVE=1

// https://22bet.com/LiveFeed/GetGameZip?id=582271028&lng=en&tzo=1&cfview=0&isSubGames=true&GroupEvents=true&countevents=250&country=207&fcountry=207&isNewBuilder=true&partner=151&grMode=4

import axios from "axios";

type Bet22Data = {
  id: string;
  name: string;
  sport: string;
  score?: string;
  link?: string;
  [key: string]: any; // For dynamic keys like "btts", "dnb", etc.
};

let bet22List: Bet22Data[] = [];

let usingList: any[] = [];
let bet22Mp: Record<string, Bet22Data> = {};

export const fetchBet22List = async (): Promise<void> => {
  const url =
    "https://22bet.com/LiveFeed/Get1x2_VZip?count=50&lng=en&gr=151&mode=4&country=207&partner=151&ZVE=1";

  try {
    const response = await axios.get(url);
    const dataList = response?.data?.Value || [];

    bet22Mp = {};
    dataList.forEach((data: any) => {
      if (data?.SE === "Football") {
        let Bet22Data = {
          id: data?.I,
          name: data?.O1 + " - " + data?.O2,
          sport: data?.SE,
          link: `https://22bet.com/LiveFeed/GetGameZip?id=${data?.I}&lng=en&tzo=1&cfview=0&isSubGames=true&GroupEvents=true&countevents=250&country=207&fcountry=207&isNewBuilder=true&partner=151&grMode=4`,
        };
        bet22Mp[data?.I] = Bet22Data;
      }
    });
  } catch (error) {
    console.log("Failed to fetch N1bet Data: ", error);
  }
};

export const fetchBet22ById = async (id: string, link: any): Promise<void> => {
  const url = link;

  try {
    const response = await axios.get(url);
    const dataList = response?.data?.Value?.GE || [];            
    for (let i = 0; i < dataList?.length; i++) {
      let data = dataList[i];
      if (data?.G === 19 && data?.GS === 21) {
        let outcomes = data?.E;
        const oddData = outcomes
          ? outcomes.map((outcome: any) => outcome[0]?.C)
          : [];

        bet22Mp[id]["btts"] = oddData;
      }
    }    
  } catch (error) {
    console.log("Failed to fetch N1bet Data: ", error);
  }
};

export const startBet22Bot = async (): Promise<void> => {
  bet22List = [];
  while (true) {
    await fetchBet22List();

    // console.log(" ------------- Current Using List -------------")

    // console.log(usingList)
    for (let i = 0; i < usingList?.length; i++) {
      await fetchBet22ById(usingList[i]?.id, usingList[i]?.link);
    }
    bet22List = Object.entries(bet22Mp).map(([key, value]) => ({
      ...value,
      id: key,
    }));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export const getBet22Data = (): Bet22Data[] => {
  return bet22List;
};

export const Bet22UsingList = (list: any[]) => {
  if (list?.length) usingList = [];

  usingList = list;
};
