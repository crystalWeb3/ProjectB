import Ellipse from "../utils/Ellipse";
import PriceQuote from "../PriceQuote/index";
import Circle from "../utils/Circle"
import Image from "next/legacy/image";

const Header = () => {
    return (
        <div className="relative ctm-container mt-36 md:mt-40 mb-[400px] sm:mb-[350px] md:mb-[150px] lg:mb-0 z-20">
            <Ellipse width="765px" height="765px" left="50%" top="-540px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <div className="overflow-hidden bg-mid-blue md:pl-20 lg:pl-28 p-5 sm:p-14 md:p-20 lg:p-20 pt-16  gap-8 ctm-card rounded-0 md:rounded-[30px] min-h-[750px] md:min-h-[750px] lg:min-h-[700px] xl:min-h-[680px]">
                <Ellipse width="350px" height="350px" left="70px" top="250px" opacity="0.2" className="hidden lg:block" zindex="10"/>
                <Ellipse width="13px" height="13px" left="70px" top="145px" opacity="1" className="hidden lg:block rounded-[50%]" zindex="30" filter="blur(0)" />
                <Ellipse width="13px" height="13px" left="88%" top="55px" opacity="0.2" className="hidden lg:block rounded-[50%]" zindex="30" filter="blur(0)" />
                <Ellipse width="350px" height="350px" left="88%" top="550px" opacity="0.2" className="hidden lg:block" zindex="10"/>
                <Circle width="70%" height="160%" left="50%" top="70px" opacity="0.2" className="hidden lg:block rounded-[50%] transfrom translate-x-[-50%]" zindex="30" />
                <Circle width="60%" height="140%" left="50%" top="135px" opacity="0.2" className="hidden lg:block rounded-[50%] transfrom translate-x-[-50%]" zindex="30" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 absolute left-[10px] lg:left-[70px] top-[60px] md:top-[75px] lg:top-[100px] lg:max-w-[44%] py-3 text-center lg:text-start p-5 z-30 h-[350px] sm:h-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple lg:leading-tight">
                    Bringing Your Vision to Life with Design and Words
                </h1>
                <p className="text-xl lg:text-2xl text-[#595959] lg:leading-tight">
                    Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren.
                </p>
                <div className="flex justify-start pl-[10px] sm:pl-[20px] md:pl-10 lg:pl-0">
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
                        <span className="text-lg font-bold left-[133px] absolute flex items-center h-[46px] whitespace-nowrap">Written By Humans</span>
                    </div>
                </div>
            </div>
            <div className="absolute flex justify-center lg:left-[51%] top-[55%] sm:top-[42%] md:top-[50%] lg:top-[60px] transform lg:translate-x-0 p-5 md:p-5">
                <PriceQuote className='sm:max-w-[80%] lg:max-w-[500px] xl:max-w-[565px] z-40' />
            </div>
        </div>
    )
}

export default Header;
