'use client';

import Ellipse from "../utils/Ellipse";
import { useEffect, useState } from "react";

interface OppData {
    name: string;
    sport: string;
    time: string;
    type: string;
    tbOdds: string;
    xdOdds: string;
    tbStake: string;
    xdStake: string;
    tbProfit: string;
    xdProfit: string;
}

const Test = () => {
    const [data, setData] = useState<OppData[]>([]); // State to store fetched data

    const startService = async () => {
        console.log("start");
        await fetch('/api/start', {
            method: "GET",
        });
    };

    const endService = async () => {
        console.log("end");
        await fetch('/api/end', {
            method: "GET",
        });
    };

    const getData = async () => {
        try {
            const res = await fetch('/api/arbi', {
                method: "GET",
            });
            const result = await res.json();
            console.log(result.data.opps);
            setData(result.data.opps || []); // Update the state with fetched opps array
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            await getData();
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative ctm-container pt-[135px] sm:pt-[140px] md:pt-[160px] lg:pt-[220px] sm:mb-[30px]">
            <Ellipse width="765px" height="765px" left="50%" top="-340px" opacity="0.2" className="hidden lg:block" zindex="10" />
            <button className="btn bg-[#EAC645] p-[10px] rounded-[4px] m-2" onClick={startService}>Start</button>
            <button className="btn bg-[#55B938] p-[10px] rounded-[4px] m-2" onClick={endService}>End</button>

            {/* Render data as a table */}
            <div className="mt-4">
                {data.length > 0 ? (
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Sport</th>
                                <th className="border border-gray-300 px-4 py-2">Time</th>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">TB Odds</th>
                                <th className="border border-gray-300 px-4 py-2">XD Odds</th>
                                <th className="border border-gray-300 px-4 py-2">TB Stake</th>
                                <th className="border border-gray-300 px-4 py-2">XD Stake</th>
                                <th className="border border-gray-300 px-4 py-2">TB Profit</th>
                                <th className="border border-gray-300 px-4 py-2">XD Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.sport}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.time}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.tbOdds}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.xdOdds}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.tbStake}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.xdStake}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.tbProfit}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.xdProfit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default Test;
