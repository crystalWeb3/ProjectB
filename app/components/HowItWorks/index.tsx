'use client'
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import Slider from "react-slick";
import Image from "next/legacy/image";
import Ellipse from "../utils/Ellipse";
import StartOrderBtn from '../utils/StartOrderBtn';

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
};
interface DataType {
    src: string,
    alt: string
}

const images: DataType[] = [
    { src: '/images/howitworks/how1.png', alt: 'how1' },
    { src: '/images/howitworks/how2.png', alt: 'how2' },
    { src: '/images/howitworks/how3.png', alt: 'how3' },
    { src: '/images/howitworks/how4.png', alt: 'how4' },
]
const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="relative howitworks-main p-10 pt-16 md:pt-20 lg:pt-32 pb-10 md:pb-20" id="howitworks">
            <div className="ctm-container flex flex-col mx-auto overflow-hidden gap-4">
                <div className="text-center w-full mx-auto max-w-4xl mb-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple lg:leading-tight">
                        How it Works?
                    </h1>
                    <p className="text-xl lg:text-2xl text-[#595959] pt-6">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <div className="w-full hidden md:block">
                    <div className='grid grid-cols-1 lg:grid-cols-2 my-5 gap-x-7 lg:gap-x-14 gap-y-10 lg:gap-y-20 '>
                        { images.map((img, idx) => (
                            <div className="relative w-full" key={idx}>
                                <Image 
                                    src={img.src}
                                    alt={img.alt} 
                                    layout='responsive'
                                    width={563.18} 
                                    height={503.03}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full block md:hidden">
                    <Slider {...settings} ref={sliderRef}>
                        { images.map((img, idx) => (
                            <div className="relative w-full px-4" key={idx}>
                                <Image 
                                    src={img.src}
                                    alt={img.alt} 
                                    layout='responsive'
                                    width={563.18} 
                                    height={503.03}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full block md:hidden flex flex-row justify-center gap-3">
                    <CustomPrevArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
                <div className="flex justify-center my-10">
                    <StartOrderBtn text="Get Started Today" />
                </div>
            </div>
            <Ellipse width="380px" height="380px" left="130px" top="130px" opacity="0.1" className="hidden lg:block" zindex="10"/>
            <Ellipse width="380px" height="380px" left="78%" top="80%" opacity="0.1" className="hidden lg:block" zindex="10"/>
        </div>
    );
}

export default Index;
