'use client'
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../context/DashboardContext';
import { useSnackbar } from '../../../context/SnackbarContext';
import InputSelector from '../../components/utils/InputSelector';
import { useRouter } from "next/navigation";
import { useAuth } from '../../../context/AuthContext';

interface DataProps {
    // text?: String;
    // value?: boolean;
    className? :String;
    // changeValue?: (newValue: boolean) => void;
}

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
const pages = [
    { id: 0, text: '1 page'},
    { id: 1, text: '2 pages'},
    { id: 2, text: '3 pages'},
    { id: 3, text: '4 pages'},
    { id: 4, text: '5 pages'},
    { id: 5, text: '6 pages'},
    { id: 6, text: '7 pages'},
    { id: 7, text: '8 pages'},
    { id: 8, text: '9 pages'},
    { id: 9, text: '10 pages'},
    { id: 10, text: '11 pages'},
    { id: 11, text: '12 pages'},
    { id: 12, text: '13 pages'},
    { id: 13, text: '14 pages'},
    { id: 14, text: '15+ pages'},
]

const formatings = [
    { id: 0, text: 'Double spaced'},
    { id: 1, text: 'Single spaced'},
]

const edulevels = [
    { id: 0, text: 'High School'},
    { id: 1, text: 'College/University'},
    { id: 2, text: 'Graduate'},
]

const deadlines = [
    { id: 0, text: '7 Days'},
    { id: 1, text: '5 Days'},
    { id: 2, text: '3 Days'},
    { id: 3, text: '48 Hours'},
    { id: 4, text: '24 Hours'},
    { id: 5, text: '12 Hours'},
]

const PriceQuote: React.FC<DataProps> = ({ className }) => {
    const classname = className || '';
    const { addPricequote } = useDashboard();
    const { showSnackbar } = useSnackbar();
    const { token } = useAuth();
    const router = useRouter(); 
    const [ copytype, setCopytype ] = useState<ItemType | null>(null);
    const [ formating, setFormating ] = useState<ItemType | null>(null);
    const [ page, setPage ] = useState<ItemType | null>(null);
    const [ edulevel, setEdulevel ] = useState<ItemType | null>(null);
    const [ deadline, setDeadline ] = useState<ItemType | null>(null);
    const [ price, setPrice ] = useState<number | typeof NaN >(0);
    useEffect(() => {
        priceEstimate();
    }, [copytype, formating, page, edulevel, deadline])
    const priceEstimate = () => {
        if(copytype && formating && edulevel && page && deadline) {
            let edu_attr = 25;
            if(edulevel.id === 1) edu_attr = 27.5;
            if(edulevel.id === 2) edu_attr = 32;
            let price = (edu_attr + deadline.id * edu_attr / 5) * (page.id + 1) * (formating.id + 1);
            if(page.id === 14) price = NaN;
            setPrice(price);
        }
    }
    const handleCopytype = (data: ItemType | null) => {
        if(data) setCopytype(data);
    };
    const handleFormating = (data: ItemType | null) => {
        if(data) setFormating(data);
    };
    const handlePage = (data: ItemType | null) => {
        if(data) setPage(data);
    };
    const handleEdulevel = (data: ItemType | null) => {
        if(data) setEdulevel(data);
    };

    const handleDeadline = (data: ItemType | null) => {
        if(data) setDeadline(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!token) {
            router.push('/auth/login');
            return;
        }
    
        if (copytype && formating && edulevel && page && deadline) {
            try {
                const response = await fetch("/api/dashboard/addquote", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        copytype: copytype.text,
                        formating: formating.text,
                        edulevel: edulevel.text,
                        page: page.id + 1,
                        deadline: deadline.text,
                        price,
                    }),
                });
    
                const data = await response.json();
    
                if (response.ok) {
                    showSnackbar('Add Quotation Success!', 'success');
                    setTimeout(() => router.push('/dashboard/order'), 300); 
                } else {
                    showSnackbar(data.error || "Failed to add quote.", 'error');
                }
            } catch (error) {
                showSnackbar("An error occurred. Please try again.", 'error');
            }
        } else {
            showSnackbar("All fields are required.", "error");
        }
    };
    
    return (
        <div className={`pricequote relative ${classname} p-8 lg:px-10 lg:pt-10 bg-white`}>
            {/* <div className=""> */}
                <div className="flex flex-wrap gap-5">
                    <div className="flex w-full">
                        <h3 className="text-3xl font-semibold pb-2">Price Quotation</h3>
                    </div>
                    <div className="grid grid-cols-1 w-full">
                        <InputSelector items={copytypes} onChange={handleCopytype} placeholder='Copywriting Type' />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                        <div className="w-full">
                            <InputSelector items={pages} onChange={handlePage} placeholder='Number of Pages' />
                            {/* <input type='text' onChange={handleChange} name='page' placeholder="Number of Pages" className="block w-full ctm-input" /> */}
                        </div>
                        <div className="w-full">
                            <InputSelector items={formatings} onChange={handleFormating} placeholder='Formatting' />
                            {/* <input type='text' onChange={handleChange} name='format' placeholder="Formatting" className="block w-full ctm-input" /> */}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
                        <div className="w-full">
                            <InputSelector items={edulevels} onChange={handleEdulevel} placeholder='Education Level' />
                            {/* <input type='text' onChange={handleChange} name='level' placeholder="Education Level" className="block w-full ctm-input" /> */}
                        </div>
                        <div className="w-full">
                            <InputSelector items={deadlines} onChange={handleDeadline} placeholder='Time Limit' />
                            {/* <input type='text' onChange={handleChange} name='deadline' placeholder="Time Limit" className="block w-full ctm-input" /> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full px-1 my-3 justify-between">
                        <span className="text-2xl">Price Estimate</span>
                        <span className="text-2xl font-bold">{isNaN(price)?'To Be Determined':( '$' + price.toFixed(2))}</span>
                    </div>
                    <div className="flex w-full flex-wrap my-3">
                        <input type='submit' value='Proceed Order' className='w-full ctm-btn btn-primary text-xl cursor-pointer' onClick={handleSubmit} />
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default PriceQuote;
