'use client'
import React, { useRef } from "react";
import Checkbox from "../utils/Checkbox";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import Ellipse from "../utils/Ellipse";
import Slider from "react-slick";
import StartOrderBtn from '../utils/StartOrderBtn';


interface DataType {
    state: boolean;
    name: string;
}

const postData: DataType[] = [
    { state: true, name: 'Case Study' },
    { state: true, name: 'Presentation Or Speech' },
    { state: true, name: 'Article Review' },
    { state: true, name: 'Business Plan' },
    { state: true, name: 'Case Study' },
    { state: true, name: 'Presentation Or Speech' },
    { state: true, name: 'Article Review' },
    { state: true, name: 'Business Plan' },
    { state: true, name: 'Case Study' },
    { state: true, name: 'Article Review' },
    { state: true, name: 'Business Plan' },
    { state: true, name: 'Article Review' },
];

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
};

const Index = () => {
    // Calculate the basic size for each part and the remainder
    const baseSize = Math.floor(postData.length / 3);
    const remainder = postData.length % 3;
    let partSize1 = baseSize;
    let partSize2 = baseSize;
    if(remainder > 0) {
        partSize1 = baseSize + 1;
        if(remainder === 2) {
            partSize2 = baseSize + 1;
        }
    }
    // Split the data into three parts
    const part1 = postData.slice(0, partSize1); // Add 1 extra to the first part if remainder > 0
    const part2 = postData.slice(partSize1, partSize1 + partSize2); // Handle 2nd part
    const part3 = postData.slice(partSize1 + partSize2); // Remaining items go to the 3rd part
    let slides = [];
    slides.push(part1, part2, part3)

    const sliderRef = useRef<Slider>(null);

    return (
        <div className="relative ctm-container mx-auto md:overflow-hidden mt-12 md:mt-20">
            <div className="relative overflow-hidden ctm-card bg-weak-blue flex flex-col px-8 md:px-12 lg:px-16 pt-14 lg:pt-22 xl:pt-28 py-10 lg:py-14 xl:py-20 rounded-0 md:rounded-[30px] gap-5" >
                <div className="text-center w-full mx-auto max-w-4xl mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple lg:leading-tight">
                        Your #1 Copywriting Service
                    </h1>
                    <p className="text-xl lg:text-2xl text-[#595959] pt-6">
                        Our expert writers can tackle any writing task you entrust to them. Here are some of the services we offer. 
                    </p>
                </div>
                <div className="w-full hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 justify-center">
                        <div className="w-full flex flex-col gap-5">
                            {part1.map((item, index) => (
                                <Checkbox
                                    key={index}
                                    text={item.name}
                                    value={item.state}
                                    changeValue={(newValue: boolean) => {
                                        console.log(`${item.name} state changed to ${newValue}`);
                                    }}
                                    disable={true}
                                />
                            ))}
                        </div>

                        <div className="w-full flex flex-col gap-5">
                            {part2.map((item, index) => (
                                <Checkbox
                                    key={index}
                                    text={item.name}
                                    value={item.state}
                                    changeValue={(newValue: boolean) => {
                                        console.log(`${item.name} state changed to ${newValue}`);
                                    }}
                                    disable={true}
                                />
                            ))}
                        </div>

                        <div className="w-full flex flex-col gap-5">
                            {part3.map((item, index) => (
                                <Checkbox
                                    key={index}
                                    text={item.name}
                                    value={item.state}
                                    changeValue={(newValue: boolean) => {
                                        console.log(`${item.name} state changed to ${newValue}`);
                                    }}
                                    disable={true}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full block md:hidden">
                    {/* <div className="flex flex-row justify-between items-center gap-4"> */}
                        {/* <div className="max-w-[300px]"> */}
                            <Slider {...settings} ref={sliderRef}>
                                {slides.map((slide, idx) => 
                                    <div key={idx} className="p-4 mx-4">
                                        <div className="flex flex-col gap-5">
                                            {slide.map((item, index) => (
                                                <Checkbox
                                                    key={index}
                                                    text={item.name}
                                                    value={item.state}
                                                    changeValue={(newValue: boolean) => {
                                                        console.log(`${item.name} state changed to ${newValue}`);
                                                    }}
                                                    disable={true}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        {/* </div> */}
                    {/* </div> */}
                </div>
                <div className="w-full flex flex-row justify-center gap-3  block md:hidden">
                    <CustomPrevArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
                <div className="flex justify-center mt-3 mb-4 md:mt-7 md:mb-10">
                    <StartOrderBtn text="Get Started Today" />
                </div>
                <Ellipse width="380px" height="380px" left="130px" top="130px" opacity="0.1" className="hidden lg:block" zindex="10"/>
                <Ellipse width="380px" height="380px" left="88%" top="650px" opacity="0.1" className="hidden lg:block" zindex="10"/>
            </div>
        </div>
    );
};

export default Index;
