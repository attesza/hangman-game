import React, {useEffect} from 'react';
import Header from "./Header";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../store/store";
import jwtDecode from "jwt-decode";
import {userLogout} from "../redux/authActions";

function Layout() {
    const {token} = useSelector((state: RootState) => state.auth)
    let location = useLocation();
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    useEffect(() => {

        if (token) {
            const decodedJwt: any = jwtDecode(token);
            if (decodedJwt.exp * 1000 < Date.now()) {
                dispatch(userLogout)
                navigate('/')
                window.location.reload();
            }
        }
    }, [dispatch, location, navigate, token]);

    return (
        <>
            <Header/>
            <div className='flex h-screen justify-center items-center mx-auto bg-[#fbfbfb]'><Outlet/></div>
        </>
    );
}

export default Layout;
