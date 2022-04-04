import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return(
        <div className='flex flex-col items-center justify-center h-screen w-screen'>
            <h1 className='text-8xl'>404</h1>
            <h2 className='text-5xl'>Página no encontrada</h2>
            <button className='mt-5 text-2xl bg-green px-2 py-1 rounded-md text-white'><Link to={'/'}>Volver</Link></button>
        </div>
    )
}