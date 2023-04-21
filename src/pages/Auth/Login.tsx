import React from 'react';
import {useDispatch} from "react-redux";
import {userLogin} from "../../redux/authActions";
import {useForm} from "react-hook-form";



function Login() {
    const dispatch = useDispatch<any>();
    const {register, handleSubmit} = useForm()
    const submitForm = (data: any) => {
        // @ts-ignore
        dispatch(userLogin(data))
    }

    return (
        <div
            className='flex flex-row items-center justify-center h-screen bg-gradient-to-r from-[#00ADEE] to-[#009ad5]'>

            <div className='flex flex-row rounded-md w-[50%] h-[70%] mx-auto bg-[#fbfbfb]'>
                <div className='flex flex-col p-16 sm:p-8 w-1/2 h-full items-center justify-around'>
                    <h1 className='first-letter:capitalize lg:text-3xl sm:text-xl font-semibold text-[#6A6866] '>Hangman
                        Game</h1>
                    <img className="xl:h-96 lg:h-48 md:h-36 sm:h-36 transform
                                transition duration-500 hover:scale-110"
                         src={require('../../assets/190319_game_hangman_icon.png')}
                         alt=""/>
                </div>
                <div className='flex flex-col w-1/2 h-full items-center justify-center '>
                    <h1 className='text-black font-bold capitalize pb-8'>login</h1>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input type="email"  {...register('email')}
                               className="bg-white shadow mt-2 mb-2 text-gray-900 text-sm rounded  focus:outline-[#00ADEE] border  focus:border border-[#243c5a] block  p-2.5   "
                               placeholder="email" value='john@doe.com' required/>
                        <input type="password"  {...register('password')}
                               className="bg-white shadow mt-2 mb-2 text-gray-900 text-sm rounded  focus:outline-[#00ADEE] border  focus:border border-[#243c5a] block  p-2.5   "
                               placeholder="email" value='password' required/>
                        <input className='letsPlay mt-16 rounded w-1/2 cursor-pointer' type="submit" value='login' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
