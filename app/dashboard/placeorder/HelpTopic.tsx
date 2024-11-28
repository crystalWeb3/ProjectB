'use client';

import React, { useState } from "react";
import InputSelector from "../../components/utils/InputSelector";
import { InformationCircleIcon } from '@heroicons/react/24/outline';

interface ItemType {
    id: number,
    text: string,
    [key: string]: any,
}

const copytypes = [
    { id: 0, text: "Custom Essay"},
    { id: 1, text: "Discussion Post Help"},
    { id: 2, text: "Research Paper"},
    { id: 3, text: "Accounting Assignment"},
    { id: 4, text: "Admission Essay"},
    { id: 5, text: "Annotated Bibliography"},
    { id: 6, text: "Article Review"},
    { id: 7, text: "Biology Assignment"},
    { id: 8, text: "Book/Movie Review"},
    { id: 9, text: "Business Plan"},
    { id: 10, text: "Business Proposal"},
    { id: 11, text: "Capstone Project"},
    { id: 12, text: "Case Study"},
    { id: 13, text: "Chemistry Assignment"},
    { id: 14, text: "Coding Assignment"},
    { id: 15, text: "Cover Letter"},
    { id: 16, text: "Creative Writing"},
    { id: 17, text: "Dissertation"},
    { id: 18, text: "Economics Assignment"},
    { id: 19, text: "Engineering Assignment"},
    { id: 20, text: "Essay Editing/Proofreading"},
    { id: 21, text: "Essay Outline"},
    { id: 22, text: "Excel Assignment"},
    { id: 23, text: "Foreign Language"},
    { id: 24, text: "Geography Assignment"},
    { id: 25, text: "Homework Help (Q&A with Tutor)"},
    { id: 26, text: "Lab Report"},
    { id: 27, text: "Letter Writing"},
    { id: 28, text: "Literatiure Review/Book Report"},
    { id: 29, text: "Marketing Plan"},
    { id: 30, text: "Math Assignment"},
    { id: 31, text: "Other"},
    { id: 32, text: "Physics Assignment"},
    { id: 33, text: "PowerPoint/slideShow"},
    { id: 34, text: "Reaction Paper"},
    { id: 35, text: "Reflective Writing"},
    { id: 36, text: "Research Proposal"},
    { id: 37, text: "Resume"},
    { id: 38, text: "Speech"},
    { id: 39, text: "Statistics Assignment"},
    { id: 40, text: "SWOT Analysis"},
    { id: 41, text: "Temp Paper"},
    { id: 42, text: "Thesis"},
    { id: 43, text: "Tutoring"},
]
const subjects = [
    { id: 0, text: 'English'},
    { id: 1, text: 'History & Social Studies'},
    { id: 2, text: 'Business/Marketing'},
    { id: 3, text: 'Research'},
    { id: 4, text: 'Psychology'},
    { id: 5, text: 'Literature'},
    { id: 6, text: 'Philosophy'},
    { id: 7, text: 'Sociology'},
    { id: 8, text: 'Economics'},
    { id: 9, text: 'Creative Writing'},
    { id: 10, text: 'Spanish'},
    { id: 11, text: 'French'},
    { id: 12, text: 'Religious Studies'},
    { id: 13, text: 'Education'},
    { id: 14, text: 'Art'},
    { id: 15, text: 'Music'},
    { id: 16, text: 'Computer Science'},
    { id: 17, text: 'Engineering'},
    { id: 18, text: 'Science - Biology'},
    { id: 19, text: 'Science - Chemistry'},
    { id: 20, text: 'Science - Physics'},
    { id: 21, text: 'Mathematics - Statistics'},
    { id: 22, text: 'Mathematics - Algebra I or II'},
    { id: 23, text: 'Mathematics - Geometry'},
    { id: 24, text: 'Mathematics - Trigonometry'},
    { id: 25, text: 'Mathematics - Precalculus'},
    { id: 26, text: 'Mathematics - Calculus'},
    { id: 27, text: 'Mathematics - Accounting'},
    { id: 28, text: 'Medicine/Medical'},
    { id: 29, text: 'Letter Writing'},
    { id: 30, text: 'Career Services (Resumes, Cover Letters)'},
    { id: 31, text: 'Other'},
]

const edulevels = [
    { id: 0, text: 'High School'},
    { id: 1, text: 'College/University'},
    { id: 2, text: 'Graduate'},
]
interface CompPropsType {
    changeStep: (step: number) => void
}
const Index: React.FC<CompPropsType> = ({changeStep}) => {
    const [ copytype, setCopytype ] = useState<ItemType | null>(null);
    const [ subject, setSubject ] = useState<ItemType | null>(null);
    const [ edulevel, setEdulevel ] = useState<ItemType | null>(null);
    const handleCopytype = (data: ItemType | null) => {
        if(data) setCopytype(data);
    };
    const handleSubject = (data: ItemType | null) => {
        if(data) setSubject(data);
    };
    const handleEdulevel = (data: ItemType | null) => {
        if(data) setEdulevel(data);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        changeStep(1);
    }
    return (
        <div className="flex flex-col gap-10">
            <div className="">
                <h3 className="banner-subtitle">
                    Help Topic
                </h3>
                <p className="banner-content">
                    Lörem ipsum ultrartad högen. Esk hemiseren euron.
                </p>
            </div>
            <form className=" ctm-form flex flex-col gap-10 flex-1" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-lg md:text-2xl font-bold flex items-center">Academic Level&nbsp;<InformationCircleIcon width={30} /></p>
                        <InputSelector placeholder="Select your academic level" items={edulevels} onChange={handleEdulevel} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-lg md:text-2xl font-bold flex items-center">Subject&nbsp;<InformationCircleIcon width={30} /></p>
                        <InputSelector placeholder="Select your subject" items={subjects} onChange={handleSubject} />
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-lg md:text-2xl font-bold flex items-center">Type of help&nbsp;<InformationCircleIcon width={30} /></p>
                        <InputSelector placeholder="Select your type of help" items={copytypes} onChange={handleCopytype} />
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <input type="submit" className="ctm-btn btn-lg bg-[#007DFC] text-white text-xl font-bold cursor-pointer" value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Index;