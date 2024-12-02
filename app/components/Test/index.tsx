'use client';

import Ellipse from "../utils/Ellipse";
import { useEffect, useState } from "react";

interface OppData {
    name: string;
    sport: string;
    time: string;
    type: string;
    casinoFirst: string;
    casinoSecond: string;
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

            // Transform API response into the desired format
            const transformedData = result.data.opps.map((opp: any) => ({
                name: opp.name,
                sport: opp.sport,
                time: opp.time,
                type: opp.type,
                casinoFirst: opp.casinos.first,
                casinoSecond: opp.casinos.second,
                tbOdds: opp.odds.first.join(' / '), // Format odds
                xdOdds: opp.odds.second.join(' / '),
                tbStake: opp.stake.first,
                xdStake: opp.stake.second,
                tbProfit: opp.profit.first,
                xdProfit: opp.profit.second,
            }));

            setData(transformedData);
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
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th className=" px-4 py-2">Name</th>
                                <th className=" px-4 py-2">Sport</th>
                                <th className=" px-4 py-2">Time</th>
                                <th className=" px-4 py-2">Type</th>
                                <th className=" px-4 py-2">Casino 1</th>
                                
                                <th className=" px-4 py-2">Odds</th>                                
                                <th className=" px-4 py-2">Stake</th>                                
                                <th className=" px-4 py-2">Profit</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className=" px-4 py-2">{item.name}</td>
                                    <td className=" px-4 py-2">{item.sport}</td>
                                    <td className=" px-4 py-2">{item.time}</td>
                                    <td className=" px-4 py-2">{item.type}</td>
                                    <td className=" px-4 py-2">
                                        <div>{item.casinoFirst}</div> 
                                        <div>{item.casinoSecond}</div>    
                                    </td>
                                    <td className=" px-4 py-2">
                                        <div>{item.tbOdds}</div> 
                                        <div>{item.xdOdds}</div>    
                                    </td>
                                    <td className=" px-4 py-2">
                                        <div>{item.tbStake}</div> 
                                        <div>{item.xdStake}</div>    
                                    </td>
                                    <td className=" px-4 py-2">
                                        <div>{item.tbProfit}</div> 
                                        <div>{item.xdProfit}</div>    
                                    </td>                                                                  
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
