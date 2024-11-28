'use client';
import HelperBtnbar from "../HelperBtnbar";
import IconCard from "../../../components/utils/IconCard";

interface DataType {
    icon: React.ReactNode,
    title?: string,
    subscribe?: string,
}

const icon_cards: DataType[] = [
    { 
        icon: (
            <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.76478 0.73545L5.45286 0.22662C7.04236 -0.252498 8.74064 0.521802 9.42133 2.03598L10.4722 4.3735C11.0524 5.66413 10.7466 7.18092 9.71171 8.14597L7.87612 9.85769C7.85343 9.87884 7.83481 9.90397 7.82117 9.93185C7.62918 10.3243 7.92012 11.3728 8.83488 12.9572C9.86591 14.743 10.6628 15.4496 11.0309 15.3399L13.4405 14.6032C14.7934 14.1896 16.2594 14.6829 17.0872 15.8301L18.5796 17.8984C19.5484 19.2412 19.3742 21.0936 18.172 22.2322L16.8884 23.4477C15.9818 24.3063 14.7123 24.6667 13.4898 24.4126C9.91293 23.6689 6.70822 20.7885 3.84882 15.8359C0.986611 10.8784 0.0954851 6.65933 1.24508 3.18795C1.63553 2.00893 2.57564 1.09389 3.76478 0.73545ZM4.20504 2.19602C3.49155 2.41108 2.92748 2.9601 2.69321 3.66752C1.70267 6.65861 2.50503 10.4574 5.16993 15.0731C7.83228 19.6845 10.718 22.2782 13.8003 22.919C14.5338 23.0715 15.2955 22.8553 15.8395 22.3401L17.123 21.1246C17.7704 20.5115 17.8642 19.514 17.3425 18.791L15.8501 16.7227C15.4044 16.1049 14.615 15.8394 13.8865 16.0621L11.4718 16.8003C10.1353 17.1987 8.87916 16.0848 7.51377 13.7199C6.35789 11.7179 5.95663 10.2718 6.45089 9.26148C6.5464 9.06624 6.67687 8.89015 6.83579 8.74198L8.67134 7.03031C9.22859 6.51066 9.39323 5.69393 9.08081 4.99898L8.02998 2.66146C7.66346 1.84613 6.749 1.4292 5.89311 1.68719L4.20504 2.19602Z" fill="#007DFC"/>
            </svg>
        ), 
        title: 'Phone Number', 
        subscribe: '04 26 85 66 79',
    },
    { 
        icon: (
            <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9201 9.62031L25.7148 3.71702V15.4562L18.9201 9.62031ZM10.1646 10.62L12.5506 12.6912C12.9251 13.0094 13.4134 13.2016 13.9469 13.2016H13.9657H13.9646H13.9801C14.5147 13.2016 15.003 13.0083 15.3819 12.6879L15.3786 12.6901L17.7646 10.6189L25.0178 16.8481H2.91473L10.1646 10.62ZM2.90478 2.31743H25.031L14.4031 11.5479C14.2883 11.6385 14.1424 11.6937 13.9834 11.6937C13.9779 11.6937 13.9734 11.6937 13.9679 11.6937H13.969C13.9646 11.6937 13.9591 11.6937 13.9536 11.6937C13.7945 11.6937 13.6476 11.6385 13.5327 11.5468L13.5338 11.5479L2.90478 2.31743ZM2.21879 3.71592L9.01243 9.6192L2.21879 15.4518V3.71592ZM26.0794 1.01946C25.8142 0.886896 25.5027 0.80957 25.1724 0.80957H2.76449C2.4331 0.810675 2.11937 0.888001 1.84211 1.02719L1.85426 1.02166C1.17158 1.363 0.710938 2.05673 0.710938 2.85871V2.86313V16.3046C0.712042 17.438 1.63112 18.3559 2.76339 18.357H25.1691C26.3025 18.3559 27.2205 17.4369 27.2216 16.3046V2.86313C27.2216 2.86202 27.2216 2.86092 27.2216 2.85871C27.2216 2.05562 26.7587 1.35969 26.0849 1.02498L26.0727 1.01946H26.0794Z" fill="#007DFC"/>
            </svg>
        ), 
        title: 'Email' ,
        subscribe: 'info@MissilBets.com',
    },
    { 
        icon: (
            <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.2969 14.1299C9.74344 14.1299 8.48438 12.8708 8.48438 11.3174C8.48438 9.76394 9.74344 8.50488 11.2969 8.50488C12.8503 8.50488 14.1094 9.76394 14.1094 11.3174C14.1094 12.8708 12.8503 14.1299 11.2969 14.1299ZM11.2969 6.62988C8.70844 6.62988 6.60938 8.72801 6.60938 11.3174C6.60938 13.9068 8.70844 16.0049 11.2969 16.0049C13.8853 16.0049 15.9844 13.9068 15.9844 11.3174C15.9844 8.72801 13.8853 6.62988 11.2969 6.62988ZM11.2969 27.2549C9.73781 27.2633 1.92188 15.2371 1.92188 11.3174C1.92188 6.14051 6.11906 1.94238 11.2969 1.94238C16.4747 1.94238 20.6719 6.14051 20.6719 11.3174C20.6719 15.1846 12.8316 27.2633 11.2969 27.2549ZM11.2969 0.0673828C5.08406 0.0673828 0.046875 5.10457 0.046875 11.3174C0.046875 16.0218 9.42656 30.0777 11.2969 30.0674C13.1381 30.0777 22.5469 15.958 22.5469 11.3174C22.5469 5.10457 17.5097 0.0673828 11.2969 0.0673828Z" fill="#007DFC"/>
            </svg>         

        ), 
        title: 'Address' ,
        subscribe: '25252 252111',
    },
]
 
