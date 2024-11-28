 'use client';
import React, { useState } from "react";
import { ArrowUpTrayIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import RadioButtonGroup from '../../components/utils/RadioButtonGroup';

interface OptType {
    id: number;
    label: string;
}

const opt1: OptType[] = [
    { id: 0, label: 'Words'},
    { id: 1, label: 'Pages'},
]

const opt2: OptType[] = [
    { id: 0, label: 'Double Spaced'},
    { id: 1, label: 'Single Spaced'},
]

interface CompPropsType {
    changeStep: (step: number) => void
}

const Index: React.FC<CompPropsType> = ({changeStep}) =>  {
     const [ paperType, setPaperType ] = useState<number>(0);
    const handleWordOrPrice = (item: number) => {
        console.log(item);
    }
    const handleFormating = (item: number) => {
        console.log(item);
    }

    const handlePaperType = (index: number) => {
        setPaperType(index);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        changeStep(2);
    }

    const handleBack = (e: React.FormEvent) => {
        // e.preventDefault();
        changeStep(0);
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="">
                <h3 className="banner-subtitle">
                    Help Information
                </h3>
                <p className="banner-content">
                    Lörem ipsum ultrartad högen. Esk hemiseren euron.
                </p>
            </div>
            <form className=" ctm-form flex flex-col gap-9 flex-1" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-3">
                        <label htmlFor="topic" className="text-lg md:text-2xl font-bold">Topic</label>
                        <input id="topic" type="text" placeholder="Write here" className="main-input primary"/>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex flex-col gap-3">
                            <label htmlFor="description" className="text-lg md:text-2xl font-bold">Description</label>
                            <textarea id="description"  placeholder="Write here" rows={10} className="main-input-textarea primary h-[330px]"/>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-2">
                        <div className="relative">
                            <input type="file" id='upload' hidden className='absolute inline-block opacity-0 top-0 left-0 bottom-0 right-0 z-40 cursor-pointer'/>
                            <span className="h-[49px] px-6 text-center text-xl font-bold rounded-[25px] inline-flex flex-row justify-center items-center text-white bg-[#000000] cursor-pointer">
                                <ArrowUpTrayIcon  width={30} />&nbsp; Attachment
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <RadioButtonGroup opts={opt1} onChange={handleWordOrPrice} className="mb-5" />
                    <input type="text" placeholder="Name" className="main-input primary"/>
                    <div className="flex items-center gap-2">
                        <InformationCircleIcon width={30} />
                        <p className="banner-content">Pick whether you want price to be based off word or pages.</p>
                    </div>
                </div>
                <div className="w-full">
                    <RadioButtonGroup opts={opt2} onChange={handleFormating} />
                </div>
                <div className="w-full flex flex-col gap-3">
                    <label htmlFor="duedate" className="text-lg md:text-2xl font-bold">Due Date</label>
                    <input id="duedate" type="text" placeholder="2 days (Jan2 09:06 AM)" className="main-input primary"/>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <p className="text-lg md:text-2xl font-bold">Due Date</p>
                    <div className="w-full flex gap-3">
                        <button 
                            className={`ctm-btn px-8 rounded-[25px] text-[22px] text-[#4F4F4F] ${ paperType === 0? 'bg-[#007DFC] text-white': 'bg-[#F2F8FF]'}`} 
                            onClick={() =>handlePaperType(0)} >
                            APA</button>
                        <button 
                            className={`ctm-btn px-8 rounded-[25px] text-[22px] text-[#4F4F4F] ${ paperType === 1? 'bg-[#007DFC] text-white': 'bg-[#F2F8FF]'}`} 
                            onClick={() =>handlePaperType(1)} >
                            MLA</button>
                        <button 
                            className={`ctm-btn px-8 rounded-[25px] text-[22px] text-[#4F4F4F] ${ paperType === 2? 'bg-[#007DFC] text-white': 'bg-[#F2F8FF]'}`} 
                            onClick={() =>handlePaperType(2)} >
                            Harvard</button>
                        <button 
                            className={`ctm-btn px-8 rounded-[25px] text-[22px] text-[#4F4F4F] ${ paperType === 3? 'bg-[#007DFC] text-white': 'bg-[#F2F8FF]'}`} 
                            onClick={() =>handlePaperType(3)} >
                            A4</button>
                    </div>
                </div>
                <div className="w-full gap-4 flex justify-end mt-5">
                    <button className="ctm-btn btn-lg text-black text-xl font-bold cursor-pointer bg-[#B6B6B650]" onClick={handleBack}>Back</button>
                    <input type="submit" className="ctm-btn btn-lg bg-[#007DFC] text-white text-xl font-bold cursor-pointer" value='Continue' />
                </div>
            </form>
        </div>
    )
}

export default Index;