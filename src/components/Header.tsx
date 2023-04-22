import React, {useCallback, useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store/store";
import {getUserInfo, userLogout} from "../redux/authActions";
import {useNavigate} from 'react-router-dom';

function Header() {
    const token = useSelector((state: RootState) => state.auth.token)
    const userInfo = useSelector((state: RootState) => state.auth.user ? JSON.parse(state.auth.user) : '')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (token && !userInfo) {
            dispatch(getUserInfo())
        }
    }, [dispatch, token, userInfo]);


    const handleLogout = useCallback(() => {
        dispatch(userLogout)
        navigate('/')
        window.location.reload();
    }, [dispatch, navigate]);

    return (
        <header
            className="sticky h-24 top-0 p-5 flex items-start justify-center min-[400px]:justify-between bg-white mx-auto z-20 xl:items-center">
            <figure onClick={() => navigate('/')} className='hidden min-[400px]:flex transition'>
                <img className="max-h-14 w-auto transform
                                transition duration-500 hover:scale-110"
                     src={require('../assets/029-Attrecto_logo.png')}
                     alt=""/>
            </figure>
            <div className='flex flex-row h-full items-center'>
                <button className='navBarButton' onClick={() => navigate('/top')}>Top10
                </button>
                <button className='navBarButton' onClick={() => navigate('/admin')}>Admin
                </button>
                <button className='navBarButton' onClick={handleLogout}>Logout</button>
                <div className='flex flex-row justify-center items-center ml-12'>
                    <figure className='hidden md:flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6A6866"
                             className="w-6 h-6 ml-2 mr-2">
                            <path fillRule="evenodd"
                                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                  clipRule="evenodd"/>
                        </svg>
                    </figure>
                    <span className='text-lg text-[#6A6866]'>{userInfo.firstname} {userInfo.lastname}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
