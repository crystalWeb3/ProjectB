"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import CustomNextArrow from "../utils/CustomNextArrow";
import CustomPrevArrow from "../utils/CustomPrevArrow";
import Link from 'next/link'

interface DataType {
    subscribe?: string;
    comment?: string;
    imgSrc?: string;
    title?: string;
    icon?: React.ReactNode;
}

const postData: DataType[] = [
    {
        title: "Plagiarism-free Content & Papers",
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: (
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M46.0995 15.0159V60.8967H0.21875V15.0159H46.0995ZM60.2188 0.898438V46.7827H49.6309V11.4863H14.3345V0.898438H60.2188ZM10.8066 32.6624H35.5116V29.1331H10.8066V32.6624ZM10.8066 39.7209H28.4531V36.1917H10.8066V39.7209ZM10.8066 46.7831H35.5116V43.2503H10.8066V46.7831Z" fill="#007DFC"/>
            </svg>
        ),
    },
    {
        imgSrc: '/images/bestforyou/best1.png',
    },
    {
        title: "Confidential Proof Service",
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: (
            <svg width="66" height="74" viewBox="0 0 66 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.1587 7.01015L33.818 0.296581C33.5269 0.243587 33.2287 0.243587 32.9376 0.296581C32.6944 0.259872 32.447 0.259872 32.2038 0.296581L5.71642 7.01015C4.03697 7.4294 2.55982 8.42892 1.5461 9.83202C0.532381 11.2351 0.0473675 12.9514 0.1768 14.6776L1.71762 34.8917C2.33472 42.9103 5.13658 50.6067 9.81905 57.1453C14.5015 63.684 20.8857 68.815 28.2784 71.9814L31.5068 73.3755C31.9137 73.545 32.3501 73.6323 32.7908 73.6323C33.2316 73.6323 33.668 73.545 34.0748 73.3755L37.3032 71.9814C44.696 68.815 51.0802 63.684 55.7626 57.1453C60.4451 50.6067 63.2469 42.9103 63.864 34.8917L65.4049 14.6776C65.5495 12.9905 65.1061 11.3053 64.1499 9.90779C63.1937 8.51031 61.7836 7.48656 60.1587 7.01015ZM46.5482 28.5816L31.8737 43.2561C31.5326 43.6 31.1269 43.8729 30.6798 44.0591C30.2328 44.2454 29.7533 44.3413 29.269 44.3413C28.7847 44.3413 28.3051 44.2454 27.8581 44.0591C27.411 43.8729 27.0053 43.6 26.6642 43.2561L19.327 35.9189C18.6362 35.2281 18.2481 34.2911 18.2481 33.3142C18.2481 32.3372 18.6362 31.4003 19.327 30.7094C20.0178 30.0186 20.9548 29.6305 21.9317 29.6305C22.9087 29.6305 23.8456 30.0186 24.5364 30.7094L29.269 35.4786L41.3387 23.3722C42.0295 22.6814 42.9665 22.2933 43.9434 22.2933C44.9204 22.2933 45.8573 22.6814 46.5482 23.3722C47.239 24.063 47.6271 25 47.6271 25.9769C47.6271 26.9539 47.239 27.8908 46.5482 28.5816Z" fill="#007DFC"/>
            </svg>

        ),
    },
    {
        imgSrc: '/images/bestforyou/best2.png',
    },
    {
        title: "Money-back guarantee",
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: (
            <svg width="74" height="77" viewBox="0 0 74 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M37.4032 0.121098H37.0216C33.7244 0.120988 30.975 0.120915 28.7924 0.414342C26.4886 0.7241 24.4086 1.40545 22.7372 3.07688C21.0658 4.7483 20.3844 6.82828 20.0747 9.13206C19.8643 10.6967 19.8048 14.4382 19.788 17.6462C12.367 17.8886 7.91135 18.7549 4.81491 21.8514C0.515625 26.1507 0.515625 33.0704 0.515625 46.9095C0.515625 60.7486 0.515625 67.6685 4.81491 71.9675C9.11419 76.2669 16.0338 76.2669 29.873 76.2669H44.5518C58.3908 76.2669 65.3108 76.2669 69.6098 71.9675C73.9092 67.6685 73.9092 60.7486 73.9092 46.9095C73.9092 33.0704 73.9092 26.1507 69.6098 21.8514C66.5133 18.7549 62.058 17.8886 54.6368 17.6462C54.6199 14.4382 54.5604 10.6967 54.3502 9.13206C54.0404 6.82828 53.359 4.7483 51.6874 3.07688C50.0163 1.40545 47.9363 0.7241 45.6325 0.414342C43.4498 0.120915 40.7004 0.120988 37.4032 0.121098ZM49.1311 17.559C49.1146 14.452 49.0618 11.1084 48.8948 9.86556C48.6669 8.17211 48.2735 7.44739 47.7954 6.96916C47.3172 6.49093 46.5925 6.09746 44.8989 5.8698C43.1265 5.63149 40.75 5.62561 37.2124 5.62561C33.6748 5.62561 31.2983 5.63149 29.5259 5.8698C27.8324 6.09746 27.1077 6.49093 26.6295 6.96916C26.1513 7.44739 25.7578 8.17211 25.5301 9.86556C25.363 11.1084 25.3102 14.452 25.2936 17.559C26.73 17.5521 28.2542 17.5521 29.873 17.5521H44.5518C46.1708 17.5521 47.6948 17.5521 49.1311 17.559ZM37.2124 29.4785C38.7324 29.4785 39.9647 30.7108 39.9647 32.2308V32.2682C43.9602 33.2748 47.304 36.4252 47.304 40.7932C47.304 42.3132 46.0717 43.5455 44.5518 43.5455C43.0318 43.5455 41.7995 42.3132 41.7995 40.7932C41.7995 39.3841 40.2369 37.4296 37.2124 37.4296C34.1879 37.4296 32.6253 39.3841 32.6253 40.7932C32.6253 42.2028 34.1879 44.1572 37.2124 44.1572C42.2945 44.1572 47.304 47.6794 47.304 53.0257C47.304 57.3938 43.9602 60.5442 39.9647 61.5508V61.5882C39.9647 63.1082 38.7324 64.3405 37.2124 64.3405C35.6924 64.3405 34.4601 63.1082 34.4601 61.5882V61.5508C30.4646 60.5442 27.1208 57.3938 27.1208 53.0257C27.1208 51.5058 28.353 50.2735 29.873 50.2735C31.393 50.2735 32.6253 51.5058 32.6253 53.0257C32.6253 54.4349 34.1879 56.3894 37.2124 56.3894C40.2369 56.3894 41.7995 54.4349 41.7995 53.0257C41.7995 51.6162 40.2369 49.6617 37.2124 49.6617C32.1303 49.6617 27.1208 46.14 27.1208 40.7932C27.1208 36.4252 30.4646 33.2748 34.4601 32.2682V32.2308C34.4601 30.7108 35.6924 29.4785 37.2124 29.4785Z" fill="#007DFC"/>
            </svg>
        ),
    },
    {
        title: "Free revisions",
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        icon: (
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.3281 2.36719H36.5781L25.3281 13.6172L36.5781 24.8672H40.3281V17.3672H45.9531V38.7722C42.6419 40.2189 40.3281 43.5227 40.3281 47.3672C40.3281 52.5448 44.5255 56.7422 49.7031 56.7422C54.8808 56.7422 59.0781 52.5448 59.0781 47.3672C59.0781 43.5227 56.7644 40.2189 53.4531 38.7722V9.86719H40.3281V2.36719Z" fill="#007DFC"/>
                <path d="M25.3281 58.6172L36.5781 47.3672L25.3281 36.1172H21.5781V43.6172H15.9531V22.2121C19.2642 20.7654 21.5781 17.4615 21.5781 13.6172C21.5781 8.43953 17.3808 4.24219 12.2031 4.24219C7.02546 4.24219 2.82812 8.43953 2.82812 13.6172C2.82812 17.4615 5.14206 20.7654 8.45312 22.2121V51.1172H21.5781V58.6172H25.3281Z" fill="#007DFC"/>
            </svg>
        ),
    },
]

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    className: '!w-[400px] sm:!w-[450px] md:!w-[500px] overflow-visible',
};


