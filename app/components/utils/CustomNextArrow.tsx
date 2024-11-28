import { useState } from 'react';

interface CustomNextArrowProps {
    // text?: String;
    // value?: boolean;
    ctmClassName? :String;
    className? :String;
    onClick?: () => void;
    isBig?: boolean;
}
const CustomNextArrow: React.FC<CustomNextArrowProps> = ({ctmClassName, className, onClick, isBig }) => {
    let width = 'w-[59px]';
    let height = 'h-[59px]'; 
    if(!isBig) {
        width = 'w-[45px]';
        height = 'h-[45px]'; 
    }
    return (
        <span className={`inline-flex justify-center items-center cursor-pointer rounded-[50%] w-[45px] h-[45px] md:w-[59px] md:h-[59px] ${className} ${ctmClassName}`} onClick={onClick}>
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1369 9.39523L13.345 0.236481L12.0536 1.47613L18.7177 8.42744L0.614475 8.05744L0.577787 9.8525L18.681 10.2225L11.7385 16.8957L12.9781 18.1871L22.1369 9.39523Z" fill="white"/>
            </svg>
        </span>
    );
};
export default CustomNextArrow;