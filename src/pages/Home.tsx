import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {SubmitHandler, useForm} from "react-hook-form";
import {initGame} from "../redux/gameActions";
import {useDispatch} from "react-redux";
import {hasActiveGame, newGame} from "../services/gameServices";

type FormValues = {
    level: number;
}

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const {handleSubmit, setValue} = useForm<FormValues>();

    useEffect(() => {
        hasActiveGame().then(res => {
            if (res.data) {
                navigate('/game', {state: {hasActiveGame: res.data}})
            }
        })
    }, []);


    const onSubmit: SubmitHandler<FormValues> = data => {
        newGame(data).then(res => {
            dispatch(initGame(res.data))
            navigate('/game')
        })
    };
    return (
        <>
            <div className='flex flex-col md:p-40 md:pt-64 sm:p-20 w-full space-y-10  justify-center  text-center'>
                <h1 className='first-letter:capitalize text-4xl font-semibold text-[#6A6866] '>Hangman Game</h1>
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
