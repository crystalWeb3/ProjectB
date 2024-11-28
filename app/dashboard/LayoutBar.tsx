import Bars from './Bars';
import TopBar from './TopBar';
import Link from 'next/link';

const Index = ({ children }: { children: React.ReactNode }) =>  {
    return (
       <div className="bg-[#F6F6F6] w-full min-h-[100vh] pb-10">
           <div className="fixed h-[100vh] w-[330px] flex flex-col gap-7 items-center pt-6">
                <Link href='/'>
                    <h2 className="text-[33px] font-bold items-center inline-flex">
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
                    </h2>
                </Link>
                <div className="w-full px-6">
                    <Link href='/dashboard/placeorder' >
                        <button className="w-full h-[49px] bg-[#007DFC] text-xl font-bold text-white rounded-[25px] flex items-center pl-8">
                            <span>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.20312 8.47664H8.49422M8.49422 8.47664H14.7853M8.49422 8.47664V2.18555M8.49422 8.47664V14.7677" stroke="white" strokeWidth="2.51644" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <p>
                                &nbsp;&nbsp;&nbsp;Place Order
                            </p>
                        </button>
                    </Link>
                </div>
                <Bars />
           </div>
           <div className="ml-[330px] pl-5 pr-14 pt-6 flex flex-col gap-6">
                <TopBar />
                {children}
           </div>
       </div>
    )
}

export default Index; 