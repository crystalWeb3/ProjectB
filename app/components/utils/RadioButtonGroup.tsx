'use client';
import React, { useState, useEffect } from 'react';

interface OptType {
    id: number;
    label: string;
}
interface DataProps {
    opts: OptType[],
    value?: number,
    className? : string;
    onChange: (newValue: number) => void;
}

const Index: React.FC<DataProps> = ({ opts, className, onChange, value = 0 }) => {
    let [ index, setIndex] = useState<number>(value);
    const classname = className || '';
    return (
        <div className="flex items-center gap-12">
            { opts.map( (opt, idx) => {
                return (
                    <div 
                        className={`flex items-center gap-3 ${classname}`} 
                        key={idx} 
                        // disabled={opt.id === index}
                        onClick={() => {
                            if( idx !== index) {
                                setIndex(idx);
                                onChange(idx);
                            }
                        }}
                    >
                        <div className={`w-[23px] h-[23px] rounded-[50%] cursor-pointer ${ idx === index? 'border-[#007DFC] border-[3px]' :'border-[#E9E9E9] border-[1px]'}`}></div>
                        <span className='text-[22px] text-[#4F4F4F]'>{opt.label}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default Index;
