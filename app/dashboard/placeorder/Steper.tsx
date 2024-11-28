import React from 'react';

interface CompType {
    step: number
    opts: string[]
}

const Index: React.FC<CompType> = ({step = 0, opts}) => {
    return (
        <div className="flex justify-center items-start">
            { opts.map((opt, idx) => {
                
                return (
                    <div className="relative flex flex-col items-center px-[10px]" key={idx}>
                        { idx !== 0  && <div className={`${idx <= step? 'border-[#007DFC]': 'border-[#D0D8E0]'} absolute top-[20px] left-0 right-1/2 border-b-[1px] z-10`}></div>}
                        { idx !== opts.length - 1 && <div className={`${idx < step? 'border-[#007DFC]': 'border-[#D0D8E0]'} absolute top-[20px] left-1/2 right-0 border-b-[1px] border-[#007DFC] z-10`}></div>}
                        <div className={`${idx <= step? 'border-[#007DFC]': 'border-[#D0D8E0]'} flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-[#F6F6F6] border-[1px] z-30`}>
                            <div className={`${idx <= step? 'bg-[#007DFC]': 'bg-[#D0D8E0]'} flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-[#007DFC] !text-white !font-bold banner-content`}>
                                {idx + 1}
                            </div>
                        </div>
                        <p className={`${idx <= step? '!text-[#007DFC]': '!text-[#D0D8E0]'} !font-bold banner-content`}>
                            {opt}
                        </p>
                    </div>
                )
            })}
        </div>
    )
} 

export default Index;