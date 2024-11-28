import Image from "next/legacy/image";
import Link from "next/link";
import Ellipse from "../utils/Ellipse";

// MIDDLE LINKS DATA
interface LinkType {
    name: string,
    href: string,
}
interface DataType {
    id: number;
    section: string;
    link: LinkType[];
}

const products: DataType[] = [
    {
        id: 1,
        section: "QUICK LINKS",
        link: [
            {name: 'About Us', href: '/main/contactus'},
            {name: 'Features', href: '/'},
            {name: 'How It Works', href: '/main/home#howitworks'},
            {name: 'FAQ', href: '/main/home#faq'},
        ],
    },
    {
        id: 2,
        section: "COMPANY",
        link: [
            {name: 'Services', href: '/main/service'},
            {name: 'Our Pledge To You', href: '/main/pledge'},
            {name: 'Login', href: '/auth/login'},
            {name: 'Blog', href: '/'},
            {name: 'News', href: '/'},
        ],
    },
    {
        id: 3,
        section: "LEGAL",
        link: [
            {name: 'Terms And Conditions', href: '/main/terms'},
            {name: 'Privacy Policy', href: '/'},
        ],
    },
]

const footer = () => {
    return (
        <div className="relative ctm-container mx-auto overflow-hidden px-4 sm:px-6 md:px-8 py-8 md:pb-16">
            <div className='mx-auto pt-10 mt-10 relative flex flex-col md:flex-row'>
                <div className="text-left w-full md:w-1/3 pt-8 pl-8 pb-10 pr-6 ">
                    <h1 className="text-4xl font-bold text-darkpurple lg:leading-tight items-center inline-flex">
                        <span className="">
                            <svg width="43px" height="43px" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2419_3556)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M27.313 12.754C25.5926 11.6045 23.57 10.991 21.501 10.991V0.529541C25.6391 0.529541 29.6843 1.75665 33.1251 4.05568C36.5658 6.3547 39.2475 9.62241 40.8312 13.4455C42.4147 17.2687 42.8291 21.4756 42.0218 25.5342C41.2145 29.5928 39.2218 33.321 36.2956 36.247C33.3696 39.1732 29.6414 41.1659 25.5828 41.9732C21.5242 42.7805 17.3172 42.3661 13.4941 40.7826C9.671 39.1989 6.40329 36.5173 4.10426 33.0765C1.80523 29.6357 0.578125 25.5905 0.578125 21.4524H11.0396C11.0396 23.5215 11.6531 25.5441 12.8026 27.2644C13.9521 28.9848 15.586 30.3257 17.4976 31.1175C19.4091 31.9093 21.5126 32.1165 23.5419 31.7127C25.5712 31.3091 27.4352 30.3128 28.8984 28.8498C30.3614 27.3866 31.3577 25.5226 31.7613 23.4933C32.165 21.464 31.9579 19.3605 31.1661 17.449C30.3743 15.5374 29.0334 13.9035 27.313 12.754Z" fill="#007DFC"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0395 0.529546C11.0395 1.90336 10.769 3.26372 10.2432 4.53295C9.71748 5.8022 8.9469 6.95546 7.97547 7.92689C7.00404 8.89833 5.85078 9.66891 4.58154 10.1946C3.3123 10.7204 1.95194 10.991 0.578125 10.991L0.578125 21.4524C3.32575 21.4524 6.04647 20.9112 8.58496 19.8597C11.1234 18.8083 13.43 17.2671 15.3728 15.3242C17.3157 13.3814 18.8568 11.0749 19.9083 8.53638C20.9598 5.99789 21.501 3.27717 21.501 0.529541L11.0395 0.529546Z" fill="#007DFC"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_2419_3556">
                                        <rect width="41.8457" height="41.8457" fill="white" transform="translate(0.578125 0.53125)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        &nbsp;MissilBets
                    </h1>
                    <p className="text-xl text-darkpurple opacity-70 pt-6">
                       <span className="font-bold">Disclaimer:</span> Lörem ipsum krons astroll parar. Vabamass hemirulig dåhusäbelt, desaktiv säkanera. Mikrotisam enode kasäpreska binera ren. Tedevis neotologi då tivis och trent polyda. Eurobävning vär. 
                    </p>
                </div>
                <div className='w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3'>
                    {products.map((item, idx) => {
                        let mr = '';
                        if(item.id === 1) mr = 'md:mr-10';
                        if(item.id === 2) mr = 'md:mr-24';
                        return (
                            <div key={idx} className={`pt-8 pl-8 pb-10 pr-6 group ${mr}`}>
                                <h4 className='text-2xl font-semibold  text-black mb-10'>{item.section}</h4>
                                {item.link.map((lnk, index) => {
                                    return (
                                        <Link
                                            key={lnk.name}
                                            href={lnk.href}
                                            className='block text-xl text-darkpurple mb-6 whitespace-nowrap'
                                            // aria-current={lnk.href ? 'page' : undefined}
                                        >
                                            {lnk.name}
                                        </Link>
                                    )
                                })}
                                
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full border-b-[1px] border-t-[#000000] opacity-10" />
            <div className="mx-auto flex justify-between flex-col md:flex-row flex-col-reverse gap-y-8 mt-10 mb-16 md:mt-16 ml-10 md:ml-auto">
                <span className="text-2xl text-darkpurple">© MissilBets</span>
                <div className="flex gap-4">
                    <span className="rounded-[50%] flex items-center justify-center bg-[#007DFC10] w-[38px] h-[38px]">
                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.28378 9.64275L9.75604 6.673H6.80324V4.74583C6.80324 3.93336 7.21572 3.14141 8.53819 3.14141H9.88058V0.612986C9.88058 0.612986 8.6624 0.412354 7.49769 0.412354C5.06597 0.412354 3.47649 1.83473 3.47649 4.40963V6.673H0.773438V9.64275H3.47649V16.8219H6.80324V9.64275H9.28378Z" fill="#007DFC"/>
                        </svg>
                    </span>
                    <span className="rounded-[50%] flex items-center justify-center bg-[#007DFC10] w-[38px] h-[38px]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8064 5.39658C17.7417 3.99561 17.4296 2.75463 16.4285 1.7322C15.4313 0.709763 14.2209 0.389764 12.8544 0.31952C11.4461 0.237569 7.22494 0.237569 5.81661 0.31952C4.45396 0.385861 3.24356 0.70586 2.24251 1.7283C1.24146 2.75073 0.93315 3.9917 0.864636 5.39268C0.784705 6.83657 0.784705 11.1644 0.864636 12.6083C0.929343 14.0092 1.24146 15.2502 2.24251 16.2726C3.24356 17.2951 4.45016 17.6151 5.81661 17.6853C7.22494 17.7673 11.4461 17.7673 12.8544 17.6853C14.2209 17.619 15.4313 17.299 16.4285 16.2726C17.4258 15.2502 17.7379 14.0092 17.8064 12.6083C17.8863 11.1644 17.8863 6.84048 17.8064 5.39658ZM13.8892 5.37905C14.4526 5.37905 14.9093 4.91467 14.9093 4.3332C14.9093 3.75564 14.4526 3.28735 13.8892 3.28735C13.3259 3.28735 12.8691 3.75564 12.8691 4.3332C12.8691 4.91076 13.3221 5.37905 13.8892 5.37905ZM9.33826 4.51782C6.91747 4.51782 4.96484 6.51977 4.96484 9.00171C4.96484 11.4837 6.91747 13.4856 9.33826 13.4856C11.7591 13.4856 13.7117 11.4837 13.7117 9.00171C13.7117 6.51977 11.7591 4.51782 9.33826 4.51782ZM6.49414 9.00325C6.49414 7.39545 7.76925 6.08813 9.33743 6.08813C10.9056 6.08813 12.1807 7.39545 12.1807 9.00325C12.1807 10.611 10.9018 11.9184 9.33743 11.9184C7.77305 11.9184 6.49414 10.611 6.49414 9.00325ZM14.3645 15.8193C15.1143 15.511 15.6891 14.9218 15.986 14.1569C16.3679 13.1728 16.3467 11.0202 16.3329 9.62487C16.3306 9.39341 16.3285 9.18278 16.3285 9.00178C16.3285 8.82074 16.3306 8.61015 16.3329 8.37876C16.3467 6.98413 16.3679 4.83406 15.986 3.84667C15.6853 3.07789 15.1105 2.48862 14.3645 2.18424C13.4016 1.79474 11.2919 1.81549 9.93131 1.82887C9.71059 1.83104 9.50958 1.83302 9.33637 1.83302C9.1598 1.83302 8.95439 1.83088 8.72871 1.82854C7.36844 1.81441 5.27134 1.79262 4.30827 2.18424C3.55844 2.49253 2.98369 3.08179 2.6868 3.84667C2.3069 4.83384 2.32714 6.99684 2.34019 8.39181C2.3423 8.61811 2.34423 8.8242 2.34423 9.00178C2.34423 9.18281 2.34215 9.39341 2.33987 9.62479C2.32608 11.0194 2.30484 13.1695 2.6868 14.1569C2.98749 14.9257 3.56224 15.5149 4.30827 15.8193C5.27112 16.2088 7.38083 16.1881 8.74143 16.1747C8.96216 16.1725 9.16317 16.1705 9.33637 16.1705C9.51295 16.1705 9.71836 16.1727 9.94404 16.175C11.3043 16.1891 13.4014 16.2109 14.3645 15.8193Z" fill="#007DFC"/>
                    </svg>
                    </span>
                    <span className="rounded-[50%] flex items-center justify-center bg-[#007DFC10] w-[38px] h-[38px]">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.96191 13.7268C12.1482 13.7268 15.5323 8.82028 15.5323 4.57279C15.5323 4.43549 15.5323 4.29623 15.5261 4.15893C16.185 3.70239 16.7536 3.13717 17.2054 2.48975C16.5899 2.7495 15.9377 2.92068 15.27 2.99776C15.9734 2.59531 16.5002 1.9621 16.7525 1.2158C16.0917 1.59056 15.3683 1.85363 14.6143 1.99351C14.1073 1.47669 13.4364 1.13432 12.7056 1.01942C11.9748 0.904518 11.2248 1.0235 10.5717 1.35794C9.91869 1.69238 9.39909 2.22361 9.0934 2.86935C8.78772 3.51508 8.71302 4.23928 8.88086 4.92978C7.54355 4.86559 6.23527 4.53304 5.04088 3.95371C3.84648 3.37438 2.79264 2.56119 1.94771 1.5669C1.51877 2.27604 1.38786 3.11486 1.58158 3.91303C1.77529 4.7112 2.2791 5.40889 2.9907 5.8644C2.45746 5.84706 1.93594 5.70999 1.46821 5.46427V5.5084C1.46913 6.25127 1.73799 6.97106 2.22933 7.54609C2.72067 8.12113 3.40436 8.51613 4.16484 8.66435C3.87618 8.74046 3.57801 8.77841 3.2786 8.77713C3.06753 8.77774 2.85687 8.75902 2.64952 8.72123C2.86446 9.36071 3.28298 9.91983 3.84646 10.3203C4.40993 10.7207 5.09015 10.9424 5.79183 10.9543C4.59982 11.8505 3.12738 12.3365 1.61165 12.3342C1.34457 12.3353 1.07768 12.3205 0.8125 12.2901C2.35088 13.2289 4.13748 13.7273 5.96191 13.7268Z" fill="#007DFC"/>
                    </svg>
                    </span>
                    <span className="rounded-[50%] flex items-center justify-center bg-[#007DFC10] w-[38px] h-[38px]">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.0546875" y="4.71118" width="3.22792" height="10.0171" fill="#007DFC"/>
                        <path d="M12.072 4.82866C12.0378 4.81773 12.0053 4.80589 11.9692 4.79587C11.9259 4.78585 11.8826 4.77766 11.8384 4.77037C11.667 4.73577 11.4793 4.71118 11.2592 4.71118C9.37731 4.71118 8.18376 6.09263 7.79042 6.62627V4.71118H4.5625V14.7283H7.79042V9.26442C7.79042 9.26442 10.2298 5.83492 11.2592 8.35377C11.2592 10.6022 11.2592 14.7283 11.2592 14.7283H14.4862V7.96857C14.4862 6.45507 13.4587 5.19382 12.072 4.82866Z" fill="#007DFC"/>
                        <ellipse cx="1.63346" cy="1.75208" rx="1.57877" ry="1.59363" fill="#007DFC"/>
                    </svg>
                    </span>
                </div>
            </div>
            <Ellipse width="780px" height="380px" left="50%" top="80%" opacity="0.2" className="transform translate-x-[-50%]" zindex="-10"/>
        </div>
    )
}

export default footer;