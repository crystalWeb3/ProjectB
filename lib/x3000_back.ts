import axios from 'axios';

// Define types for data structures
type FootballX3000 = {
  name: string;
  betId: string;
  category: number;
  criterionId?: number;
};

type X3000Data = {
  id: string;
  name: string;
  sport: string;
  time: string;
  score: string;
  [key: string]: any; // For dynamic keys like "btts", "dnb", etc.
};

// Initialize global variables
let x3000Datas: X3000Data[] = [];
let x3000Mp: Record<string, X3000Data> = {};
let x3000List: X3000Data[] = [];

// Configuration for football data
const footballX3000List: FootballX3000[] = [
  { name: 'Both_Teams_To_Score', betId: 'btts', category: 11942, criterionId: 1001642858 },
  { name: 'Draw_No_Bet', betId: 'dnb', category: 11929, criterionId: 1001159666 },  
];


// Fetch football by ID
const fetchFootballById = async (
  bettingTypeId: number,
  criterionId: number,
  betId: string
): Promise<void> => {
  const url = `https://eu-offering-api.kambicdn.com/offering/v2018/pafx3lv/listView/football/all/all/all/in-play.json?lang=en_GB&market=LV&client_id=2&channel_id=1&ncid=1732179377446&useCombined=true&useCombinedLive=true&category=${bettingTypeId}`;
               

  try {
    const response = await axios.get(url);
    const data = response.data;

    const events = data.events || [];
    events.forEach((event: any) => {
      const englishName = event.event.englishName;
      const sport = event.event.sport;
      const eventId = event.event.id;

      const liveData = event.liveData || {};
      const matchClock = liveData.matchClock || {};
      const time = `${matchClock.minute || 'N/A'}:${matchClock.second || 'N/A'}`;

      const scoreData = liveData.score || {};
      const score = `${scoreData.home || 'N/A'}:${scoreData.away || 'N/A'}`;

      const betOffers = event.betOffers || [];
      const outcomes = betOffers.find(
        (bet: any) => bet.criterion?.id === criterionId
      )?.outcomes;

      const oddData = outcomes
        ? outcomes.map((outcome: any) => outcome.odds / 1000)
        : [];

      const strId = String(eventId);
      const midData = {
        id: eventId,
        name: englishName,
        sport,
        time,
        score,
        [betId]: oddData,
      };
    

     
        x3000Mp[strId] = midData;
     
    });
  } catch (error) {
    console.error('Failed to fetch football by ID:', error);
  }
};

// Fetch football both score x3000
export const fetchFootballBothScoreX3000 = async (): Promise<void> => {
  for (const { category, criterionId, betId } of footballX3000List) {
    if (category && criterionId && betId) {
      await fetchFootballById(category, criterionId, betId);
    }
  }
};

// Start the x3000 bot
export const startX3000Bot = async (): Promise<void> => {
  x3000Datas = [];
  x3000Mp = {};
  x3000List = [];

  while (true) {
    await fetchFootballBothScoreX3000();
    
    x3000List = Object.entries(x3000Mp).map(([key, value]) => ({
      ...value,
      id: key,      
    }));    
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
  }
};

// Get x3000 data
export const getX3000Data = (): X3000Data[] => {

  return x3000List;
};
