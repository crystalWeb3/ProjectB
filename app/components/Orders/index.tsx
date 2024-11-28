"use client"
import React, { useRef } from "react";
// import Slider from "react-slick";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
// import Slider from '../utils/Sliders';

// CAROUSEL DATA

interface DataType {
    order: string;
    name: string;
}

const postData: DataType[] = [
    {
        order: 'Completed Orders: 2411',
        name: 'History',
    },
    {
        order: 'Completed Orders: 2411',
        name: 'Education',
    },
    {
        order: 'Completed Orders: 2411',
        name: 'Social Work',
    },
    {
        order: 'Completed Orders: 2411',
        name: 'Business',
    },
    {
        order: 'Completed Orders: 2411',
        name: 'History',
    },
]

// // CAROUSEL SETTINGS
// const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     // centerMode: true,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     speed: 2500,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     className: '!w-[470px] overflow-visible',
//     rtl: false,
// };

const Index = () => {
    // const sliderRef = useRef<Slider>(null);
    return (
        <div className="relative w-full overflow-x-hidden pt-10">
            <div className="flex animate-slide">
                    {[...postData, ...postData].map((items, i) => (
                        <div key={i} className="!w-[500px] flex-shrink-0">
                            <div className='bg-[#F2F8FF] items-center flex p-7 py-8 min-w-[320px] mx-5 rounded-[29px]'>
                                <div className='items-center'>
                                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="31.4116" cy="31.1226" r="31.0679" fill="#007DFC"/>
                                        <path d="M18.6328 28.2826C18.6328 22.928 18.6328 20.2508 20.2963 18.5873C21.9597 16.9238 24.637 16.9238 29.9916 16.9238H32.8313C38.1859 16.9238 40.8633 16.9238 42.5266 18.5873C44.1901 20.2508 44.1901 22.928 44.1901 28.2826V33.962C44.1901 39.3166 44.1901 41.994 42.5266 43.6574C40.8633 45.3209 38.1859 45.3209 32.8313 45.3209H29.9916C24.637 45.3209 21.9597 45.3209 20.2963 43.6574C18.6328 41.994 18.6328 39.3166 18.6328 33.962V28.2826Z" stroke="white" strokeWidth="2.12978"/>
                                        <path d="M25.7344 28.2822H37.0932" stroke="white" strokeWidth="2.12978" strokeLinecap="round"/>
                                        <path d="M25.7344 33.9639H32.8336" stroke="white" strokeWidth="2.12978" strokeLinecap="round"/>
                                    </svg>
                                </div>
                                <div className="items-start ml-3 flex flex-col">
                                    <h4 className='text-4xl font-bold'>{items.name}</h4>
                                    <h3 className='text-xl text-[#595959]'>{items.order}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        // <Sliders />
    );
}

export default Index;