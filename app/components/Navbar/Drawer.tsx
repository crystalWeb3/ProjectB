import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


interface DrawerProps {
    children?: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/main/home', current: false },
    { name: 'How To Order', href: '/main/home#howitworks', current: false },
    { name: 'Services', href: '/main/service', current: false },
    { name: 'Our Pledge To You', href: '/main/pledge', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
                className={
                    "w-[340px] max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >

                <article className="relative w-[340px] max-w-lg pb-10 flex flex-col space-y-6 h-full">
                    <header className="px-4 py-4 flex justify-between items-center bg-mid-blue">

                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className='text-3xl font-semibold text-black'>
                                MissilBets
                            </Link>
                        </div>

                        <XMarkIcon className="block h-6 w-6" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    <div>
                        <div className="rounded-md max-w-sm w-full mx-auto">
                            <div className="flex-1 space-y-4 py-1">
                                <div className="sm:block">
                                    <div className="space-y-1 px-5 pt-2 pb-3">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                                    'block  py-2 rounded-md text-base font-medium text-xl'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                // onClick={() => { setIsOpen(false) }}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        <Link href='/main/contactus'>
                                            <button className="ctm-btn btn-primary font-medium text-xl p-3 mt-3 h-[40px] w-full">
                                                
                                                    Contact us
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer z-10"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
