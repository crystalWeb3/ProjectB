'use client'
import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Ellipse from "../../components/utils/Ellipse";
import Circle from "../../components/utils/Circle";
import Image from "next/legacy/image";
import Link from 'next/link';
import CustomLink from "../../components/utils/CustomLink";
import { useSnackbar } from '../../../context/SnackbarContext';

interface Icon {
    icon: React.ReactNode;
}

const icons : Icon [] = [
    { icon: ( <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_324_6639)">
                    <rect width="27" height="27.75" transform="translate(0.671875 0.328125)" fill="#F9F9F9"/>
                        <path d="M27.1319 14.5187C27.1319 13.5349 27.046 12.5888 26.8864 11.6807H14.1719V17.0478H21.4373C21.1244 18.7821 20.1732 20.2516 18.7435 21.2355V24.7169H23.1064C25.6591 22.3013 27.1319 18.7443 27.1319 14.5187Z" fill="#4285F4"/>
                        <path d="M14.1735 28.0786C17.8185 28.0786 20.8744 26.8361 23.108 24.7171L18.7451 21.2357C17.5362 22.0682 15.9898 22.5601 14.1735 22.5601C10.6573 22.5601 7.68119 20.1194 6.6196 16.8398H2.10938V20.4347C4.33074 24.9693 8.89619 28.0786 14.1735 28.0786Z" fill="#34A853"/>
                        <path d="M6.61801 16.8391C6.34801 16.0066 6.1946 15.1173 6.1946 14.2028C6.1946 13.2883 6.34801 12.3991 6.61801 11.5666V7.97168H2.10778C1.19347 9.8448 0.671875 11.9639 0.671875 14.2028C0.671875 16.4417 1.19347 18.5608 2.10778 20.434L6.61801 16.8391Z" fill="#FBBC05"/>
                    <path d="M14.1735 5.84659C16.1555 5.84659 17.9351 6.54665 19.3341 7.92153L23.2062 3.94193C20.8682 1.70301 17.8123 0.328125 14.1735 0.328125C8.89619 0.328125 4.33074 3.43739 2.10938 7.97199L6.6196 11.5669C7.68119 8.28733 10.6573 5.84659 14.1735 5.84659Z" fill="#EA4335"/>
                </g>
                <defs>
                    <clipPath id="clip0_324_6639">
                        <rect width="27" height="27.75" fill="white" transform="translate(0.671875 0.328125)"/>
                    </clipPath>
                </defs>
            </svg> )},
    { icon: (<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.007 18.3294C33.007 14.2444 31.3843 10.3267 28.4957 7.4381C25.6072 4.54954 21.6894 2.92676 17.6044 2.92676C13.7259 2.92318 9.9888 4.38296 7.13961 7.01449C4.29043 9.64603 2.5389 13.2556 2.23491 17.1222C1.93092 20.9888 3.09684 24.8277 5.49978 27.8721C7.90272 30.9166 11.3658 32.9425 15.1972 33.545V22.7808H11.2893V18.3294H15.1994V14.9364C15.1994 11.077 17.4988 8.9426 21.0172 8.9426C22.7027 8.9426 24.4652 9.24405 24.4652 9.24405V13.0353H22.5222C20.6079 13.0353 20.0138 14.2235 20.0138 15.4403V18.3294H24.2848L23.6026 22.7808H20.0116V33.545C23.6346 32.9713 26.9339 31.1237 29.3161 28.3345C31.6983 25.5452 33.0071 21.9975 33.007 18.3294Z" fill="#1877F2"/>
                <path d="M23.6002 22.7808L24.2823 18.3294H20.0114V15.4403C20.0114 14.2235 20.6055 13.0353 22.5198 13.0353H24.4627V9.24188C24.4627 9.24188 22.7002 8.94043 21.0147 8.94043C17.4941 8.94043 15.1969 11.0748 15.1969 14.9343V18.3294H11.2891V22.7808H15.1991V33.5451C16.7941 33.7961 18.4186 33.7961 20.0136 33.5451V22.7808H23.6002Z" fill="white"/>
            </svg>
            )}
]

