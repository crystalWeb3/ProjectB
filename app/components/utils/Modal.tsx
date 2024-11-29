'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useDashboard } from '../../../context/DashboardContext';

const Index = ({children, classname} : { children?: React.ReactNode, classname?: string}) => {
    const { isModal, toggleModal } = useDashboard();
    const modalRef = useRef<HTMLDivElement>(null)
    const className = classname || '';

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(modalRef.current && !modalRef.current.contains(e.target as Node))  {
                toggleModal(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [modalRef])
    if(isModal === false) return <></>
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-[#00000050]">
            <div 
                className={`inline-block relative left-[50%] top-[35%] translate-x-[-50%] translate-y-[-50%] ${className}`}
                ref={modalRef}
            >
                {children}
            </div>
        </div>
    )
}

export default Index;