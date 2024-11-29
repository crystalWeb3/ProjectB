'use client'
import React, { useState, useEffect } from 'react';
import { useDashboard } from '../../../context/DashboardContext';
import { useAuth } from '../../../context/AuthContext';
import Table from "../../components/utils/Table";
import Pagination from '../../components/utils/Pagination';

// const data : any[] = [
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'In progress', state: 'error'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
//     { orderid: '#360242163', topic: 'America History', subject: 'History', deadline: '25 Dec 2021 07:15 (14 days)', status: { content: 'Completed', state: 'success'}, price: '$23.00' },
// ]

const columns : any[] = [
    { id: 'orderid', title: 'Order ID'},
    { id: 'topic', title: 'Topic'},
    { id: 'edulevel', title: 'Education Level'},
    { id: 'deadline', title: 'Deadline'},
    { id: 'status', title: 'Status', badge: true},
    { id: 'price', title: 'Price'},
]

const Index = () => {
    const { orders, getOrders, totOrderCount } = useDashboard();
    const [ datas, setDatas ] = useState<any[]>([]);
    // const [ isTableLoading, setIsTableLoading ] = useState<boolean>(false)
    // const [ pagestart, setPagestart ] = useState<number>(0);
    const { user } = useAuth();
    useEffect(() => {
        if(user) {
            getOrders(String(0), String(10));
        }
    }, [user])
    useEffect(() => {
        // console.log(orders)
        let newOrders = orders.map(order => {
            let orderid = '#360242163';
            let topic = order.copytype;
            let edulevel = order.edulevel;
            let deadline = order.deadline;
            let status = {
                content: "In Process",
                state: 'error'
            }
            let price = Number(order.price).toFixed(2) + " $";
            return { orderid, topic, edulevel, deadline, status, price, data: order }
        })
        setDatas(newOrders);
    }, [orders])

    const handlePagebtn = (page: number) => {
        getOrders(String((page - 1) * 10), String(10));
    }
    return (
        <div className='className} flex flex-col gap-6'>
            <h1 className="banner-subtitle">My Order</h1>
            <div className="rounded-[23px] p-6 flex flex-col gap-5 bg-[#FFFFFF] ">
                <div className="flex flex-row justify-between">
                    <div className='relative'>
                        <span className="absolute top-1/2 left-[17px] translate-y-[-50%] z-10">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.91314 10.9825C8.6266 10.9825 10.8263 8.78285 10.8263 6.06939C10.8263 3.35594 8.6266 1.15625 5.91314 1.15625C3.19969 1.15625 1 3.35594 1 6.06939C1 8.78285 3.19969 10.9825 5.91314 10.9825Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.71644 9.87535L12.8045 12.9635" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <input type="text" placeholder='Search' className='main-input bordered primary input-sm !pl-[40px]' />
                    </div>
                    <div className="flex gap-3">
                        <input type="text" placeholder='Status: All except.' className='main-input bordered primary input-sm' />
                        <input type="text" placeholder='Subject: All ' className='main-input bordered primary input-sm' />
                        <input type="text" placeholder='Sort: Creation date' className='main-input bordered primary input-sm' />
                    </div>
                </div>
                <Table columns={columns} datas={datas} />
            </div>
            <Pagination totalPages={Math.ceil(totOrderCount / 10)} onPageChange={handlePagebtn} />
        </div>
    )
}

export default Index;