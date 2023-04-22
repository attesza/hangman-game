import React, {useEffect, useState} from 'react';
import {getTop} from "../services/gameServices";

type TableProps = {
    name: string,
    score: number
}

function Top() {
    const [topList, setTopList] = useState<TableProps[]>();
    useEffect(() => {
        getTop().then(res => {
            setTopList(res.data)
        })
    }, [])
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr >
                    <th scope="col" className="px-6 py-3">#</th>
                    <th scope="col" className="px-6 py-3">Name</th>
                    <th scope="col" className="px-6 py-3">Score</th>
                </tr>
                </thead>
                <tbody>
                {topList?.map((item, index) => {
                    return (<tr className='text-center bg-white'>
                        <td className='px-6 py-3'>{index+1}</td>
                        <td className='px-6 py-3'>{item.name}</td>
                        <td className='px-6 py-3'>{item.score}</td>
                    </tr>)
                })}


                </tbody>
            </table>
        </div>
    );
}

export default Top;
