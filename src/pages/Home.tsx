import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex space-y-10 bg-white h-[50%] justify-center w-[50%] flex-col text-center'>
                <h1 className='first-letter:capitalize text-6xl font-semibold text-[#6A6866] '>Hangman Game</h1>
                <span className='text-[#6A6866] text-lg '>Choose a difficulty level</span>
                <div className='flex flex-col  items-center'>
                    <button className='homeButton'>easy (6-8)</button>
                    <button className='homeButton'>medium (9-11)</button>
                    <button className='homeButton'>hard (12-14)</button>
                </div>
                <div className='items-center'>
                    <button onClick={()=>navigate('game')} className='letsPlay'>let's play</button>
                </div>
            </div>
        </>

    );
}

export default Home;
