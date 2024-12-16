// https://n1bet.com/api/v2/matches?bettable=true&limit=25&match_status=0&sort_by=tournament.priority%3Aasc&sort_by=tournament.id%3Aasc&sort_by=start_time%3Aasc&sort_by=bets_count%3Adesc&sport_key=soccer&start_from=2024-12-06T19%3A18%3A39.609Z&start_to=2024-12-13T19%3A18%3A39.609Z&type=match
// https://n1bet.com/api/v2/matches/417487573/markets?limit=500

import axios from "axios";

type N1Data = {
  id: string;
  name: string;
  sport: string;
  score?: string;
  link?: string;
  [key: string]: any; // For dynamic keys like "btts", "dnb", etc.
};

let n1List: N1Data[] = [];

let usingList: any[] = [];
let n1BetMp: Record<string, N1Data> = {};

export const fetchN1BetsList = async (): Promise<void> => {
  const url =
    "https://n1bet.com/api/v2/matches?bettable=true&limit=500&match_status=1&max_per_sport=7&sort_by=tournament.priority%3Aasc&sort_by=tournament.id%3Aasc&sort_by=start_time%3Aasc&sort_by=bets_count%3Adesc&type=match";

  try {
    const response = await axios.get(url);
    const dataList = response?.data?.data || [];

    n1BetMp = {};
    dataList.forEach((data: any) => {
      if (data?.tournament?.sport?.key === "soccer") {
        let n1data = {
          id: data?.id,
          urn_id: data?.urn_id,
          name: data?.slug,
          sport: data?.tournament?.sport?.key,
          link: `https://n1bet.com/api/v2/matches/${data?.id}/markets?limit=500`,
        };
        n1BetMp[data?.id] = n1data;
      }
    });
  } catch (error) {
    console.log("Failed to fetch N1bet Data: ", error);
  }
};

export const fetchN1ById = async (id: string, link: any): Promise<void> => {
  const url = link;

  try {
    const response = await axios.get(url);
    const dataList = response?.data?.data || [];
    // console.log(n1BetMp[id])
    // console.log(" ------------ Current Using Id ------------- ")
    // console.log(id)
    for (let i = 0; i < dataList?.length; i++) {
      let data = dataList[i];
      if (data.name === "Both Teams To Score") {
        let outcomes = data?.outcomes;
        const oddData = outcomes
          ? outcomes.map((outcome: any) => outcome.odds / 1000)
          : [];

        n1BetMp[id]["btts"] = oddData;
      }
    }
  } catch (error) {
    console.log("Failed to fetch N1bet Data: ", error);
  }
};

export const startN1Bot = async (): Promise<void> => {
  n1List = [];
  while (true) {
    await fetchN1BetsList();
    for (let i = 0; i < usingList?.length; i++) {
      await fetchN1ById(usingList[i]?.id, usingList[i]?.link);
    }
    n1List = Object.entries(n1BetMp).map(([key, value]) => ({
      ...value,
      id: key,
    }));
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export const getN1Data = (): N1Data[] => {
  return n1List;
};

export const N1BetsetUsingList = (list: any[]) => {
  usingList = list;
};
