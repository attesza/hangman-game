import React from 'react';
import {Outlet} from "react-router-dom";

function LayoutOutside() {
    return (
        <div
            className='flex flex-row items-center justify-center h-screen bg-gradient-to-r from-[#00ADEE] to-[#009ad5]'>
            <Outlet/>
        </div>
    );
}

export default LayoutOutside;