const Index = () => {
    const { register } = useAuth();
    const { showSnackbar } = useSnackbar();
    const [formData, setFormData ] = useState({ email: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { email, password } = formData;
        if( !email && !password) {
            showSnackbar("All fields are required.", "error");
        } else {
            await register(formData.email, formData.password);
            setFormData({ email: "", password: ""});
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100vh]">
            <div className="h-full w-full hidden lg:flex flex-col gap-8 items-center bg-[#F2F8FF] pt-[10%]">
                <CustomLink href='/main/home'>
                    <div className="flex justify-center items-center">
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
                </CustomLink>
                <CustomLink classname="flex w-full relative h-[43%] overflow-visible" href='/main/home'>
                    <div className="w-[22.5vh] absolute rotate-[-10deg] left-[44%] top-[3vh] translate-x-[-50%] overflow-visible z-30">
                        <Image 
                            width={230} height={84} 
                            src='/images/signup/register1.png' 
                            layout="responsive" alt="register1" 
                        />
                    </div>
                    <div className="w-[24vh] absolute rotate-[5deg] left-[55%] top-[10.5vh] translate-x-[-50%] overflow-visible z-30">
                        <Image 
                            width={235} height={230} 
                            src='/images/signup/register2.png' 
                            layout="responsive" alt="register2" 
                        />
                    </div>
                    <div className="w-[20.7vh] absolute left-[60%] top-[32vh] translate-x-[-50%] overflow-visible z-30">
                        <Image 
                            width={207} height={63} 
                            src='/images/signup/register3.png' 
                            layout="responsive" alt="register3" 
                        />
                    </div>
                    <Circle width="39vh" height="39vh" left="50%" top="50%" opacity="0.1" className="hidden lg:block rounded-[50%] transfrom translate-x-[-50%] translate-y-[-50%]" zindex="20" />
                    <Circle width="35vh" height="35vh" left="50%" top="50%" opacity="0.1" className="hidden lg:block rounded-[50%] transfrom translate-x-[-50%] translate-y-[-50%]" zindex="20" />
                    <Ellipse width="350px" height="350px" left="50%" top="50%" opacity="0.25" className="hidden lg:block transfrom translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                    <Ellipse width="13px" height="13px" left="28%" top="20%" opacity="1"  filter="blur(0)"  className="hidden rounded-[50%] lg:block transfrom translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                    <Ellipse width="13px" height="13px" left="76%" top="91%" opacity="0.3"  filter="blur(0)"  className="hidden rounded-[50%] lg:block transfrom translate-x-[-50%] translate-y-[-50%]" zindex="10"/>
                </CustomLink>
                <div className="flex flex-col items-center text-center w-full relative lg:px-[10%] xl:px-[18%] 2xl:px-[23%]">
                    <h1 className="banner-subtitle">High-quality writing on any topic</h1>
                    <p className="banner-content">Lörem ipsum geol nystartsjobb milingar. Krokatt stenorade. Poliitet jymäde ekotes. Sonera håtär men kavar för dock</p>
                </div>
            </div>
            <div className="relative h-full w-full flex flex-col gap-3 items-center justify-between">
                <div className="flex lg:hidden justify-center items-center pt-[5vw]">
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
                <div className="w-full px-[10%] sm:px-[20%] md:px-0 md:w-[450px] flex flex-1 justify-center flex-col gap-5">
                    <form action="" className="ctm-form flex flex-col w-full gap-6" onSubmit={handleSubmit}>
                        <h2 className="banner-subtitle w-full text-center mb-2">Signup to Get Started</h2>
                        <input type="text" className="main-input primary" name="email" onChange={handleChange} placeholder="Email Address" />
                        <input type="password" className="main-input primary" name="password" onChange={handleChange} placeholder="Password" />
                        <input type="submit" value="Continue with Email" className="ctm-btn bg-[#007DFC] text-xl font-bold text-white w-full cursor-pointer" />
                        <p className="text-center w-full banner-content">
                            Already Have Account ?&nbsp;
                            <CustomLink href='/auth/login' classname="underline">
                                Login
                            </CustomLink>
                        </p>
                    </form>
                    <div className="border-b-[1px] my-2 border-[#00000010] relative">
                        <span className="inline-block text-xl absolute left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 bg-white">OR</span>
                    </div>
                    <button className="ctm-btn bg-[#F9F9F9]">
                        <span>{icons[0].icon}</span>
                        <span className="text-xl font-bold">Continue with Google</span>
                    </button>
                    <button className="ctm-btn bg-[#F9F9F9]">
                        <span>{icons[1].icon}</span>
                        <span className="text-xl font-bold">Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index;