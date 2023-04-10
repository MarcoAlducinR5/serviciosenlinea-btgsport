import './App.css';
import React from 'react';
import centroAyuda from '../Assets/icono-centroayuda.png';
import logo from "../Assets/logo.png";

function App() {
  return (
    <React.Fragment>
      <header>
        <div className='flex justify-between p-2 3xl:bg-indigo-950 2xl:bg-indigo-950 xl:bg-indigo-950 lg:bg-indigo-950'> {/* #1D1B4C */}
                <div className='block'>
                  <img src={logo} title="Header" alt="Header" placeholder="Header" 
                  className='
                    2xl:py-4 2xl:pl-16 
                    xl:py-4 xl:pl-16 
                    lg:py-4 lg:pl-2 lg:visible 
                    2xs:invisible'
                  /></div>{/* pt-4 pl-16 w-11/12 w-[296px] */}
                <div className='block'>
                  <img src={centroAyuda} title="Ayuda" alt="Ayuda" placeholder="Ayuda"
                  className='
                  2xl:w-full 2xl:pr-24 2xl:px-1 
                  xl:w-full xl:pr-24 xl:px-1 
                  lg:w-full lg:pr-8 lg:px-1 
                  md:w-16 md:pr-6 md:pt-2 
                  sm:w-full sm:pr-20 sm:pt-2
                  xs:w-16 xs:pr-8 xs:pt-2 
                  2xs:w-16 2xs:pr-8 2xs:pt-2 
                  ' 
                  />
                </div>
            </div>
      </header>
      <main className='flex flex-1'>main</main>
      <footer>footer</footer>
    </React.Fragment>
  );
}

export default App;
