'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Index = () => {
    const [ isOvered, setIsOvered ] = useState<number | null>(1);

    return (
        <span className='relative flex flex-row items-center w-[220px] h-[57px] z-10'>
            <Link
                href='/auth/login'
                className={`inline-flex items-center justify-center w-[130px] h-full text-[21px] font-[400] text-center transition duration-250 z-40
                    ${isOvered === 0 ? 'text-white': ''}
                `}
                onMouseOver={() => {
                    setIsOvered(0);

                }}
                onMouseLeave={() => {
                    setIsOvered(1);
                }}
            >
                Login
            </Link>
            <Link
                href='/auth/register'
                className={`inline-flex items-center justify-center w-[130px] h-full text-[21px] font-[400] text-center transition duration-250 z-40
                        ${isOvered === 1 ? 'text-white': ''}
                    `}
                // onMouseOver={() => {
                //     setIsOvered(1);

                // }}
                // onMouseLeave={() => {
                //     setIsOvered(null);
                // }}
            >
                Signup
            </Link>
            <span className={`absolute h-[57px] w-[110px] rounded-[30px] bg-[#007DFC] transition-all duration-400 z-20
                ${isOvered === 1 ? 'left-[110px]': 'left-0'}
            `}></span>
        </span>
    )
}

export default Index;