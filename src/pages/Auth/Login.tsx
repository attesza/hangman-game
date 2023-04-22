import React from 'react';
import {useDispatch} from "react-redux";
import {userLogin} from "../../redux/authActions";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


function Login() {
    const dispatch = useDispatch<any>();
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate();
    const submitForm = (data: any) => {
        // @ts-ignore
        dispatch(userLogin(data))
    }

    return (
        <>
            <div className='flex flex-row  rounded-md mx-auto bg-[#fbfbfb] md:p-8 lg:p-16'>
                <div
                    className='hidden m-6 sm:block lg:flex lg:flex-col'>
                    <h1 className='first-letter:capitalize text-center pb-6 lg:text-3xl sm:text-xl font-semibold text-[#6A6866] '>Hangman
                        Game</h1>
                    <figure >
                        <img className="h-auto max-w-sm transform
                                transition duration-500 hover:scale-110"
                             src={require('../../assets/190319_game_hangman_icon.png')}
                             alt=""/>
                    </figure>
                </div>
                <div className='flex flex-col m-6 items-center justify-center '>
                    <h1 className='sm:hidden text-lg first-letter:capitalize text-center pb-6  font-semibold text-[#6A6866] '>Hangman
                        Game</h1>
                    <h1 className='text-lg text-black font-bold capitalize pb-8'>login</h1>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input type="email"  {...register('email')}
                               className="bg-white shadow mt-2 mb-2 text-gray-900 text-sm rounded  focus:outline-[#00ADEE] border  focus:border border-[#243c5a] block  p-2.5   "
                               placeholder="email" value='john@doe.com' required/>
                        <input type="password"  {...register('password')}
                               className="bg-white shadow mt-2 mb-2 text-gray-900 text-sm rounded  focus:outline-[#00ADEE] border  focus:border border-[#243c5a] block  p-2.5   "
                               placeholder="email" required/>
                        <input className='letsPlay w-full mt-16 rounded  cursor-pointer' type="submit" value='login'/>
                    </form>
                    <button onClick={() => navigate('/top')}
                            className='py-2 p-4 mr-2 rounded-md text-center text-[#739892] bg-white border border-[#739892]  mb-2 mt-2 uppercase text-l transition-all hover:bg-[#00ADEE] hover:text-white'>Top10
                        player
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;
