// https://sports.az.betmgm.com/cds-api/bettingoffer/live/highlights?x-bwin-accessid=N2Q4OGJjODYtODczMi00NjhhLWJlMWItOGY5MDUzMjYwNWM5&lang=en-us&country=US&userCountry=US&subdivision=US-XY&state=Live&offerMapping=Filtered&scoreboardMode=Slim&offerCategories=Gridable&maxFixturesPerSport=5&sortBy=Tags&statisticsModes=All

//https://sports.az.betmgm.com/cds-api/bettingoffer/fixture-view?x-bwin-accessid=N2Q4OGJjODYtODczMi00NjhhLWJlMWItOGY5MDUzMjYwNWM5&lang=en-us&country=US&userCountry=US&subdivision=US-XY&offerMapping=All&scoreboardMode=Full&fixtureIds=2:7511762&state=Latest&includePrecreatedBetBuilder=true&supportVirtual=false&isBettingInsightsEnabled=true&useRegionalisedConfiguration=true&includeRelatedFixtures=false&statisticsModes=All
// soccer
//https://sports.tn.betmgm.com/cds-api/bettingoffer/fixtures?x-bwin-accessid=NzRkYTNiZjUtOGFiZS00N2JjLTliNWMtMjY1ZTEwY2YxMDQ4&lang=en-us&country=US&userCountry=US&subdivision=US-XY&state=Live&take=50&offerMapping=Filtered&offerCategories=Gridable&sortBy=Tags&sportIds=4&statisticsModes=SeasonStandings

import axios from 'axios';
import { chromium } from 'playwright';


type BetMGMData = {
  id: string;
  name: string;
  sport: string;
  time: string;
  score: string;
  [key: string]: any; // For dynamic keys like "btts", "dnb", etc.
};

// Initialize global variables
let BetMGMList: BetMGMData[] = [];

// Fetch football by ID
const fetchFootballById = async (page: any): Promise<void> => {
  const url = 
  'https://sports.tn.betmgm.com/cds-api/bettingoffer/fixtures?x-bwin-accessid=NzRkYTNiZjUtOGFiZS00N2JjLTliNWMtMjY1ZTEwY2YxMDQ4&lang=en-us&country=US&userCountry=US&subdivision=US-XY&state=Live&take=50&offerMapping=Filtered&offerCategories=Gridable&sortBy=Tags&sportIds=4&statisticsModes=SeasonStandings';
               
  

  try {

    await page.goto(url);
    const response = await page.content();
    

    console.log(response)
    const data = response.data;

    

    const fixtures = data.fixtures || [];

    let dataList: BetMGMData[] = []
    fixtures.forEach((event: any) => {
      const englishName = event.name.value;
      const sport = event.sport?.name?.value;
      const eventId = event?.id;
      const startDate = event?.startDate;

      const optionMarkets = event?.optionMarkets || {};

      const scoreBoard = event?.scoreboard || {}
      const score = scoreBoard?.score

      let seconds = scoreBoard?.timer?.seconds?scoreBoard?.timer?.seconds:0;

      let time = (seconds / 60) + ":" + (seconds % 60)

      let data: BetMGMData = {
        id: eventId,
        name: englishName,
        score: score,
        sport: sport,
        time: time
      }
      optionMarkets.forEach((market:any) => {
        let options = market?.options || [];
        if(market?.name?.value === "Both Teams To Score") {
            data['btts'] = []
            for(let j = 0; j < options?.length; j ++) {
                data['btts'].push(options[j]?.price?.odds)
            }            
        }
      })
      console.log(data)

      dataList.push(data)


      
     
     
    });

    BetMGMList = dataList
  } catch (error) {
    console.error('Failed to fetch football by ID:', error);
  }
};

// Start the BetMGM bot
export const startBetMGMBot = async (): Promise<void> => {

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  BetMGMList = [];

  while (true) {
    await fetchFootballById(page);    
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
  }
};

// Get BetMGM data
export const getBetMGMData = (): BetMGMData[] => {

  return BetMGMList;
};
