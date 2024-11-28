'use client';
import { useSpinner } from '@/context/SpinnerContext';
import Image from 'next/image';
const Index = () => {
    const { isLoading } = useSpinner();
    if( isLoading === false) return null;
    return (
        <div className="flex justify-center items-center fixed top-0 left-0 bottom-0 right-0 z-[1200] transition duration-400 bg-[#F2F8FF]">
            <Image src='/spinner.gif' alt='spinner' width={70} height={70} className='' />
        </div>
    )
}

export default Index;