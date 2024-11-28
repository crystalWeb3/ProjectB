'use client'
import { useState } from 'react';
interface CheckboxProps {
    text?: string;
    value?: boolean;
    className? :string;
    changeValue?: (newValue: boolean) => void;
    disable?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ text, value, className, changeValue, disable }) => {
    const [enabled, setEnabled] = useState(Boolean(value));
    
    const toggleState = () => {
        if(!disable) {
            if (changeValue) {
                changeValue(!enabled);
            } 
            setEnabled((prevEnabled) => !prevEnabled);
        }
    };
    let classname = className || '';
    return (
        <div className={`relative w-full flex items-center ${classname}`} >
            <div 
                className={`cursor-pointer h-[26px] w-[26px] rounded-[2px] border-[1px] flex justify-center items-center ${enabled ? 'border-[#08CF7F] bg-[#08CF7F]': 'border-[#EDEDED]'}`}
                onClick={toggleState}
            >
                <svg width="20" height="13" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.215 1.07642C13.9468 0.808185 13.5119 0.808185 13.2437 1.07642L5.01511 9.30508L1.85218 6.14215C1.58397 5.87391 1.14913 5.87394 0.880865 6.14215C0.612628 6.41036 0.612628 6.8452 0.880865 7.11344L4.52945 10.762C4.79758 11.0302 5.23275 11.03 5.50077 10.762L14.215 2.04774C14.4832 1.77953 14.4832 1.34466 14.215 1.07642Z" fill="white"/>
                </svg>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div 
                className='banner-content !font-bold !text-black' 
                onClick={toggleState}
                >{text}</div>
        </div>
    );
};

export default Checkbox;
