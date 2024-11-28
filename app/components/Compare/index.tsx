'use client'
import React, { useRef } from "react";
import Checkbox from "../utils/Checkbox";
import Ellipse from "../utils/Ellipse";
import Slider from "react-slick";

interface DataType {
    state: boolean;
    name: string;
}

const postData: DataType[] = [
    { state: true, name: 'Live Writing Video of Tutors' },
    { state: true, name: '100% Verified Tutors' },
    { state: true, name: 'Plagiarism-free Content' },
    { state: true, name: 'Refund Policy' },
    { state: false, name: 'Live Writing Video of Tutors' },
    { state: true, name: '100% Verified Tutors' },
    { state: true, name: 'Plagiarism-free Content' },
    { state: false, name: 'Refund Policy' },
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
   
    const part1 = postData.slice(0, 4); // Add 1 extra to the first part if remainder > 0
    const part2 = postData.slice(4, 8); // Handle 2nd part

    return (
        <div className="relative ctm-container mx-auto mt-16 md:mt-24">
            <div className="ctm-card bg-weak-blue flex flex-col items-center gap-12 px-8 md:px-12 lg:px-16 pt-14 lg:pt-22 xl:pt-28 pb-20 md:pb-24 lg:pb-28 xl:pb-32 rounded-0 md:rounded-[30px] gap-5 z-10" >
                <div className="text-center w-full flex flex-col items-center gap-5">
                    <h1 className="banner-title">
                        MissilBets is Affordable compared to others
                    </h1>
                    <p className="banner-content max-w-[700px]">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär. 
                    </p>
                </div>
                <div className="px-[15%] sm:px-[20%] w-full md:w-auto relative bg-white rounded-[17px] lg:rounded-[30px] z-40 md:px-[50px] lg:px-[70px] xl:px-[100px] pt-[60px] pb-[50px] md:pb-[60px] lg:pb-[100px] ">
                    <div className="flex flex-col lg:flex-row gap-7 justify-between">
                        <div className="flex flex-col gap-7 items-start lg:items-center">
                            <h3 className="w-full text-[27px] md:text-[30px] font-bold flex flex-row items-center lg:justify-center">
                                <span>
                                    <svg width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_324_6198)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M27.7115 11.4521C25.9911 10.4065 23.9685 9.84842 21.8994 9.84842V0.333008C26.0375 0.333008 30.0828 1.44915 33.5235 3.54028C36.9643 5.63141 39.646 8.60363 41.2296 12.081C42.8132 15.5584 43.2275 19.385 42.4202 23.0766C41.6129 26.7682 39.6202 30.1592 36.6941 32.8206C33.768 35.4822 30.0399 37.2947 25.9813 38.029C21.9226 38.7633 17.7157 38.3864 13.8926 36.946C10.0694 35.5056 6.80172 33.0664 4.5027 29.9368C2.20367 26.8072 0.976562 23.1278 0.976562 19.3638H11.438C11.438 21.2458 12.0516 23.0855 13.2011 24.6503C14.3506 26.2151 15.9844 27.4347 17.896 28.1549C19.8075 28.8752 21.911 29.0636 23.9403 28.6964C25.9696 28.3293 27.8337 27.423 29.2968 26.0923C30.7598 24.7615 31.7562 23.066 32.1598 21.2202C32.5635 19.3744 32.3563 17.4611 31.5645 15.7225C30.7727 13.9837 29.4319 12.4976 27.7115 11.4521Z" fill="#007DFC"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.438 0.333012C11.438 1.58259 11.1674 2.81994 10.6417 3.9744C10.1159 5.12887 9.34534 6.17784 8.3739 7.06143C7.40248 7.94502 6.24922 8.64592 4.97998 9.12411C3.71073 9.6023 2.35037 9.84843 0.976563 9.84843L0.976562 19.3638C3.72419 19.3638 6.44491 18.8716 8.9834 17.9152C11.5219 16.9588 13.8284 15.557 15.7712 13.7898C17.7141 12.0227 19.2553 9.92474 20.3068 7.6158C21.3582 5.30686 21.8994 2.83217 21.8994 0.333008L11.438 0.333012Z" fill="#007DFC"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_324_6198">
                                                <rect width="41.8457" height="38.0617" fill="white" transform="translate(0.976562 0.334961)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span>&nbsp;MissilBets</span>
                            </h3>
                            <div className="w-full flex flex-col gap-6">
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
                        </div>
                        <div className="hidden lg:block border-l-[1px] border-[#EDEDED] mt-[15px]"></div>
                        <div className="flex flex-col gap-7 text-left lg:text-center">
                            <h3 className="text-[27px] md:text-[30px] font-bold pl-[10px]">Competitors</h3>
                            <div className="w-full flex flex-col gap-6">
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
                        </div>
                    </div>
                </div>
                <Ellipse width="380px" height="380px" left="130px" top="130px" opacity="0.1" className="hidden lg:block" zindex="20"/>
                <Ellipse width="380px" height="380px" left="88%" top="80%" opacity="0.1" className="hidden lg:block" zindex="20"/>
            </div>
            
        </div>
    );
};

export default Index;
