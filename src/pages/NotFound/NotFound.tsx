import React from 'react';

function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-9xl font-semibold'>404</h1>
            <h2 className='text-4xl font-semibold mt-6 mb-6'>Page not found</h2>
            <span className='text-2xl text-gray-900'>This page you are looking for doesn't exist or an other error occured.</span>
        </div>
    );
}

export default NotFound;
