import { useState } from 'react';

interface CustomPrevArrowProps {
    // text?: String;
    // value?: boolean;
    className? :String;
    ctmClassName? :String;
    onClick?: () => void;
    isBig?: boolean;
}
const CustomPrevArrow: React.FC<CustomPrevArrowProps> = ({ctmClassName, className, onClick, isBig }) => {
    let width = 'w-[59px]';
    let height = 'h-[59px]'; 
    if(!isBig) {
        width = 'w-[45px]';
        height = 'h-[45px]'; 
    }
    return (
        <span className={`inline-flex justify-center items-center cursor-pointer rounded-[50%] w-[45px] h-[45px] md:w-[59px] md:h-[59px] ${className} ${ctmClassName} `} onClick={onClick}>
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.644378 9.06326L9.43625 18.222L10.7276 16.9824L4.06358 10.0311L22.1668 10.4011L22.2035 8.60599L4.10027 8.23599L11.0428 1.56278L9.80313 0.271396L0.644378 9.06326Z" fill="white"/>
            </svg>
        </span>
    );
};
export default CustomPrevArrow;