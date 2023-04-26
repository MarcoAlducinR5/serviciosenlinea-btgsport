import React from 'react';
import { BtgSportsCtxt } from '../../Context';

function Header(){

    const {centroAyuda, logo} = React.useContext(BtgSportsCtxt);
    return(
        <div className='flex justify-between p-2 3xl:bg-indigo-950 2xl:bg-indigo-950 xl:bg-indigo-950 lg:bg-indigo-950'> {/* #1D1B4C */}
            <div className='block'>
                <img src={logo} title="Header" alt="Header" placeholder="Header" className='2xl:py-4 2xl:pl-16 xl:py-4 xl:pl-16 lg:py-4 lg:pl-2 lg:block 3xs1:hidden'/>
            </div>
            <div className='block'>
                <img src={centroAyuda} title="Ayuda" alt="Ayuda" placeholder="Ayuda" className='2xl:w-full 2xl:pr-24 2xl:px-1 xl:w-full xl:pr-24 xl:px-1 lg:w-full lg:pr-8 lg:px-1 md:w-16 md:pr-6 md:pt-2 sm1:w-full sm1:pr-20 sm1:pt-2 xs:w-16 xs:pr-8 xs:pt-2 2xs1:w-16 2xs1:pr-8 2xs1:pt-2 3xs1:w-7 3xs1:pr-2.5' /> 
            </div> 
        </div>
    );
}

export {Header};