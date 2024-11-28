'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import CustomLink from "../components/utils/CustomLink";

interface BarsItem {
    title: string;
    href: string;
    baseUrl: string;
    activeicon: React.ReactNode;
    icon: React.ReactNode;
}

const bars: BarsItem[] = [
    { 
        title: 'My Orders', 
        href: '/dashboard/order',
        baseUrl: '/dashboard/order', 
        activeicon: (
            <svg width="22" height="25" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8516 0.658691H3.60156C2.35892 0.658691 1.35156 1.66605 1.35156 2.90869V17.5337C1.35156 18.7763 2.35892 19.7837 3.60156 19.7837H14.8516C16.0942 19.7837 17.1016 18.7763 17.1016 17.5337V2.90869C17.1016 1.66605 16.0942 0.658691 14.8516 0.658691Z" stroke="#007DFC" strokeWidth="1.125"/>
                <path d="M5.85156 6.28125H12.6016" stroke="#007DFC" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M5.85156 10.7837H12.6016" stroke="#007DFC" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M5.85156 15.2788H10.3516" stroke="#007DFC" strokeWidth="1.125" strokeLinecap="round"/>
            </svg>
        ),
        icon: (
            <svg width="22" height="25" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8516 0.658691H3.60156C2.35892 0.658691 1.35156 1.66605 1.35156 2.90869V17.5337C1.35156 18.7763 2.35892 19.7837 3.60156 19.7837H14.8516C16.0942 19.7837 17.1016 18.7763 17.1016 17.5337V2.90869C17.1016 1.66605 16.0942 0.658691 14.8516 0.658691Z" stroke="#000000" strokeWidth="1.125"/>
                <path d="M5.85156 6.28125H12.6016" stroke="#000000" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M5.85156 10.7837H12.6016" stroke="#000000" strokeWidth="1.125" strokeLinecap="round"/>
                <path d="M5.85156 15.2788H10.3516" stroke="#000000" strokeWidth="1.125" strokeLinecap="round"/>
            </svg>
        )
    },
    { 
        title: 'Payment Methods', 
        href: '/dashboard/payment', 
        baseUrl: '/dashboard/payment', 
        activeicon: (
            <svg width="25" height="18" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9348 0.249512C19.391 0.249512 20.5817 1.38629 20.6679 2.82085L20.6729 2.98765V11.4561C20.6729 12.9123 19.5361 14.103 18.1016 14.1892L17.9348 14.1942H3.51939C2.06317 14.1942 0.872451 13.0574 0.786247 11.6229L0.78125 11.4561V2.98765C0.78125 1.53143 1.91803 0.340712 3.35259 0.254509L3.51939 0.249512H17.9348ZM19.1786 6.19774H2.27378L2.27478 11.4561C2.27478 12.1005 2.76453 12.6305 3.39213 12.6942L3.51939 12.7007H17.9348C18.5792 12.7007 19.1092 12.2109 19.173 11.5833L19.1794 11.4561L19.1786 6.19774ZM16.9531 9.68792C17.3655 9.68792 17.6998 10.0223 17.6998 10.4347C17.6998 10.8127 17.4189 11.1252 17.0544 11.1746L16.9531 11.1814H14.4638C14.0514 11.1814 13.7171 10.8471 13.7171 10.4347C13.7171 10.0566 13.998 9.74418 14.3625 9.69474L14.4638 9.68792H16.9531ZM17.9348 1.74304H3.51939C2.87497 1.74304 2.34494 2.2328 2.28121 2.8604L2.27478 2.98765L2.27378 4.70421H19.1786L19.1794 2.98765C19.1794 2.34323 18.6896 1.8132 18.062 1.74947L17.9348 1.74304Z" fill="#007DFC"/>
            </svg>
        ),
        icon: (
            <svg width="25" height="18" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9348 0.249512C19.391 0.249512 20.5817 1.38629 20.6679 2.82085L20.6729 2.98765V11.4561C20.6729 12.9123 19.5361 14.103 18.1016 14.1892L17.9348 14.1942H3.51939C2.06317 14.1942 0.872451 13.0574 0.786247 11.6229L0.78125 11.4561V2.98765C0.78125 1.53143 1.91803 0.340712 3.35259 0.254509L3.51939 0.249512H17.9348ZM19.1786 6.19774H2.27378L2.27478 11.4561C2.27478 12.1005 2.76453 12.6305 3.39213 12.6942L3.51939 12.7007H17.9348C18.5792 12.7007 19.1092 12.2109 19.173 11.5833L19.1794 11.4561L19.1786 6.19774ZM16.9531 9.68792C17.3655 9.68792 17.6998 10.0223 17.6998 10.4347C17.6998 10.8127 17.4189 11.1252 17.0544 11.1746L16.9531 11.1814H14.4638C14.0514 11.1814 13.7171 10.8471 13.7171 10.4347C13.7171 10.0566 13.998 9.74418 14.3625 9.69474L14.4638 9.68792H16.9531ZM17.9348 1.74304H3.51939C2.87497 1.74304 2.34494 2.2328 2.28121 2.8604L2.27478 2.98765L2.27378 4.70421H19.1786L19.1794 2.98765C19.1794 2.34323 18.6896 1.8132 18.062 1.74947L17.9348 1.74304Z" fill="black"/>
            </svg>
        )
    },
    { 
        title: 'Help Center', 
        href: '/dashboard/helper/faq', 
        baseUrl: '/dashboard/helper', 
        activeicon: (
            <svg width="27" height="27" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8151 22.1048C17.4818 22.1048 22.0755 17.5111 22.0755 11.8444C22.0755 6.17773 17.4818 1.58398 11.8151 1.58398C6.14843 1.58398 1.55469 6.17773 1.55469 11.8444C1.55469 17.5111 6.14843 22.1048 11.8151 22.1048Z" stroke="#007DFC" strokeWidth="1.53906"/>
                <path d="M11.8151 15.9437C14.0818 15.9437 15.9193 14.1062 15.9193 11.8395C15.9193 9.57285 14.0818 7.73535 11.8151 7.73535C9.54844 7.73535 7.71094 9.57285 7.71094 11.8395C7.71094 14.1062 9.54844 15.9437 11.8151 15.9437Z" stroke="#007DFC" strokeWidth="1.53906"/>
                <path d="M14.8906 8.76383L18.9948 4.65967" stroke="#007DFC" strokeWidth="1.53906"/>
                <path d="M4.63281 19.0207L8.73698 14.9165" stroke="#007DFC" strokeWidth="1.53906"/>
                <path d="M8.73698 8.76383L4.63281 4.65967" stroke="#007DFC" strokeWidth="1.53906"/>
                <path d="M18.9948 19.0207L14.8906 14.9165" stroke="#007DFC" strokeWidth="1.53906"/>
            </svg>
        ),
        icon: (
            <svg width="27" height="27" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8151 22.1048C17.4818 22.1048 22.0755 17.5111 22.0755 11.8444C22.0755 6.17773 17.4818 1.58398 11.8151 1.58398C6.14843 1.58398 1.55469 6.17773 1.55469 11.8444C1.55469 17.5111 6.14843 22.1048 11.8151 22.1048Z" stroke="black" strokeWidth="1.53906"/>
                <path d="M11.8151 15.9437C14.0818 15.9437 15.9193 14.1062 15.9193 11.8395C15.9193 9.57285 14.0818 7.73535 11.8151 7.73535C9.54844 7.73535 7.71094 9.57285 7.71094 11.8395C7.71094 14.1062 9.54844 15.9437 11.8151 15.9437Z" stroke="black" strokeWidth="1.53906"/>
                <path d="M14.8906 8.76383L18.9948 4.65967" stroke="black" strokeWidth="1.53906"/>
                <path d="M4.63281 19.0207L8.73698 14.9165" stroke="black" strokeWidth="1.53906"/>
                <path d="M8.73698 8.76383L4.63281 4.65967" stroke="black" strokeWidth="1.53906"/>
                <path d="M18.9948 19.0207L14.8906 14.9165" stroke="black" strokeWidth="1.53906"/>
            </svg>
        )
    },
]

interface DataProps {
    classname? : string;
}

const Index: React.FC<DataProps> = ({ classname}) => {
    let pathname = usePathname();
    // let [ active, setActive ] = useState<number | null>(null);

    let className = classname || '';
    return (
        <div className="w-full flex flex-col gap-8">
            { bars.map((bar, idx) => (
                <CustomLink href={bar.href} key={bar.href}>
                    <div 
                        key={bar.title} 
                        className={`${pathname.startsWith(bar.baseUrl)? 'text-[#007DFC] border-l-[3px] border-l-[#007DFC]': 'text-[#000000]'} w-full h-[48px] px-[50px] border-[3px] border-[#F6F6F6] text-[20px] font-semibold flex flex-row items-center cursor-pointer ${className}`}
                        // onClick={() => setActive(idx)}
                    >
                        <span className='inline-block'>{ pathname.startsWith(bar.baseUrl)? bar.activeicon: bar.icon}</span>
                        &nbsp;&nbsp;&nbsp;{bar.title}
                    </div>
                </CustomLink>
            ))}
        </div>
    )
} 

export default Index;
