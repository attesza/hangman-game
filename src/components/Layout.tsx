import React from 'react';
import Header from "./Header";

interface Props {
    children: React.ReactNode
}

function Layout(props: Props) {
    return (
        <>
            <Header/>
            <div className='flex h-screen justify-center items-center mx-auto bg-[#fbfbfb]'>{props.children}</div>
        </>
    );
}

export default Layout;
