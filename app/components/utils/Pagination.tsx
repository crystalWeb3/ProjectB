'use client';
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/16/solid';

interface PaginationProps {
    classname?: string,
    align?: string,
    defaultPage?: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Index: React.FC<PaginationProps> = ({ classname, align, totalPages, onPageChange }) => {
    let r_align = 'justify-end';
    if(align === 'center') r_align = 'justify-center';
    if(align === 'left') r_align = 'justify-start';
    const [ curpage, setCurpage ] = useState<number>(1);
    const [ visiblePages, setVisiblePages] = useState<any[]>([])
    const getVisiblePages = () => {
        const pageLimit = 5;
        const pages: (number | string)[] = [];
    
          console.log(totalPages <= pageLimit)
        if (totalPages <= pageLimit) {
            console.log(totalPages)
          for (let i = 1; i <= totalPages; i++){
            pages.push(i);
          }
        } else {
          pages.push(1);
    
          if (curpage > 3) pages.push("...");
    
          const start = Math.max(2, curpage - 1);
          const end = Math.min(totalPages - 1, curpage + 1);
          for (let i = start; i <= end; i++) pages.push(i);
    
          if (curpage < totalPages - 2) pages.push("...");
    
          pages.push(totalPages);
        }
    
        return pages;
    };
    useEffect(() => {
        setVisiblePages(getVisiblePages());
        console.log('here')
    }, [curpage, totalPages])
    
    return (
        <div className={`flex flex-row items-center ${r_align} ${classname}`}>
            <div className="flex flex-row gap-3">
                <button
                    disabled={curpage === 1}
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] border-[#EDEAEA] border-[1px] bg-[#FFFFFF] hover:border-0 hover:bg-[#007DFC] hover:text-white cursor-pointer"
                    onClick={() => {
                        if(curpage > 1) {
                            onPageChange(curpage - 1);
                            setCurpage(curpage - 1)
                        } 
                    }}
                >
                    <ChevronLeftIcon width={23} />
                </button>
                {visiblePages.map((page, index) => (
                    <button
                        key={index}
                        disabled={page === curpage || page === "..."}
                        className={`flex items-center justify-center w-[40px] h-[40px] rounded-[50%] font-bold
                            ${ page === curpage
                                ? "border-0 bg-[#007DFC] text-white"
                                : page === "..."
                                ? "border-[#EDEAEA] border-[1px] bg-[#FFFFFF] cursor-default"
                                : "border-[#EDEAEA] border-[1px] bg-[#FFFFFF] hover:border-0 hover:bg-[#007DFC] hover:text-white cursor-pointer"
                        }`}
                        onClick={() => {
                            if(Number(page) !== curpage && page !== "...") {
                                onPageChange(Number(page));
                                setCurpage(Number(page));
                            }
                        }}
                    >
                        {page}
                    </button>
                ))}
                <button
                    disabled={curpage === totalPages}
                    className="flex items-center justify-center w-[40px] h-[40px] rounded-[50%] border-[#EDEAEA] border-[1px] bg-[#FFFFFF] hover:border-0 hover:bg-[#007DFC] hover:text-white cursor-pointer"
                    onClick={() => {
                        if(curpage < totalPages) {
                            onPageChange(curpage + 1);
                            setCurpage(curpage + 1);
                        } 
                    }}
                >
                    <ChevronRightIcon width={23} />
                </button>
            </div>
        </div>
    )
}

export default Index;
