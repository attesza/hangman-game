import React, {useCallback} from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Game from "./pages/Game/Game";
import Admin from "./pages/Admin/Admin";

function App() {
    const {token} = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<any>();


    // if (isExpired(localStorage.getItem('token')){
    //     return <Navigate to='/login' replace={true} />
    // }
    // if (token) {
    //     const decodedJwt: any = jwtDecode(token);
    //     console.log(decodedJwt)
    // }
    return (
            token ? (
            <Routes >
                <Route  path="/" element={<Layout><Home/></Layout>}/>
                <Route path="/game" element={<Layout><Game/></Layout>}/>
                <Route path="/admin" element={<Layout><Admin/></Layout>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            ) : (
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            )
    );
}

export default App;
