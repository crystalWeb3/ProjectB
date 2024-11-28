'use client';
import React, { useState } from "react";
import SquareCheckbox from '../../components/utils/SquareCheckbox';
import InputSelector from '../../components/utils/InputSelector';

interface CardType {
    id: number,
    text: string,
}
const cards: CardType[] = [
    { id: 0, text: 'Visa card'},
    { id: 1, text: 'Master card'},
]

interface CompPropsType {
    changeStep: (step: number) => void
}

const Index: React.FC<CompPropsType> = ({changeStep}) =>  {
    const [ card, setCard ] = useState(null)
    const handleCard = (data: any) => {
        if(data) setCard(data);
    };
    const handleSubmit = (e: React.FormEvent) => {
    }
    const handleBack = (e: React.FormEvent) => {
        changeStep(2);
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="">
                <h3 className="banner-subtitle">
                    Payment
                </h3>
                <p className="banner-content">
                    Lörem ipsum ultrartad högen. Esk hemiseren euron.
                </p>
            </div>
            <div className="w-full flex flex-col gap-4">
                <InputSelector items={cards} onChange={handleCard} placeholder='Choose Card' type={2} />
            </div>
            <div className="w-full gap-4 flex justify-end">
                <button className="ctm-btn btn-lg text-black text-xl font-bold cursor-pointer bg-[#B6B6B650]" onClick={handleBack}>Back</button>
                <button className="ctm-btn btn-lg bg-[#007DFC] text-white text-xl font-bold cursor-pointer" onClick={handleSubmit}>Continue</button>
            </div>
        </div>
    )
}

export default Index;