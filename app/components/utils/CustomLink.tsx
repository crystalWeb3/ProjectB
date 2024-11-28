'use client';
import React from 'react';
import { useRouter } from 'next/navigation'
// import { useSpinner } from '../../../context/SpinnerContext';

const Index = ({children, classname, href} : { children?: React.ReactNode, classname?: string, href: string}) => {
    const className = classname || '';
    // const { toggleLoading } = useSpinner();
    const router = useRouter();
    const handleNavigation = async (e: React.MouseEvent) => {
        e.preventDefault();
        // toggleLoading(true);
        try {
            await router.push(href);
        } catch(err) {
            console.log('customlink', err)
        }
         finally {
            // toggleLoading(false);
        }
    }
    return (
        <a 
            className={`inline-block cursor-pointer ${className}`} 
            onClick={handleNavigation}
        >
            {children}
        </a>
    )
}

export default Index;