'use client';
import React from "react";
import Link from "next/link";
import CustomLink from "../../components/utils/CustomLink";

const Index = () => {
    return (
        <div className="w-full h-[100vh] relative overflow-hidden">
            <div className="h-full w-full flex flex-col gap-3 items-center mt-[17vh]">
                <div className="p-5 sm:px-10 md:px-0 sm:w-[550px] ">
                    <div className="flex justify-center items-center mb-10">
                        <span>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_324_6584)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M27.1021 12.6112C25.3817 11.4617 23.3591 10.8481 21.29 10.8481V0.386719C25.4282 0.386719 29.4734 1.61382 32.9142 3.91286C36.3549 6.21188 39.0366 9.47959 40.6202 13.3027C42.2038 17.1258 42.6182 21.3328 41.8109 25.3914C41.0035 29.45 39.0109 33.1782 36.0847 36.1042C33.1586 39.0304 29.4305 41.0231 25.3719 41.8304C21.3133 42.6377 17.1063 42.2233 13.2832 40.6398C9.46006 39.0561 6.19235 36.3744 3.89333 32.9337C1.59429 29.4929 0.367188 25.4477 0.367188 21.3096H10.8286C10.8286 23.3786 11.4422 25.4012 12.5917 27.1216C13.7412 28.842 15.375 30.1828 17.2867 30.9747C19.1982 31.7665 21.3017 31.9736 23.331 31.5699C25.3603 31.1663 27.2243 30.17 28.6874 28.7069C30.1504 27.2438 31.1468 25.3798 31.5504 23.3505C31.9541 21.3212 31.747 19.2177 30.9551 17.3062C30.1633 15.3946 28.8225 13.7607 27.1021 12.6112Z" fill="#007DFC"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8286 0.386723C10.8286 1.76054 10.558 3.1209 10.0323 4.39013C9.50655 5.65938 8.73597 6.81263 7.76453 7.78407C6.7931 8.75551 5.63985 9.52609 4.3706 10.0518C3.10136 10.5776 1.741 10.8481 0.367188 10.8481L0.367188 21.3096C3.11481 21.3096 5.83554 20.7684 8.37402 19.7169C10.9125 18.6654 13.219 17.1243 15.1618 15.1814C17.1047 13.2386 18.6459 10.932 19.6974 8.39355C20.7489 5.85507 21.29 3.13434 21.29 0.386719L10.8286 0.386723Z" fill="#007DFC"/>
                                    </g>
                                <defs>
                                    <clipPath id="clip0_324_6584">
                                        <rect width="41.8457" height="41.8457" fill="white" transform="translate(0.367188 0.388672)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <h2 className="text-[35px] font-semibold">&nbsp;MissilBets</h2>
                    </div>
                    <div className="w-full flex flex-col gap-5 rounded-[15px] md:rounded-[30px] bg-[#F2F8FF] pt-8 md:pt-12 px-6 md:px-10 pb-7 md:pb-10">
                        <form className="ctm-form flex flex-col w-full gap-5" onSubmit={e => e.preventDefault()}>
                            <h2 className="banner-subtitle w-full text-center mb-2">Forget Password?</h2>
                            <p className="banner-content px-[6%]">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
                            <input type="text" className="main-input" placeholder="Email Address" />
                            <button className="ctm-btn bg-[#007DFC] text-xl font-bold text-white w-full">
                                <CustomLink href='/auth/pwdlinksent' classname="">Sent Reset Password Link</CustomLink>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;