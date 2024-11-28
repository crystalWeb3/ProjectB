import React from "react";
import Link from "next/link";
import Contactusform from "./NavSignUp";

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

const Data = () => {
    return (
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
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href='/main/contactus' >
                            <button className="ctm-btn btn-primary font-medium text-xl p-3 mt-3 h-[40px] w-full">
                                
                                    Contact us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