const Index = () => {
    const sliderRef = useRef<Slider>(null);
    return (
        <div className="relative bg-[#F2F8FF] p-10 pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-20">
            <div className="ctm-container flex flex-col mx-auto overflow-hidden gap-5">
                <div className="text-center text-white w-full mx-auto max-w-4xl mb-5 md:mb-10">
                    <h1 className="banner-title">
                        MissilBets is Best for you
                    </h1>
                    <p className="banner-content pt-6">
                        Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär.
                    </p>
                </div>
                <div className="w-full hidden lg:flex flex-col gap-8">
                    { [0,1].map(itm => (
                        <div className='w-full flex flex-row gap-6' key={`item-${itm}`}>
                            {[0,1,2].map(idx => {
                                let index = 3 * itm + idx;
                                if(!postData[index]?.comment) {
                                    let img_src = "url('" + postData[index].imgSrc + "')";
                                    return (
                                        <div className='w-[20%] h-[400px] rounded-[30px] relative' 
                                            key={`idx-${idx}`}
                                            style={{ background: `${img_src} center / cover no-repeat`}}
                                        >
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div  key={`idx-${idx}`} className='flex w-[40%] flex-col gap-3 p-10 pt-16 border-[1px] border-[#EDEDED] rounded-[16px] md:rounded-[30px] bg-white'>
                                            <span className="h-[75px] w-[75px] inline-flex justify-center items-center">
                                                {postData[index].icon}
                                            </span>
                                            <div className="max-h-[270px] overflow-ellipsis overflow-hidden">
                                                <h3 className="text-[25px] md:text-[35px] font-bold">{postData[index].title}</h3>
                                                <p className="banner-content">
                                                    {postData[index].comment}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    ))}
                </div>
                <div className="w-full block lg:hidden ctm-slide">
                    <Slider {...settings} ref={sliderRef}>
                        { postData.filter(itm => itm?.comment).map((item, idx) => (
                            <div className="px-8 !w-[400px] sm:!w-[450px] md:!w-[500px]" key={`idx-${idx}`}>
                                <div className='flex w-full flex-col gap-3 p-10 pt-16 border-[1px] border-[#EDEDED] rounded-[16px] md:rounded-[30px] bg-white'>
                                    <span className="h-[75px] w-[75px] inline-flex justify-center items-center">
                                        {item.icon}
                                    </span>
                                    <div className="h-[270px] md:h-[320px] overflow-ellipsis overflow-hidden">
                                        <h3 className="text-[25px] md:text-[35px] font-bold">{item.title}</h3>
                                        <p className="banner-content">
                                            {item.comment}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="w-full block lg:hidden flex flex-row justify-center gap-3">
                    <CustomPrevArrow ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickPrev() }} />
                    <CustomNextArrow ctmClassName="bg-[#007DFC]" onClick={() => { sliderRef.current?.slickNext() }} />
                </div>
                <Link href='/auth/login'>
                    <div className="flex justify-center my-10">
                        <button className="ctm-btn bg-strong-blue text-white text-2xl font-bold p-10">Get Quato Today</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Index;
 