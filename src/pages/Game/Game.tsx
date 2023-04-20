import React, {useEffect, useState} from 'react';
import Figure from "../../components/Figure";
import {getWords, newGame} from "../../services/wordService";

function Game() {
    const word = "TESZT";

    const handleGame = () => {
        newGame({level: 1}).then(res => {
            console.log('ez a res', res.data)
        })
    }



    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // const [guesses, setGuesses] = useState([] as any);

    const [correctGuesses, setCorrectGuesses] = useState([] as any)
    const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");
    const [trying, setTrying] = useState(0)

    // const guessWord = (alphabet:string)=>{
    //     setGuesses({...guesses,alphabet})
    //
    // }


    return (
        <div className='flex flex-col h-[70%] bg-white w-[70%] p-16'>
            <div className='flex flex-row h-full'>
                <div className='w-3/5 flex flex-col   justify-between'>
                    <h1 className='first-letter:capitalize text-3xl font-semibold text-[#6A6866] '>Hangman Game</h1>
                    {<h2 className='font-semibold text-2xl text-[#0f6d28]'>You've won!</h2>}
                    <p className='text-5xl '>{maskedWord}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 md:gap-4 lg:gap-6 p-5'>
                        {alphabets
                            .map((alphabet, index) =>
                                <button onClick={() => {
                                    if (word.includes(alphabet)) {
                                        setCorrectGuesses([...correctGuesses, alphabet])
                                    } else {
                                        setTrying((prevState) => prevState + 1)
                                    }
                                }} className='alphabetsButton' key={index}>{alphabet}</button>)}
                    </div>
                    {/*<div className='grid grid-cols-12 gap-2'>*/}
                    {/*    {alphabets*/}
                    {/*        .map((alphabet, index) =>*/}
                    {/*            <button onClick={() => {*/}
                    {/*                if (word.includes(alphabet)) {*/}
                    {/*                    setCorrectGuesses([...correctGuesses, alphabet])*/}
                    {/*                } else {*/}
                    {/*                    setTrying((prevState) => prevState + 1)*/}
                    {/*                }*/}
                    {/*            }} className='alphabetsButton' key={index}>{alphabet}</button>)}*/}
                    {/*</div>*/}
                    <h1 className='text-[#231d1b]'>Remaining possibility of failure: <span className='font-semibold'>3</span></h1>
                    <div>
                        <button
                            className='py-2 p-4 mr-2 rounded-md text-center text-[#739892] bg-white border border-[#739892]  mb-2 mt-2 uppercase text-l transition-all hover:bg-[#00ADEE] hover:text-white'>end
                            game
                        </button>
                        <button onClick={()=>handleGame()}
                            className='py-2 p-4 ml-2 rounded-md text-center text-white bg-[#00ADEE]  mb-2 mt-2 uppercase text-l transition-all hover:bg-[#00ADEE] hover:text-white'>start
                            new game
                        </button>
                    </div>
                </div>
                <div className='w-2/5 flex scale-y-150	 -scale-x-150  items-center justify-center'><Figure wrongLetters={trying}/></div>
            </div>

        </div>
    );
}

export default Game;
