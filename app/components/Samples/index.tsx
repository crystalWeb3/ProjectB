"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";

// CAROUSEL DATA

interface DataType {
    title: string;
    type: string;
    content: string;
}

const postData: DataType[] = [
    {
        title: 'CopyWriting Food Delivery website1',
        type: 'Case Study',
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
    },
    {
        title: 'CopyWriting Food Delivery website2',
        type: 'Case Study',
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
    },
    {
        title: 'CopyWriting Food Delivery website3',
        type: 'Case Study',
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
    },
    {
        title: 'CopyWriting Food Delivery website4',
        type: 'Case Study',
        content: 'Lörem ipsum krons astroll parar.Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska ',
    },
]

// CAROUSEL SETTINGS
const settings = {
    dots: false,
    infinite: true,
    // slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    variableWidth: false,
    className: "!w-[400px] sm:!w-[450px] md:!w-[500px] overflow-visible",
};

const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="bg-wework overflow-hidden ctm-slide flex flex-col items-center md:items-start mt-12 md:mt-20 ">
            <div className="flex flex-col gap-8 text-center md:hidden">
                <h2 className="banner-title">Copywriting Samples</h2>
                <p className="banner-content">Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. </p>
            </div>
            <div className="relative w-full ctm-slide overflow-x-hidden py-7 md:py-10">
                <Slider {...settings} ref={sliderRef}>
                    {postData.map((item, i) => (
                        <div key={i} className="p-[10px] !w-[400px] sm:!w-[450px] md:!w-[500px]" >
                            <div className="flex flex-col gap-5 text-center items-center md:text-left md:items-start rounded-[20px] border-[1px] border-[#EDEDED] py-[35px] px-[50px] shadow-xl">
                                <div className="h-[41px] leading-[1.9] rounded-[20px] border-[1px] border-[#007DFC] text-[#007DFC] text-xl text-center font-bold px-[16px]">{item.type}</div>
                                <div className="h-auto md:h-[250px]">
                                    <h3 className="text-[27px] md:text-[30px] font-bold">{item.title}</h3>
                                    <p className="banner-content overflow-hidden">{item.content}</p>
                                </div>
                                <button className="ctm-btn bg-[#007DFC] text-lg text-white px-[30px]">See Sample</button>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-0 right-0 ctm-grad-to-left hidden md:flex flex-col gap-4 justify-center pl-[140px] pr-[80px] py-10 md:w-[500px] lg:w-[650px] h-full">
                    <h2 className="banner-title">Copywriting Samples</h2>
                    <p className="banner-content">Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. </p>
                    <div className="flex flex-row gap-5">
                        <CustomPrevArrow ctmClassName="bg-[#06193E]" isBig={true} onClick={() => { sliderRef.current?.slickPrev() }} />
                        <CustomNextArrow ctmClassName="bg-[#06193E]" isBig={true} onClick={() => { sliderRef.current?.slickNext() }} />
                    </div>
                </div>
            </div>
            <div className="w-full md:hidden">
                <div className="flex justify-center gap-5">
                    <CustomPrevArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
            </div>
        </div>
    );
}
export default Index;