import Image from "next/legacy/image";
import Ellipse from "../utils/Ellipse";

const Index = () => {
    return (
        <div className="relative ctm-container mt-[60px] md:mt-[80px]">
            <div className="w-full flex flex-col gap-8 items-center px-[20px] md:px-0">
                <div className="text-center flex flex-col gap-6 max-w-[580px] ">
                    <h1 className="banner-title">
                        Why Choose Us?
                    </h1>
                    <p className="banner-content">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren.
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[17px] md:rounded-[38px] bg-[#F2F8FF] h-auto lg:h-[530px] py-[50px] lg:py-[30px] overflow-hidden">
                    <div className="relative w-[85%] md:w-[60%] lg:w-[93%] xl:w-[89%]">
                        <Image src='/images/whychooseus/why1.png' alt='why1' height={791} width={1173} layout="responsive" className="z-40"  />
                        <Ellipse width="300px" height="300px" left="50%" top="50%" opacity="0.2" className="transform translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                    </div>
                    <div className="flex flex-col justify-center text-center lg:text-left px-8 sm:px-10 md:px-12 lg:pr-[100px] lg:pl-[30px]">
                        <h2 className="text-[30px] md:text-[38px] font-bold ">
                            1000+ Native Writers
                        </h2>
                        <p className="banner-content">
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock nibosåliga. Lörem ipsum geol nystartsjobb milingar.
                        </p>
                    </div>
                </div>
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[17px] md:rounded-[38px] bg-[#F2F8FF] lg:h-[530px]">
                    <div className="w-full flex justify-center items-center xl:items-start mt-[50px] md:mt-[50px] overflow-hidden">
                        <div className="relative w-[85%] md:w-[70%] lg:w-[80%] xl:w-[80%]">
                            <Image src='/images/whychooseus/why2.png' alt='why1' height={822} width={924} layout="responsive" className="z-40"  />
                        </div>
                    </div>
                    <div className="flex flex-col lg:justify-center text-center lg:text-left px-8 sm:px-10 md:px-12 lg:pr-[100px] lg:pl-[30px] pb-[50px] md:pb-[50px] lg:py-[30px]">
                        <h2 className="text-[30px] md:text-[38px] font-bold ">
                            High-quality Copywriting on any topic
                        </h2>
                        <p className="banner-content">
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock nibosåliga. Lörem ipsum geol nystartsjobb milingar.
                        </p>
                    </div>
                    {/* <Ellipse width="300px" height="300px" left="30%" top="50%" opacity="0.2" className="transform translate-x-[-50%] translate-y-[-50%]" zindex="10"/> */}
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[17px] md:rounded-[38px] bg-[#F2F8FF] lg:h-[530px]">
                    <div className="w-full flex justify-center items-center mt-[50px] lg:my-[50px] overflow-show">
                        <div className="relative w-[85%] md:w-[70%] lg:w-[80%] xl:w-[60%]">
                            <Image src='/images/whychooseus/why3.png' alt='why1' height={822} width={924} layout="responsive" className="z-40"  />
                            <Ellipse width="300px" height="300px" left="50%" top="50%" opacity="0.2" className="transform translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:justify-center text-center lg:text-left px-8 sm:px-10 md:px-12 lg:pr-[100px] lg:pl-[30px] pb-[50px] md:pb-[50px] lg:py-[30px]">
                        <h2 className="text-[30px] md:text-[38px] font-bold ">
                            24/7 Support
                        </h2>
                        <p className="banner-content">
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock nibosåliga. Lörem ipsum geol nystartsjobb milingar.
                        </p>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-[17px] md:rounded-[38px] bg-[#F2F8FF] lg:h-[530px]">
                    <div className="w-full flex justify-center items-center mt-[50px] lg:my-[50px] overflow-show">
                        <div className="relative w-[85%] md:w-[70%] lg:w-[80%] xl:w-[60%]">
                            <Image src='/images/whychooseus/why4.png' alt='why1' height={822} width={924} layout="responsive" className="z-40"  />
                            <Ellipse width="300px" height="300px" left="50%" top="50%" opacity="0.2" className="transform translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                        </div>
                    </div>
                    <div className="flex flex-col lg:justify-center text-center lg:text-left px-8 sm:px-10 md:px-12 lg:pr-[100px] lg:pl-[30px] pb-[50px] md:pb-[50px] lg:py-[30px]">
                        <h2 className="text-[30px] md:text-[38px] font-bold ">
                            Quality Service with Affordable Prices
                        </h2>
                        <p className="banner-content">
                            Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock nibosåliga. Lörem ipsum geol nystartsjobb milingar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;