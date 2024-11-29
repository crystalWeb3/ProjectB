import Ellipse from "../utils/Ellipse";
import PriceQuote from "../PriceQuote/index";
import IconLabel from "../utils/IconLabel";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/legacy/image";
import Circle from "../utils/Circle"

const Header = () => {
    return (
        <div className="relative ctm-container pt-[135px] sm:pt-[160px] md:pt-[190px] lg:pt-[220px] mb-[] 2xl:mb-[60px]">
            <Ellipse width="765px" height="765px" left="50%" top="-340px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <div className="flex flex-col 2xl:flex-row 2xl:items-start md:px-[10%] lg:px-[10%] xl:px-[6%] gap-8 lg:gap-5 z-40">
                <div className="2xl:w-[50%] flex flex-col items-center md:items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 text-center lg:text-start p-5 pt-3 pb-0 z-40">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple lg:leading-tight">
                        Do not Miss Your Opportunities with Real Live Betting
                    </h1>
                    <p className="text-xl lg:text-2xl text-[#595959] lg:leading-tight">
                        MissilBets will provide you great Opportunities to win every time for every case with live action.
                    </p>
                    <div className="w-[60%] lg:w-full flex ml-[5%] lg:ml-0">
                        <div className="overflow-show h-[46px] relative">
                            <span className="absolute filter-none overflow-hidden rounded-[50%] left-0 inline-block h-[46px] w-[46px] z-10 rotate-[13deg]">
                                <Image priority  src='/images/humans/user1.png' alt='user1' width={46} height={46} />
                            </span>
                            <span className="absolute filter-none overflow-hidden rounded-[50%] left-[20px] inline-block h-[46px] w-[46px] z-40 rotate-[13deg]">
                                <Image priority  src='/images/humans/user2.png' alt='user2' width={46} height={46} />
                            </span>
                            <span className="absolute filter-none overflow-hidden rounded-[50%] left-[45px] inline-block h-[46px] w-[46px] z-30 rotate-[-13deg]">
                                <Image priority  src='/images/humans/user3.png' alt='user3' width={46} height={46} placeholder="empty" className="" />
                            </span>
                            <span className="absolute filter-none overflow-hidden rounded-[50%] left-[70px] inline-block h-[46px] w-[46px] z-20 rotate-[-13deg]">
                                <Image priority  src='/images/humans/user4.png' alt='user4' width={46} height={46} />
                            </span>
                            <span className="text-lg font-bold left-[133px] absolute flex items-center h-[46px] whitespace-nowrap">Great Build</span>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full px-7 md:p-5 lg:px-0 lg:w-auto flex flex-1 justify-center relative">
                    <PriceQuote className=' md:!w-[560px] z-40' />
                </div> */}
            </div>
            <div className="absolute w-full top-[115px] sm:top-[135px] md:top-[140px] lg:top-[160px] overflow-hidden bg-mid-blue md:pl-20 lg:pl-28 p-5 sm:p-14 md:p-20 lg:p-20 pt-16  gap-8 ctm-card rounded-0 md:rounded-[30px] min-h-[700px] md:min-h-[650px] lg:min-h-[700px] xl:min-h-[680px]">
                <Ellipse width="350px" height="350px" left="70px" top="250px" opacity="0.2" className="hidden lg:block" zindex="10"/>
                <Ellipse width="13px" height="13px" left="55px" top="115px" opacity="1" className="hidden lg:block rounded-[50%]" zindex="30" filter="blur(0)" />
                <Ellipse width="13px" height="13px" left="88%" top="55px" opacity="0.2" className="hidden lg:block rounded-[50%]" zindex="30" filter="blur(0)" />
                <Ellipse width="350px" height="350px" left="88%" top="550px" opacity="0.2" className="hidden lg:block" zindex="10"/>
                <Circle width="70%" height="160%" left="50%" top="70px" opacity="0.2" className="hidden 2xl:block rounded-[50%] transfrom translate-x-[-50%]" zindex="30" />
                <Circle width="60%" height="140%" left="50%" top="135px" opacity="0.2" className="hidden 2xl:block rounded-[50%] transfrom translate-x-[-50%]" zindex="30" />
            </div>
        </div>
        
    )
}

export default Header;
