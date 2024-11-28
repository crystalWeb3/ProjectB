"use client"
import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/24/outline';
interface Datatype {
    title: string,
    content: string
}

interface AccordionProps {
    datas: Datatype[];
}

const Index: React.FC<AccordionProps> = ({ datas }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); 
    const handleDisclosureClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close it if it's already open
        } else {
            setActiveIndex(index); // Open the clicked one
        }
    };

    return  (
        <>
            {datas.map((fq, idx) => (
                <div key={idx} className='w-full flex flex-col items-center'>
                    <Disclosure>
                        {({ open }) => (
                            <div 
                                className={`w-full max-w-6xl px-6 my-5 pt-8 ${ activeIndex === idx ? 'bg-white rounded-[30px]' : ''}`}
                            >
                                <Disclosure.Button
                                    className="flex w-full justify-between rounded-3xl px-4 py-2 text-left text-2xl font-medium"
                                    onClick={() => handleDisclosureClick(idx)} // Handle click
                                >
                                    <span className='text-2xl md:text-3xl font-bold'>{fq.title}</span>
                                    <span className={`w-[51px] h-[51px] inline-flex items-center justify-center rounded-[50%] transition-all duration-300 ${activeIndex === idx ? 'bg-[#007DFC] rotate-[45deg]': 'bg-[#FFFFFF]'}`}>
                                        <svg width="20" height="20" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.4897 16.4262L8.45669 1.80796M1.16406 9.10059L15.7823 9.1336" stroke={activeIndex === idx ? '#FFFFFF': '#007DFC'} strokeWidth="2.1875" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                </Disclosure.Button>
                                <Transition
                                    show={activeIndex === idx} // Control with activeIndex
                                    enter="transition-all duration-500 ease-in-out"
                                    enterFrom="max-h-0 opacity-0"
                                    enterTo="max-h-[500px] opacity-100"
                                    leave="transition-all duration-300 ease-in-out"
                                    leaveFrom="max-h-[500px] opacity-100"
                                    leaveTo="max-h-0 opacity-0"
                                >
                                    <Disclosure.Panel className="px-4 pt-1 pb-6 banner-content pr-4 md:pr-16">
                                        {fq.content}
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                    {idx !== (datas.length - 1) && <div className="w-full max-w-6xl border-b-[1px] border-t-[#000000] opacity-10" />}
                </div>
            ))}
        </>
        
    )
}

export default Index;