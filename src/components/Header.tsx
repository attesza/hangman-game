import React from 'react';

function Header() {
    return (
        <header className="sticky  h-24 top-0 p-5 flex items-start justify-between bg-white  mx-auto z-20 xl:items-center">
            <img className="h-24"
                 src={ require('../assets/029-Attrecto_logo.png')}
                 alt=""/>
            <h1 className=' text-2xl uppercase  text-[#6A6866]'>admin</h1>
        </header>
    );
}

export default Header;
