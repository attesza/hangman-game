import React from 'react';
import {useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";
import {newGame} from "../services/wordService";
import {initGame} from "../redux/gameActions";
import {useDispatch} from "react-redux";

type FormValues = {
    level: number;
}

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const {handleSubmit, setValue} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => {
        newGame(data).then(res => {
            dispatch(initGame(res.data))
            navigate('/game')
        })
    };
    return (
        <>
            <div className='flex space-y-10 bg-white h-[50%] justify-center w-[50%] flex-col text-center'>
                <h1 className='first-letter:capitalize text-6xl font-semibold text-[#6A6866] '>Hangman Game</h1>
                <span className='text-[#6A6866] text-lg '>Choose a difficulty level</span>
                <div className='flex flex-col  items-center'>
                    <form className='flex flex-col  w-full items-center' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col  w-full items-center'>
                            <input onClick={() => setValue('level', 1)} type="radio" id="game-easy" name="game"
                                   value="game-easy"
                                   className="hidden peer" required/>
                            <label htmlFor="game-easy"
                                   className="levelSelectButton">
                                <div className="w-full text-lg font-semibold">Easy (6-8)</div>
                            </label>
                        </div>
                        <div className='flex flex-col  w-full items-center'>
                            <input onClick={() => setValue('level', 2)} type="radio" id="game-medium" name="game"
                                   value="game-medium"
                                   className="hidden peer"/>
                            <label htmlFor="game-medium"
                                   className="levelSelectButton ">
                                <div className="w-full text-lg font-semibold">Medium (9-11)</div>
                            </label>
                        </div>
                        <div className='flex flex-col  w-full items-center'>
                            <input onClick={() => setValue('level', 3)} type="radio" id="game-hard" name="game"
                                   value="game-hard"
                                   className="hidden peer"/>
                            <label htmlFor="game-hard"
                                   className="levelSelectButton ">
                                <div className="w-full text-lg font-semibold">Hard (12-14)</div>

                            </label>
                        </div>

                        <input className='letsPlay' type="submit" placeholder={'Let\'s play'}/>
                    </form>

                </div>

            </div>
        </>

    )
        ;
}

export default Home;
