import React from 'react';
import { BtgSportsCtxt } from '../../Context';

function Footer(){
    
    const {footer1, footer2} = React.useContext(BtgSportsCtxt);
    return (
        <div className='flex flex-row items-center justify-around'>
            <div className='block'>
                <img src={footer1} title="Footer" alt="Footer" placeholder="Footer" className='p-3 lg:block 2xs:hidden 3xs1:hidden' />
                <img src={footer2} title="Footer" alt="Footer" placeholder="Footer" className='lg:hidden  3xs1:block 3xs1:p-1 2xs:p-5  xs:p-5  sm1:p-5  md:p-4' />
            </div>
        </div>
    );
}

export {Footer};