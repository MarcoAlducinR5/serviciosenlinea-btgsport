import React from 'react';
import { Principal } from './Principal';
import { Ingresa } from './Ingresa';

function Main(){

    return(
        <div class="flex 3xs1:flex-col lg:flex-row w-full">
            {/* <Principal /> */}
            <Ingresa />
        </div>
    );
}

export {Main};