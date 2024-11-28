'use client';

import React, { useState } from "react";
import InputSelector from "../../components/utils/InputSelector";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import HelpTopic from './HelpTopic';
import HelpInfo from './HelpInfo';   
import AddFeatures from './AddFeatures';   
import Payment from './Payment';   
import Steper from './Steper';   

const steps = ['Help Topic', 'Help Information', 'Additional Features', 'Payment']
const Index = () => {
    const [ step, setStep ] = useState(0);
    return (
        <div className='flex flex-col gap-6'>
            {/* <h1 className="banner-subtitle">Help Center</h1> */}
            <div className="w-full">
                <Steper step={step} opts={steps} />
            </div>
            <div className="w-full flex flex-row items-start gap-8">
                <div className="w-[63%] rounded-[20px] bg-white px-10 pt-10 pb-5 md:px-16 md:pt-16 md:pb-10">
                  {step === 0 ? <HelpTopic changeStep={setStep} />: null}
                  {step === 1 ? <HelpInfo changeStep={setStep} />: null}
                  {step === 2 ? <AddFeatures changeStep={setStep} />: null}
                  {step === 3 ? <Payment changeStep={setStep} />: null}
                </div>
                <div className={`w-[37%] flex flex-col gap-7 px-[35px] py-[10px] ${step === 3 ? 'py-[35px] bg-white rounded-[20px]': ''}`}>
                    { step !== 3 && <h3 className="banner-subtitle">Summary</h3>}
                    <div className="w-full flex justify-between banner-content !text-black">
                        <span>Subtotal</span>
                        <span>$23.22</span>
                    </div>
                    <div className="w-full flex flex-col gap-4 pb-8">
                        <label htmlFor="coupon" className="text-lg md:text-2xl font-bold">Apply Coupon</label>
                        <div className="w-full relative">
                            <input id="coupon" 
                                type="text" 
                                placeholder="Enter Coupon" 
                                className={`main-input ${step === 3 && 'primary'} input-lg md:h-[67px]`}/>
                            <button className="px-7 h-[51px] rounded-[25px] bg-[#007DFC] text-white text-xl font-bold absolute top-1/2 right-2 translate-y-[-50%]">Apply</button>
                        </div>
                    </div>
                    { step >= 2 && (
                        <>
                            <div className="w-full flex justify-between banner-content !text-black">
                                <span>Grammarly Report</span>
                                <span>$23.22</span>
                            </div>
                            <div className="w-full flex justify-between banner-content !text-black">
                                <span>Plagiarism Report</span>
                                <span>$23.22</span>
                            </div>
                        </>
                    )}
                    <div className="w-full border-b-[1px] border-[#ECECEC]"></div>
                    <div className="w-full flex justify-between">
                        <span className="text-lg md:text-2xl font-bold">Total</span>
                        <span className="banner-content !text-black">$250.00</span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Index;