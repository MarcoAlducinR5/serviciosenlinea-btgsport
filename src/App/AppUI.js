import React from 'react';
import { Header } from '../Components/Header';
import { Main } from '../Components/Main';
import { Footer } from '../Components/Footer';

function AppUI(){
    return(
        <React.Fragment>            
            <header>
                <Header />
            </header>
            <main className='flex flex-1'>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
    
}

export {AppUI};