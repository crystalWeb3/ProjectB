'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/legacy/image";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

interface DataProps {
    currencys: any[],
    classname? : string;
    onClick?: (newValue?: any) => void;
}

const Index: React.FC<DataProps> = ({ currencys, classname, onClick }) => {
    let [ isOpen, setIsOpen ] = useState(false);
    let [ index, setIndex] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const className = classname || '';

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node))  {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])
    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <div className='inline-flex flex-row items-center gap-1 h-[57px] cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                {currencys[index].src && <Image src={currencys[index].src} alt="us-flag" width={35} height={35} className="inline-block rounded-[50%]" />}
                <span className='inline-block text-xl'>&nbsp;{currencys[index].name}</span> 
                <span >
                    { isOpen === true ? <ChevronUpIcon width={23} />: <ChevronDownIcon width={23} />}
                </span>
            </div>
            { isOpen && <div className="absolute w-auto min-w-[130px] rounded-[10px] shadow-xl bg-[#F2F8FF] top-[100%] left-[50%] translate-x-[-50%] bg-white py-2">
                { currencys.map((currency, idx) => {
                    return (
                        <div className={`w-full inline-flex flex-row items-center justify-center py-1 gap-2 cursor-pointer px-[5%] transition ease-in duration-100
                                ${idx === index? 'bg-[#007DFC30]': 'hover:bg-[#007DFC50]'}
                            `}
                            onClick={() => {
                                setIndex(idx);
                                setIsOpen(!isOpen);
                                if(onClick) onClick();
                            }}
                            key={currency.name}>
                            { currencys[index].src && <Image src={currency.src} alt="us-flag" width={35} height={35} className="inline-block rounded-[50%]" />}
                            <span className='inline-block text-xl'>&nbsp;{currency.name}</span>
                        </div>
                    )
                })}
            </div>}
        </div>
    );
};

export default Index;
