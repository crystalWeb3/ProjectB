"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/legacy/image";
import Avatar from "../utils/Avatar";

// CAROUSEL DATA

interface DataType {
    subscribe?: string;
    comment?: string;
    imgSrc: string;
    name?: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user1.png',
    },
    {
        name: "Leslie Alexander",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user2.png',
    },
    {
        name: "Cody Fisher",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user3.png',
    },
    {
        name: "Robert Fox",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user4.png',
    },
    {
        name: "Leslie Alexander",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user5.png',
    },
   
]

// CAROUSEL SETTINGS

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    className: '!w-[400px] sm:!w-[450px] md:!w-[500px] overflow-visible',
};


const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="relative bg-white p-10 pt-12 md:pt-16 lg:pt-20 overflow-hidden ">
            <div className="ctm-container flex flex-col mx-auto gap-8  md:gap-12">
                <div className="text-center w-full mx-auto max-w-4xl">
                    <h1 className="banner-title mb-6 md:mb-3 ">
                        Testimonials 
                    </h1>
                    <p className="banner-content">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <div className="w-full ctm-slide">
                    <Slider {...settings} ref={sliderRef}>
                        { postData.filter(itm => itm?.comment).map((item, idx) => (
                            <div className="px-4 px-[10px] !w-[400px] sm:!w-[450px] md:!w-[500px] " key={`idx-${idx}`}>
                                <div className={`flex flex-col gap-3 p-8 rounded-[16px] md:rounded-[30px] bg-[#F2F8FF]`}>
                                    <p className="banner-content overflow-ellipsis overflow-hidden max-h-[200px]">
                                        {item.comment}
                                    </p>
                                    <div className="flex">
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                        <StarIcon width={20} className="star" />
                                    </div>
                                    <Avatar 
                                        img={item.imgSrc} 
                                        name={item.name} 
                                        subscribe={item.subscribe}
                                        isDark={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full md:hidden flex flex-row justify-center gap-3">
                    <CustomPrevArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
                <div className="w-full hidden md:flex flex-row justify-center gap-3">
                    <CustomPrevArrow isBig={true} ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow isBig={true} ctmClassName="bg-[#06193E]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
            </div>
        </div>
    );
}
export default Index;
