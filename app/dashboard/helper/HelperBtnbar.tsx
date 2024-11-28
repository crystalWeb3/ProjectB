'use client';
import React, { useEffect, useState }  from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Index = () => {
    const pathname = usePathname();
    useEffect(() => {

    }, [])
    return (
        <div className="flex flex justify-start gap-4">
            <Link href='/dashboard/helper/faq'>
                <button 
                    className={`h-[49px] px-10 text-xl font-bold rounded-[25px] flex justify-center items-center pl-8 border-[1px] 
                        ${ pathname === "/dashboard/helper/faq"? 'text-white bg-[#007DFC] border-[#007DFC]' : 'border-[#E1E1E1] hover:text-white hover:bg-[#007DFC] hover:border-[#007DFC]'}
                    `}>
                        Faq
                </button>
            </Link>
            <Link href='/dashboard/helper/tickets'>
                <button 
                    className={`h-[49px] px-10 text-xl font-bold rounded-[25px] flex justify-center items-center pl-8 border-[1px] 
                        ${ pathname === "/dashboard/helper/tickets"? 'text-white bg-[#007DFC] border-[#007DFC]' : 'border-[#E1E1E1] hover:text-white hover:bg-[#007DFC] hover:border-[#007DFC]'}
                    `}>
                        Tickets
                </button>
            </Link>
            <Link href='/dashboard/helper/contact'>
                <button 
                    className={`h-[49px] px-10 text-xl font-bold rounded-[25px] flex justify-center items-center pl-8 border-[1px] 
                        ${ pathname === "/dashboard/helper/contact"? 'text-white bg-[#007DFC] border-[#007DFC]' : 'border-[#E1E1E1] hover:text-white hover:bg-[#007DFC] hover:border-[#007DFC]'}
                    `}>
                        Contact Information
                </button>
            </Link>
        </div>
    )
}
export default Index;