
'use client'
import React, { useRef } from "react";
import IconButton from '../utils/IconButton';
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import Slider from "react-slick";

// import Link from "next/link";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

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
    icon: React.ReactNode;
    title: string;
    content: string;
}

const benefits : DataType[] = [
    {
        icon: (
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.30082 2.54545C0.242187 4.60411 0.242188 7.91743 0.242188 14.5441V21.5728C0.242188 28.1994 0.242187 31.5128 2.30082 33.5714C4.35948 35.63 7.6728 35.63 14.2995 35.63H17.8138C24.4404 35.63 27.7539 35.63 29.8124 33.5714C31.8711 31.5128 31.8711 28.1994 31.8711 21.5728V14.5441C31.8711 7.91743 31.8711 4.60411 29.8124 2.54545C27.7539 0.486817 24.4404 0.486816 17.8138 0.486816H14.2995C7.6728 0.486816 4.35948 0.486817 2.30082 2.54545ZM9.028 13.2262C8.30016 13.2262 7.71012 13.8163 7.71012 14.5441C7.71012 15.2719 8.30016 15.862 9.028 15.862H23.0853C23.8131 15.862 24.4032 15.2719 24.4032 14.5441C24.4032 13.8163 23.8131 13.2262 23.0853 13.2262H9.028ZM9.028 20.2549C8.30016 20.2549 7.71012 20.8449 7.71012 21.5728C7.71012 22.3006 8.30016 22.8906 9.028 22.8906H17.8138C18.5416 22.8906 19.1317 22.3006 19.1317 21.5728C19.1317 20.8449 18.5416 20.2549 17.8138 20.2549H9.028Z" fill="#007DFC"/>
            </svg>
        ),
        title: 'Tailored to Your Specifications',
        content: "We craft our papers according to the instructions you provide. To ensure that the essay is suited to your liking."
    },
    {
        icon: (
            <svg width="15" height="40" viewBox="0 0 15 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6169 12.5699H6.13141V18.631C6.13141 19.3002 5.58833 19.8433 4.91919 19.8433C4.25004 19.8433 3.70697 19.3002 3.70697 18.631V12.5699H0.0703125V4.08441C0.0703125 2.07576 1.69832 0.447754 3.70697 0.447754H10.9803C12.9889 0.447754 14.6169 2.07576 14.6169 4.08441V12.5699ZM14.6169 30.7532V13.7822H7.34363V18.631C7.34363 19.2784 7.09149 19.8869 6.63327 20.3451C6.17505 20.8033 5.56651 21.0555 4.91919 21.0555C3.58211 21.0555 2.49475 19.9681 2.49475 18.631V13.7822H0.0703125V30.7532C0.0703125 31.4224 0.613387 31.9655 1.28253 31.9655H13.4047C14.0739 31.9655 14.6169 31.4224 14.6169 30.7532ZM2.49475 33.1777L6.13141 36.8143V37.9744C6.13141 38.6072 6.59448 39.1733 7.22483 39.2327C7.94731 39.3018 8.55585 38.7357 8.55585 38.0266V36.8143L12.1925 33.1777H2.49475Z" fill="#007DFC"/>
            </svg>
        ),
        title: '100% Human-Written Cotent',
        content: "Our work is 100% original, free from any AI and plagiarism content. Each paper is scanned for AI and plagiarism content before its sent to the client."
    },
    {
        icon: (
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1823 0.198242C13.9246 0.198242 10.74 1.16427 8.0313 2.97417C5.3226 4.78406 3.21143 7.35653 1.96475 10.3663C0.718074 13.376 0.391887 16.6879 1.02744 19.883C1.66299 23.0781 3.23173 26.013 5.53529 28.3166C7.83885 30.6202 10.7738 32.1889 13.9689 32.8245C17.164 33.46 20.4759 33.1338 23.4856 31.8871C26.4954 30.6405 29.0678 28.5293 30.8777 25.8206C32.6876 23.1119 33.6537 19.9273 33.6537 16.6696C33.6537 12.3011 31.9183 8.11157 28.8293 5.02259C25.7403 1.93361 21.5508 0.198242 17.1823 0.198242ZM7.80392 12.4385C7.80392 12.0313 7.92467 11.6332 8.15091 11.2946C8.37715 10.9561 8.69871 10.6922 9.07493 10.5363C9.45115 10.3805 9.86513 10.3397 10.2645 10.4192C10.6639 10.4986 11.0308 10.6947 11.3187 10.9826C11.6067 11.2706 11.8028 11.6375 11.8822 12.0368C11.9616 12.4362 11.9209 12.8502 11.765 13.2264C11.6092 13.6026 11.3453 13.9242 11.0067 14.1504C10.6681 14.3767 10.2701 14.4974 9.86284 14.4974C9.31678 14.4974 8.79309 14.2805 8.40696 13.8944C8.02084 13.5083 7.80392 12.9846 7.80392 12.4385ZM17.3161 27.1804C15.4276 27.1829 13.5869 26.5862 12.0589 25.4763C10.5309 24.3664 9.39439 22.8004 8.81279 21.0036H25.8092C25.2281 22.7987 24.0931 24.3635 22.5672 25.4733C21.0413 26.583 19.2029 27.1807 17.3161 27.1804ZM24.4503 14.4974C24.0431 14.4974 23.645 14.3767 23.3064 14.1504C22.9678 13.9242 22.7039 13.6026 22.5481 13.2264C22.3923 12.8502 22.3515 12.4362 22.4309 12.0368C22.5104 11.6375 22.7065 11.2706 22.9944 10.9826C23.2824 10.6947 23.6492 10.4986 24.0486 10.4192C24.448 10.3397 24.862 10.3805 25.2382 10.5363C25.6144 10.6922 25.936 10.9561 26.1622 11.2946C26.3884 11.6332 26.5092 12.0313 26.5092 12.4385C26.5092 12.7098 26.4556 12.9783 26.3515 13.2288C26.2474 13.4793 26.0948 13.7067 25.9025 13.898C25.7102 14.0894 25.4821 14.2408 25.2311 14.3437C24.9801 14.4465 24.7112 14.4988 24.44 14.4974H24.4503Z" fill="#007DFC"/>
            </svg>
        ),
        title: '100% Customer Satisfication',
        content: "We provide unlimited revisions free of charge, so that youll get your ideal paper. "
    },
]

