import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {userLogout} from "../redux/authActions";
import {useNavigate} from 'react-router-dom';

function Header() {
    const user = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        dispatch(userLogout)
        window.location.reload();

    }, [dispatch]);

    return (
        <header
            className="sticky  h-24 top-0 p-5 flex items-start justify-between bg-white  mx-auto z-20 xl:items-center">

            <img className="h-24"
                 src={require('../assets/029-Attrecto_logo.png')}
                 alt=""/>
            <div className='flex flex-row'>
                <h1 className=' text-2xl uppercase  text-[#6A6866]'>admin</h1>
                <button className='text-2xl uppercase ml-3' onClick={handleLogout}>Logout</button>
            </div>
        </header>
    );
}

export default Header;
