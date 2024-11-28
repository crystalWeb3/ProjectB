 'use client';
import React, { useState } from "react";
import SquareCheckbox from '../../components/utils/SquareCheckbox';

interface CompPropsType {
    changeStep: (step: number) => void
}

const Index: React.FC<CompPropsType> = ({changeStep}) =>  {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        changeStep(3);
    }
   
    const handleBack = (e: React.FormEvent) => {
        e.preventDefault();
        changeStep(1);
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="">
                <h3 className="banner-subtitle">
                Additional Features
                </h3>
                <p className="banner-content">
                    Lörem ipsum ultrartad högen. Esk hemiseren euron.
                </p>
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="flex justify-between">
                    <SquareCheckbox text="Grammarly Report" value={true} />
                    <span className="banner-content !text-black">$250.00</span>
                </div>
                <div className="flex justify-between">
                    <SquareCheckbox text="Plagiarism Report" value={true} />
                    <span className="banner-content !text-black">$250.00</span>
                </div>
                <div className="flex justify-between">
                    <SquareCheckbox text="Summary of paper (+275 words)" value={false} />
                    <span className="banner-content !text-black">$250.00</span>
                </div>
            </div>
            <div className="w-full gap-4 flex justify-end">
                <button className="ctm-btn btn-lg text-black text-xl font-bold cursor-pointer bg-[#B6B6B650]" onClick={handleBack}>Back</button>
                <button className="ctm-btn btn-lg bg-[#007DFC] text-white text-xl font-bold cursor-pointer" onClick={handleSubmit}>Continue</button>
            </div>
        </div>
    )
}

export default Index;