'use client';
import React, { useState } from "react";
import Table from "../../../components/utils/Table";
import Pagination from '../../../components/utils/Pagination';
import HelperBtnbar from "../HelperBtnbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const datas : any[] = [
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'In progress', state: 'error'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
    { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
]

const columns : any[] = [
    { id: 'orderid', title: 'Order ID'},
    { id: 'topic', title: 'Topic'},
    { id: 'subject', title: 'Subject'},
    { id: 'deadline', title: 'Deadline'},
    { id: 'status', title: 'Status', badge: true},
    { id: 'price', title: 'Price'},
]

const Index = () => {
    const router = useRouter();
    const showDetail = (data: any) => {
        console.log(data);
        router.push('/dashboard/helper/tickets/detail')
    }
    return (
        <div className='className} flex flex-col gap-6'>
            <h1 className="banner-subtitle">Help Center</h1>
            <div className="w-full">
                <HelperBtnbar />
            </div>
            <div className="rounded-[23px] p-6 flex flex-col gap-5 bg-[#FFFFFF] ">
                <div className="flex flex-row justify-between">
                    <div className='relative'>
                        <h1 className="banner-subtitle">Tickets</h1>
                    </div>
                    <div className="flex gap-3">
                        <Link href='/dashboard/helper/tickets/create'>
                            <button className="w-full min-w-[270px] h-[49px] bg-[#007DFC] text-xl font-bold text-white rounded-[25px] flex items-center pl-8">
                                <span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20312 8.47664H8.49422M8.49422 8.47664H14.7853M8.49422 8.47664V2.18555M8.49422 8.47664V14.7677" stroke="white" strokeWidth="2.51644" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                                <p>
                                    &nbsp;&nbsp;&nbsp;Create New Ticket
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <Table columns={columns} datas={datas} defaultAction={showDetail} />
            </div>
            <Pagination totalPages={30} onPageChange={() => {}} />
        </div>
    )
}

export default Index;