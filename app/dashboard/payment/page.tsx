'use client'
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../context/DashboardContext';
import { useSnackbar } from '../../../context/SnackbarContext';
import PaymentCard from "../../components/utils/PaymentCard";
import Modal from "../../components/utils/Modal";

interface CardItemType {
    src?: string;
    name?: string;
    cardNum?: string;
    cardData?: {
        _id?: string;
    };
    [key: string]: any;
}

interface FormDataType {
    cardnum: string | undefined,
    cardname: string | undefined,
    expiry: string | undefined,
    cvv: string | undefined,
}

const defaultCardItems: CardItemType[] = [
    { cardData: { _id: '0' }, name: 'Hussain Abid', cardNum: 'XXXX-2522'},
    { cardData: { _id: '1' }, name: 'Hussain Abid', cardNum: 'XXXX-2522'},
]

const Index = () => {
    const { toggleModal } = useDashboard();
    const { showSnackbar } = useSnackbar();
    const [ cardItems, setCardItems] = useState<CardItemType[]>(defaultCardItems);
    const [ formData, setFormData ] = useState<FormDataType>({ cardnum: undefined, cardname: undefined, expiry: undefined, cvv: undefined, });
    const handleInput = ( e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setFormData(prev =>( { ...prev, [name]: value}))
    }
    const deleteCard = (id?: string) => {
        setCardItems(prevs => {
            return prevs.filter(itm => itm.cardData?._id !== id);
        })
    }
    const addCard = (e: React.FormEvent) => {
        e.preventDefault();
        const { cardname, cardnum } = formData;
        if( cardname && cardnum ) {
            setCardItems(prevs => {
                return [ 
                    ...prevs, 
                    {name: cardname, cardNum: cardnum, cardData: { _id: String(Date.now())} , }
                ];
            })
            setFormData({ cardnum: undefined, cardname: undefined, expiry: undefined, cvv: undefined})
            toggleModal(false)
        } else {
            showSnackbar("All fielda are required.", "error");
        }
    }
    return (
        <>
            <Modal>
                <div className="w-[810px] flex flex-col gap-7 pt-[40px] p-[35px] bg-white rounded-[16px]">
                    <div className="w-full flex justify-between">
                        <h2 className="text-[30px] font-[700]">Add New Payment</h2>
                        <div 
                            className='w-[51px] h-[51px] inline-flex items-center justify-center bg-[#F1F1F1] rounded-[50%] cursor-pointer'
                            onClick={() => toggleModal(false)}
                        >
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.588062 1.30942C1.01798 0.882538 1.71479 0.882538 2.14448 1.30942L7.33262 6.46091L12.5208 1.30942C12.9507 0.882538 13.6475 0.882538 14.0772 1.30942C14.5071 1.7363 14.5071 2.42818 14.0772 2.85483L8.88904 8.00633L14.0772 13.1578C14.5071 13.5847 14.5071 14.2766 14.0772 14.7032C13.6473 15.1301 12.9505 15.1299 12.5208 14.7032L7.33262 9.55174L2.14448 14.7032C1.71456 15.1299 1.01775 15.1299 0.588062 14.7032C0.158146 14.2764 0.158146 13.5845 0.588062 13.1578L5.77621 8.00633L0.588062 2.85483C0.158146 2.42795 0.158146 1.73607 0.588062 1.30942Z" fill="#1A0C42"/>
                            </svg>
                        </div>
                    </div>
                    <form className="w-full flex flex-col gap-8" onSubmit={addCard}>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="cardnum" className="text-[21px] font-bold">Card Number</label>
                                <input id="cardnum" type="text" placeholder="Type here..." name='cardnum' onChange={handleInput} value={formData.cardnum} className="main-input primary input-sm"/>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="cardname" className="text-[21px] font-bold">Name on Card</label>
                                <input id="cardname" type="text" placeholder="Type here..." name='cardname' onChange={handleInput} value={formData.cardname} className="main-input primary input-sm"/>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="cardnum" className="text-[21px] font-bold">Expiry</label>
                                <input id="cardnum" type="text" placeholder="MM/YY" name='expiry' onChange={handleInput} value={formData.expiry} className="main-input primary input-sm"/>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="cardname" className="text-[21px] font-bold">CVV Code</label>
                                <input id="cardname" type="text" placeholder="Type here..." name='cvv' onChange={handleInput} value={formData.cvv} className="main-input primary input-sm"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <input type="submit" className="h-[51px] rounded-[30px] px-7 bg-[#007DFC] text-white text-xl font-bold cursor-pointer" value='Add Card' />
                        </div>
                    </form>
                </div>
            </Modal>
            <div className='className} flex flex-col gap-6'>
                <div className="flex justify-between items-center">
                    <h1 className="banner-subtitle">Pay Methods</h1>
                    <button 
                        className="w-full max-w-[300px] h-[49px] bg-[#007DFC] text-xl font-bold text-white rounded-[25px] flex items-center pl-8"
                        onClick={() => {toggleModal(true)}}
                    >
                        <span>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.20312 8.47664H8.49422M8.49422 8.47664H14.7853M8.49422 8.47664V2.18555M8.49422 8.47664V14.7677" stroke="white" strokeWidth="2.51644" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <p>
                            &nbsp;&nbsp;&nbsp;Add Payment Method
                        </p>
                    </button>
                </div>
                <div className="p-6 flex flex-wrap gap-6">
                    { cardItems.map( (itm, idx) => 
                        <PaymentCard 
                            name={itm.name} 
                            cardNum={itm.cardNum} 
                            cardData={itm.cardData} 
                            key={idx}
                            onDelete={deleteCard}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default Index;