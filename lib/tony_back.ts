import axios from 'axios';

type tonyData = {
    id?: string;
    name?: string;
    sport?: string;
    time?: string;
    score?: string;
    [key: string]: any; // For dynamic keys like "btts", "dnb", etc.
};

let tonyList: tonyData[] = [];


export const fetchtonyDataBothScoreTony = async () => {
  const url =
    "https://platform.tonybet.lv/api/event/list?limit=150&competitor2Id_neq=&competitor1Id_neq=&oddsExists_eq=1&main=1&status_in[]=2&status_in[]=1&relations[]=odds&relations[]=withMarketsCount&relations[]=league&relations[]=result&relations[]=competitors&relations[]=sportCategories&relations[]=broadcasts&relations[]=statistics&relations[]=additionalInfo&relations[]=tips&sportId_eq=1&lang=en";


  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data?.data || {};
      const items = data.items || [];
      const odds = data.relations?.odds || {};

      const tonyDatas: tonyData[] = [];

      items.forEach((item: any) => {
        const id = item.id || 0;
        if (id) {
          const tonyData: tonyData = {
            id: item.id,
            time: item.time,
            name: item.translationSlug || '',
          };

          const oddLists = odds[String(id)] || [];
          let btts: number[] = [];
          let dnb: number[] = [];

          oddLists.forEach((odd: any) => {
            const outcomes = odd.outcomes || [];
            const oddsData = outcomes.map((outcome: any) => outcome.odds || 0);

            if (odd.id === 589) {
              btts = oddsData;
            } else if (odd.id === 868) {
              dnb = oddsData;
            }
          });

          tonyData.btts = btts;
          tonyData.dnb = dnb;          
          tonyDatas.push(tonyData);
        }
      });

      tonyList = tonyDatas
    } else {
      console.error(`Failed to retrieve data. Status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching tonyData Both Score data:", error);
    return [];
  }
};

export const startTonyBot = async (): Promise<void> => {
    tonyList = [];
    
  
    while (true) {
      await fetchtonyDataBothScoreTony();
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
    }
  };
  
  export const getTonyData = (): tonyData[] => {
  
    return tonyList;
  };
  