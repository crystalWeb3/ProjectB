import Checkbox from "../utils/Checkbox";
import Ellipse from "../utils/Ellipse"; 
import Image from 'next/legacy/image';

const Header = () => {
    return (
        <div className="relative ctm-container flex flex-col gap-10 sm:gap-14 lg:gap-10 items-center mt-[95px] sm:mt-[110px] md:mt-[110px] lg:mt-[130px]">
            <Ellipse width="765px" height="765px" left="50%" top="-540px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-10">
                <div className="pl-[10%] hidden lg:grid grid-cols-2 ">
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">125+</h2>
                        <p className="banner-content">Expert Writers</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">4525+</h2>
                        <p className="banner-content">Happy Orders</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">9.6/10</h2>
                        <p className="banner-content">Rating</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">25+</h2>
                        <p className="banner-content">Years of Experience</p>
                    </div>
                </div>
                <div className=" text-center flex flex-col items-center gap-6">
                    <h2 className="banner-title">This can be Any Title</h2>
                    <p className="banner-content">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
                    <p className="banner-content">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
                </div>
            </div>
            <div className="w-full flex justify-center gap-10 px-7 md:px-0">
                <div className="h-[350px] md:h-[450px] lg:h-[450px] xl:h-[650px] w-full rounded-[17px] md:rounded-[30px] lg:rounded-[50px] overflow-hidden bg-[url('/images/whyMissilBets/anytitle.png')] bg-cover bg-center">
                </div>
            </div>
            <div className="w-full">
                <div className="pl-[10%] lg:hidden grid grid-cols-2 ">
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">125+</h2>
                        <p className="banner-content">Expert Writers</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">4525+</h2>
                        <p className="banner-content">Happy Orders</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">9.6/10</h2>
                        <p className="banner-content">Rating</p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[52px] lg:text-[70px] text-[#007DFC] font-bold">25+</h2>
                        <p className="banner-content">Years of Experience</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Header;
