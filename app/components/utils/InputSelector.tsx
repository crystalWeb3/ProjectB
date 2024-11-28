'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

interface ItemType {
    id: any, 
    text: string,
    [key: string]: any,
}

interface DataProps {
    items: ItemType[],
    type?: number,
    placeholder: string,
    classname?: string,
    onChange: (item: ItemType | null) => any;
}

const Index: React.FC<DataProps> = ({ items, onChange, classname, placeholder, type = 1 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState<ItemType | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside
    const className = classname || '';

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`w-full flex relative ${className}`} ref={dropdownRef}>
            <div
                className='w-full flex-1 flex flex-row items-center gap-1 justify-between'
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`w-full flex items-center justify-between text-xl h-[57px] rounded-[50px] pl-[28px] pr-[15px] border-[1px] ${ type === 1? 'bg-[#F6F9FC] border-[#EDEDED]': 'bg-[#F2F8FF] border-none'}  hover:border-[#007DFC50] ${ isOpen && 'border-[#007DFC50]' }`}>
                    {/* <span>{item ? item.text : placeholder}</span> */}
                    { item 
                        ? <span>{item.text}</span>
                        : <span className='text-[#595959]'>{placeholder}</span>
                    }
                    <span >
                        { isOpen === true ? <ChevronUpIcon width={23} />: <ChevronDownIcon width={23} />}
                    </span>
                </div>
            </div>
            {isOpen && (
                <div className="absolute w-full shadow-xl top-[100%] left-0 rounded-[15px]  py-2 z-40 bg-white">
                    <div className="w-full h-full  max-h-[295px] overflow-auto">
                        {items.map((itm, idx) => {
                            return (
                                <div
                                    className={`w-full flex flex-row items-center pl-[30px] py-1 gap-2 cursor-pointer px-3 transition ease-in duration-100
                                        ${itm.id === item?.id ? 'bg-[#007DFC30]' : 'hover:bg-[#007DFC50]'}
                                    `}
                                    onClick={() => {
                                        setItem(itm);
                                        onChange(itm);
                                        setIsOpen(false);
                                    }}
                                    key={itm.text}
                                >
                                    <span className='block text-lg'>&nbsp;{itm.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Index;