const Index = () => {
    return (
        <div className='flex flex-col gap-6'>
            <h1 className="banner-subtitle">Help Center</h1>
            <div className="w-full">
                <HelperBtnbar />
            </div>
            <div className="w-full flex flex-row items-start gap-8">
                <div className="w-[33%] flex flex-col gap-5 bg-white px-[35px] py-[50px] rounded-[20px]">
                    <div>
                        <h3 className="banner-subtitle">Contact Details</h3>
                        <p className="banner-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                    </div>
                    { icon_cards.map((card, idx) => (<IconCard title={card.title} subscribe={card.subscribe} icon={card.icon} key={idx} />))}
                </div>
                <div className="w-[67%] rounded-[20px] bg-white flex flex-col gap-10 px-10 pt-10 pb-5 md:px-16 md:pt-16 md:pb-10">
                    <div className="">
                        <h3 className="banner-subtitle">
                            We are 24/7 Here for your help
                        </h3>
                        <p className="banner-content">
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                        </p>
                    </div>
                    <form className=" ctm-form flex flex-col gap-10 flex-1 " onSubmit={e => e.preventDefault()}>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="name" className="text-lg md:text-2xl font-bold">Name</label>
                                <input id="name" type="text" placeholder="Name" className="main-input primary input-lg"/>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="e-mail" className="text-lg md:text-2xl font-bold">E-mail</label>
                                <input id="e-mail" type="text" placeholder="E-mail" className="main-input primary input-lg"/>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="name" className="text-lg md:text-2xl font-bold">Name</label>
                                <input id="name" type="text" placeholder="Name" className="main-input primary input-lg"/>
                            </div>
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="phonenum" className="text-lg md:text-2xl font-bold">Phone Number</label>
                                <input id="phonenum" type="text" placeholder="Phone Number" className="main-input primary input-lg"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex flex-col gap-3">
                                <label htmlFor="message" className="text-lg md:text-2xl font-bold">Message</label>
                                <textarea id="message"  placeholder="Message" rows={10} className="main-input-textarea primary h-[200px]"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-end">
                            <input type="submit" className="ctm-btn btn-lg bg-[#007DFC] text-white text-xl font-bold cursor-pointer" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index;