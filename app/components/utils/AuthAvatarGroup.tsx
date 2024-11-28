'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import CurrencySelector from './CurrencySelector';
import {  ChevronUpIcon, ChevronDownIcon  } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { UserIcon, Cog6ToothIcon, PowerIcon, UserCircleIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSnackbar } from "../../../context/SnackbarContext";

interface SettingTypes {
    icon: React.ReactNode;
    text?: string;
    onClick?: ( ...arg: any[]) => any;
}
  
interface DataProps {
    items?: any[],
    classname?: string,
    onClick?: ( ...args: any ) => any;
}

const Index: React.FC<DataProps> = ({ onClick, classname, items }) => {
    const { token, user, logout } = useAuth();
    const { showSnackbar } = useSnackbar();  
    let [ isOpen, setIsOpen ] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const className = classname || '';

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node))  {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [])
    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <div className="flex flex-row py-1 items-center gap-2 cursor-pointer" 
                // onClick={logout} 
                // title='Logout'
                onClick={() => {setIsOpen(!isOpen); console.log('ere')}}
            >
                {user && user?.avatar
                    ? (
                        <div className='w-[40px] h-[40px] mr-1'>
                            <Image src={user.avatar} alt='topavatar' width={58} height={58} layout='responsive' className="inline-block rounded-[50%]" />
                        </div>
                    )
                    : (
                        <div className='w-[40px] h-[40px] mr-1'>
                            <Image src='/images/humans/dummy.webp' alt='dummy' width={58} height={58} layout='responsive' className="inline-block rounded-[50%]" />
                        </div>
                )}
                <h3 className='text-xl'>{user ? user?.f_name ? user.f_name : user.email.split('@')[0]: ''}</h3>
                <span>
                        { isOpen === true ? <ChevronUpIcon width={23} />: <ChevronDownIcon width={23} />}
                </span>
            </div>
            { isOpen && <div className="absolute w-auto min-w-[200px] rounded-[10px] shadow-xl bg-[#F2F8FF] top-[100%] right-0 bg-white py-2 z-40">
                <Link href='/dashboard/order'>
                    <div className={`w-full inline-flex flex-row items-center pl-[27%]  py-1 gap-2 cursor-pointer px-[5%] transition ease-in duration-100 hover:bg-[#007DFC50]`}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <UserIcon width={30} />
                        <span className='inline-block text-xl'>&nbsp;Profile</span>
                    </div>
                </Link>
                
                <Link href='/dashboard/order'>
                    <div className={`w-full inline-flex flex-row items-center pl-[27%]  py-1 gap-2 cursor-pointer px-[5%] transition ease-in duration-100 hover:bg-[#007DFC50]`}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <Cog6ToothIcon width={30} />
                        <span className='inline-block text-xl'>&nbsp;Dashboard</span>
                    </div>
                </Link>
                <div className={`w-full inline-flex flex-row items-center pl-[27%]  py-1 gap-2 cursor-pointer px-[5%] transition ease-in duration-100 hover:bg-[#007DFC50]`}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        logout();
                        showSnackbar('Logged out', 'info');
                    }}
                >
                    <PowerIcon width={30} />
                    <span className='inline-block text-xl'>&nbsp;Logout</span>
                </div>
            </div>}
        </div>
    );
};

export default Index;
