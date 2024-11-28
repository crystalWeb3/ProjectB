"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import { StarIcon } from '@heroicons/react/24/solid';
import Avatar from "../utils/Avatar";
import StartOrderBtn from '../utils/StartOrderBtn';

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
        name: "Robert Fox",
        subscribe: 'CEO, Parkview Int.Ltd',
        imgSrc: '/images/humans/vid1.png',
    },
    {
        name: "Leslie Alexander",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user2.png',
    },
    {
        name: "Leslie Alexander",
        subscribe: 'CEO, Parkview Int.Ltd',
        imgSrc: '/images/humans/vid2.png',
    },
    {
        name: "Cody Fisher",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user3.png',
    },
    {
        name: "Cody Fisher",
        subscribe: 'CEO, Parkview Int.Ltd',
        imgSrc: '/images/humans/vid3.png',
    },
    {
        name: "Robert Fox",
        subscribe: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/images/humans/user4.png',
    },
    {
        name: "Robert Fox",
        subscribe: 'CEO, Parkview Int.Ltd',
        imgSrc: '/images/humans/vid4.png',
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
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 1.5,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false
    //         }
    //     },
    //     {
    //         breakpoint: 550,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false
    //         }
    //     }
    // ]
};


const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="relative bg-[#0D0D28] p-10 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-20">
            <div className="ctm-container flex flex-col mx-auto overflow-hidden gap-5">
                <div className="text-center text-white w-full mx-auto max-w-4xl mb-5 md:mb-10">
                    <h1 className="hidden md:block text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-tight">
                        What People are Saying?
                    </h1>
                    <h1 className="block md:hidden text-4xl font-bold lg:leading-tight">
                        Testimonials?
                    </h1>
                    <p className="text-xl lg:text-2xl pt-6">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <div className="w-full hidden md:flex flex-col gap-8">
                    { [0,1,2].map(itm => (
                        <div className='w-full flex flex-row gap-6' key={`item-${itm}`}>
                            {[0,1,2].map(idx => {
                                let index = 3 * itm + idx;
                                let width_class = 'w-[30%]';
                                if(itm === idx) width_class = "w-[40%]";
                                if(!postData[index]?.comment) {
                                    let img_src = "url('" + postData[index].imgSrc + "')";
                                    return (
                                        <div className={`${width_class} h-[400px] rounded-[30px] relative`} 
                                            key={`idx-${idx}`}
                                            style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${img_src} center / cover no-repeat`}}
                                        >
                                            <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[83px] h-[83px] rounded-[50%] bg-[#ffffff20] cursor-pointer">
                                                <span className="absolute inline-block left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                                                    <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30.8908 12.9153C34.5437 14.9018 34.5437 20.0439 30.8908 22.0303L8.83496 34.0242C5.28476 35.9549 0.921875 33.442 0.921875 29.4667V5.47895C0.921875 1.50363 5.28476 -1.00918 8.83495 0.921416L30.8908 12.9153Z" fill="white"/>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="absolute left-[10%] bottom-[15%]">
                                                <Avatar 
                                                    name={postData[index].name} 
                                                    subscribe={postData[index].subscribe}
                                                    isDark={true}
                                                />
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div  key={`idx-${idx}`} className={`flex ${width_class} flex-col gap-3 p-8 rounded-[30px] bg-[#ffffff05]`}>
                                            <p className="text-xl text-[#D0D0D0] h-[200px] overflow-ellipsis overflow-hidden">
                                                {postData[index].comment}
                                            </p>
                                            <div className="flex">
                                                <StarIcon width={21} className="star" />
                                                <StarIcon width={21} className="star" />
                                                <StarIcon width={21} className="star" />
                                                <StarIcon width={21} className="star" />
                                                <StarIcon width={21} className="star" />
                                            </div>
                                            <Avatar 
                                                img={postData[index].imgSrc} 
                                                name={postData[index].name} 
                                                subscribe={postData[index].subscribe}
                                                isDark={true}
                                            />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    ))}
                </div>
                <div className="w-full block md:hidden">
                    <Slider {...settings} ref={sliderRef}>
                        { postData.filter(itm => itm?.comment).map((item, idx) => (
                            <div className="px-4" key={`idx-${idx}`}>
                                <div className={`flex flex-col gap-3 p-8 rounded-[30px] bg-[#ffffff05]`}>
                                    <p className="text-xl text-[#D0D0D0] overflow-ellipsis overflow-hidden">
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
                                        isDark={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full block md:hidden flex flex-row justify-center gap-3">
                    <CustomPrevArrow ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
                <div className="flex justify-center my-10">
                    <StartOrderBtn text="Get Quato Today" />
                </div>
            </div>
        </div>
    );
}
export default Index;
