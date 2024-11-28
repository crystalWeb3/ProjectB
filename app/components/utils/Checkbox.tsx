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
            setEnabled((prevEnabled) => !prevEnabled);
            if (changeValue) {
                changeValue(!enabled);
            } 
        }
    };
    let classname = className || '';
    return (
        <div className={`relative w-full ctm-checkbox flex ${classname}`} onClick={toggleState}>
            { enabled && <span className='ctm-check-icon'>
                <svg className='responsive-svg' viewBox="0 0 37 37" fill="none">
                    <rect x="0.914062" y="0.293457" width="36" height="36" rx="18" fill="#0E9E59" fillOpacity="0.1"/>
                        <g clipPath="url(#clip0_280_10030)">
                            <path d="M15.7423 22.1798L11.6231 18.0606L10.25 19.4337L15.7423 24.926L27.5115 13.1568L26.1385 11.7837L15.7423 22.1798Z" fill="#0E9E59"/>
                        </g>
                    <defs>
                        <clipPath id="clip0_280_10030">
                            <rect width="23.5385" height="23.5385" fill="white" transform="translate(6.91406 6.29346)"/>
                        </clipPath>
                    </defs>
                </svg>
            </span> }
            { !enabled && <span className='ctm-check-icon'>
                    <svg className='responsive-svg' viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.304688" y="0.84375" width="36" height="36" rx="18" fill="#9E0E0E" fillOpacity="0.1"/>
                        <path d="M12.2561 24.0548C11.9355 24.3754 11.9355 24.895 12.2561 25.2156C12.5766 25.5362 13.0964 25.5362 13.417 25.2156L12.2561 24.0548ZM18.8895 19.7431C19.2101 19.4225 19.2101 18.9028 18.8895 18.5822C18.5689 18.2616 18.0492 18.2616 17.7286 18.5822L18.8895 19.7431ZM17.7286 18.5822C17.4081 18.9028 17.4081 19.4225 17.7286 19.7431C18.0492 20.0636 18.5689 20.0636 18.8895 19.7431L17.7286 18.5822ZM24.362 14.2705C24.6826 13.95 24.6826 13.4302 24.362 13.1096C24.0415 12.7891 23.5218 12.7891 23.2012 13.1096L24.362 14.2705ZM18.8895 18.5822C18.5689 18.2616 18.0492 18.2616 17.7286 18.5822C17.4081 18.9028 17.4081 19.4225 17.7286 19.7431L18.8895 18.5822ZM23.2012 25.2156C23.5218 25.5362 24.0415 25.5362 24.362 25.2156C24.6826 24.895 24.6826 24.3754 24.362 24.0548L23.2012 25.2156ZM17.7286 19.7431C18.0492 20.0636 18.5689 20.0636 18.8895 19.7431C19.2101 19.4225 19.2101 18.9028 18.8895 18.5822L17.7286 19.7431ZM13.417 13.1096C13.0964 12.7891 12.5766 12.7891 12.2561 13.1096C11.9355 13.4302 11.9355 13.95 12.2561 14.2705L13.417 13.1096ZM13.417 25.2156L18.8895 19.7431L17.7286 18.5822L12.2561 24.0548L13.417 25.2156ZM18.8895 19.7431L24.362 14.2705L23.2012 13.1096L17.7286 18.5822L18.8895 19.7431ZM17.7286 19.7431L23.2012 25.2156L24.362 24.0548L18.8895 18.5822L17.7286 19.7431ZM18.8895 18.5822L13.417 13.1096L12.2561 14.2705L17.7286 19.7431L18.8895 18.5822Z" fill="#FF4242"/>
                    </svg>
                </span>
            }
            &nbsp;&nbsp;
            <span className=''>{text}</span>
        </div>
    );
};

export default Checkbox;
