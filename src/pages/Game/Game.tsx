import React, {useEffect, useState} from 'react';
import Figure from "../../components/Figure";
import {useDispatch, useSelector} from "react-redux";
import {initGame, tryCharacter} from "../../redux/gameActions";
import {RootState} from "../../store/store";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {continueGame, stopGame} from "../../services/gameServices";

type Props = {
    hasActiveGame: boolean
}

function Game() {
    const params = useParams();
    const location = useLocation();
    const {actualWord, wrongCounter, triedCharacter, gameState} = useSelector((state: RootState) => state.game)
    const [maskedWord, setMaskedWord] = useState<string>();
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

    useEffect(() => {
        if (location && location.state && location.state.hasActiveGame) {
            continueGame().then(res => {
                dispatch(initGame(res.data))
            })
        }
    }, [dispatch, location]);


    useEffect(() => {
        setMaskedWord(actualWord.split('').map((letter: string) => letter !== '*' ? letter : "_").join(" "))
    }, [actualWord]);

    const handleEndGame = () => {
        stopGame().then(r => {
            navigate('/')
        })
    }
    const handleTryChar = (alphabet: string) => {
        dispatch(tryCharacter(alphabet))
    }
    return (
        <div className='flex flex-row flex-wrap  xl:p-64 md:p-32 md:flex-wrap lg:p-24 sm:flex-wrap sm:p-32  w-screen justify-center bg-white '>
            <div className='flex-1 flex flex-col space-y-12 space-x-12 xl:p-16 md:p-8 sm:p-8 w-[50%] '>
                <h1 className='first-letter:capitalize text-3xl font-semibold text-[#6A6866] '>Hangman Game</h1>
                {gameState === 'SUCCESS' && (
                    <h2 className='font-semibold text-2xl text-[#0f6d28]'>You've won!</h2>)}
                {gameState === 'DONE' && (
                    <h2 className='font-semibold text-2xl text-red-600'>You've lost!</h2>)}
                {/*grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));*/}
                <p className='text-5xl '>{maskedWord}</p>
                <div className='grid sm:flex sm:flex-row sm:flex-wrap md:grid-cols-8 lg:grid-cols-12 sm:gap-3 pr-12 gap-4 '>
                    {alphabets
                        .map((alphabet, index) => {
                            return (
                                <button
                                    disabled={!!triedCharacter.includes(alphabet.toLowerCase()) || gameState !== 'ACTIVE'}
                                    onClick={() => handleTryChar(alphabet)}
                                    className='alphabetsButton disabled:border-[#DEDEDE] disabled:text-[#DEDEDE] disabled:hover:bg-white disabled:hover:cursor-not-allowed'
                                    key={index}>{alphabet}</button>)
                        })}
                </div>
                {actualWord && <h1 className='text-[#231d1b]'>Remaining possibility of failure: <span
                    className='font-semibold'>{6 - wrongCounter}</span></h1>}
                <div>
                    <button onClick={handleEndGame}
                            className='py-2 p-4 mr-2 rounded-md text-center text-[#739892] bg-white border border-[#739892]  mb-2 mt-2 uppercase text-l transition-all hover:bg-[#00ADEE] hover:text-white'>end
                        game
                    </button>
                    {gameState !== 'ACTIVE' && (
                        <button
                            onClick={() => navigate('/')}
                            className='py-2 p-4 ml-2 rounded-md text-center text-white bg-[#00ADEE]  mb-2 mt-2 uppercase text-l transition-all hover:bg-[#00ADEE] hover:text-white'>start
                            new game
                        </button>)}
                </div>
            </div>
            <div className='flex-1 flex	  items-center justify-center'><Figure
                wrongLetters={wrongCounter ? wrongCounter : 0}/></div>

        </div>
    );
}

export default Game;
