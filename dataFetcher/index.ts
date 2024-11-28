import axios from 'axios';

interface Football {
  id: number;
  time: string;
  name: string;
  odd1?: number;
  odd2?: number;
  odd3?: number;
  btts?: number[];
  dnb?: number[];
}

export const fetchTonyBetData = async (): Promise<Football[]> => {
  const url =
    "https://platform.tonybet.lv/api/event/list?isTopLive_eq=1&competitor2Id_neq=&competitor1Id_neq=&status_in[]=2&status_in[]=1&oddsExists_eq=1&main=1&limit=300&relations[]=odds&relations[]=league&relations[]=result&relations[]=competitors&relations[]=players&relations[]=sportCategories&relations[]=broadcasts&relations[]=statistics&relations[]=additionalInfo&relations[]=withMarketsCount&relations[]=tips&period=0&lang=en";

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data?.data || {};
      const items = data.items || [];
      const odds = data.relations?.odds || {};

      const footballs: Football[] = [];

      items.forEach((item: any) => {
        const id = item.id || 0;
        if (id) {
          const football: Football = {
            id: item.id,
            time: item.time,
            name: item.translationSlug || '',
          };

          const oddLists = odds[String(id)] || [];
          let odd1 = 0,
            odd2 = 0,
            odd3 = 0;

          oddLists.forEach((odd: any) => {
            if (odd.id === 621) {
              const outcomes = odd.outcomes || [];
              if (outcomes.length > 0) odd1 = outcomes[0]?.odds || 0;
              if (outcomes.length > 1) odd2 = outcomes[1]?.odds || 0;
              if (outcomes.length > 2) odd3 = outcomes[2]?.odds || 0;
            }
          });

          football.odd1 = odd1;
          football.odd2 = odd2;
          football.odd3 = odd3;

          footballs.push(football);
        }
      });

      return footballs;
    } else {
      console.error(`Failed to retrieve data. Status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching TonyBet data:", error);
    return [];
  }
};

export const fetchFootballBothScoreTony = async (): Promise<Football[]> => {
  const url =
    "https://platform.tonybet.lv/api/event/list?limit=150&competitor2Id_neq=&competitor1Id_neq=&oddsExists_eq=1&main=1&status_in[]=2&status_in[]=1&relations[]=odds&relations[]=withMarketsCount&relations[]=league&relations[]=result&relations[]=competitors&relations[]=sportCategories&relations[]=broadcasts&relations[]=statistics&relations[]=additionalInfo&relations[]=tips&sportId_eq=1&lang=en";


  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const data = response.data?.data || {};
      const items = data.items || [];
      const odds = data.relations?.odds || {};

      const footballs: Football[] = [];

      items.forEach((item: any) => {
        const id = item.id || 0;
        if (id) {
          const football: Football = {
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

          football.btts = btts;
          football.dnb = dnb;          
          footballs.push(football);
        }
      });

      return footballs;
    } else {
      console.error(`Failed to retrieve data. Status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching Football Both Score data:", error);
    return [];
  }
};
