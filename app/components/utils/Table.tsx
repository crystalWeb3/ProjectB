import React, { useEffect} from 'react';
import Image from 'next/image';
interface CheckboxProps {
    columns: any[],
    datas: any[],
    classname?: string,
    defaultAction?: ( ...args: any) => any,
    isLoading?: boolean;
}

const Index: React.FC<CheckboxProps> = ({ columns, datas, classname, defaultAction, isLoading }) => {
    let className = classname || '';
    console.log('isLoading', isLoading)
    useEffect(() => {
        console.log('isLoading changed:', isLoading);
    }, [isLoading]);
    return (
        <table className={`w-full min-h-[300px] ${className}`}>
            <thead >
                <tr>
                    { columns.map(col => (
                        <th key={col.id} className="py-4 text-[17px] font-[500] first:rounded-l-[14px] last:rounded-r-[14px] bg-[#F2F7FB] text-left pl-[35px]">{col.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='relative'>
                { isLoading && (
                    <div className="absolute w-full h-full flex justify-center items-center bg-[#FFFFFF99]">
                        <Image src='/table_loading2.gif' alt="loading" width={200} height={200} />
                    </div>
                )}
                { datas.length === 0 
                    ? (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className="h-full text-center"
                            >
                                <div className="flex justify-center items-center">
                                    <Image
                                    src="/images/table/nodata.png"
                                    width={100}
                                    height={100}
                                    alt="No Data"
                                    />
                                </div>
                            </td>
                        </tr>
                    )
                    : (
                        datas.map((row, idx) => (
                            <tr key={idx} className="border-b-[1px] border-[#EBEBEB70] hover:bg-[#EBEBEB70]">
                                { columns.map(col => {
                                    if(col?.badge) {
                                        let style = ''
                                        if(row[col.id].state === 'success') style = 'bg-[#08CF7F10] text-[#08CF7F]';
                                        if(row[col.id].state === 'error') style = 'bg-[#FBDFD0] text-[#B84716]';
                                        return (
                                            <td key={col.id + idx}>
                                                <span className="py-4 text-[17px] font-[400] text-left pl-[35px] inline-flex items-center">
                                                    <span 
                                                        className={`${style} inline-block rounded-[10px] p-[6px] ${col?.action || defaultAction ? 'cursor-pointer': ''}`}
                                                        onClick={ col?.action? () => col.action(row): defaultAction? () => defaultAction(row): undefined}
                                                        >
                                                        {row[col.id].content}
                                                    </span>
                                                </span>
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td 
                                                key={col.id + idx} className={`${col?.action || defaultAction ? 'cursor-pointer': ''}`}
                                                onClick={ col?.action? () => col.action(row): defaultAction? () => defaultAction(row): undefined}
                                                >
                                                <span className="py-4 text-[17px] font-[400] text-left pl-[35px] inline-flex items-center">{row[col.id]}</span>
                                            </td>
                                        )
                                    }
                                })}
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    )
}

export default Index;