const Index = () => {
    const sliderRef = useRef<Slider>(null);
    
    return (
        <div className="ctm-container mx-auto mt-12 md:mt-24 p-10 md:mb-10">
            <div className='mx-auto relative flex flex-col overflow-hidden gap-4'>
                <div className="text-center w-full mx-auto max-w-3xl mb-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkpurple lg:leading-tight">
                        MissilBets Benefits  
                    </h1>
                    <p className="text-xl lg:text-2xl text-[#595959] pt-6">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär. 
                    </p>
                </div>
                <div className="w-full hidden md:block">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5 gap-x-6 lg:gap-x-10'>
                        { benefits.map((b, idx) => (
                            <div className='bg-white mt-4 group text-center' key={idx}>
                                <IconButton
                                    icon={b.icon}
                                />
                                <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold  text-black my-6'>{b.title}</h4>
                                <p className='text-xl lg:text-2xl text-[#595959]'>{b.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full block md:hidden max-w-2xl">
                    <Slider {...settings} ref={sliderRef}>
                        { benefits.map((b, idx) => 
                            <div className='bg-white px-4 group text-center' key={idx}>
                                <IconButton
                                    icon={b.icon}
                                />
                                <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold  text-black my-6'>{b.title}</h4>
                                <p className='text-xl lg:text-2xl text-[#595959]'>{b.content}</p>
                            </div>
                        )}
                    </Slider>
                </div>
                <div className="w-full block md:hidden flex flex-row justify-center gap-3">
                    <CustomPrevArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow  ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
            </div>
        </div>
    )
}

export default Index;
