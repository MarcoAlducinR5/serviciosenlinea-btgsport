import './App.css';
import React from 'react';
import centroAyuda from '../Assets/icono-centroayuda.png';
import logo from "../Assets/logo.png";
import footer1 from "../Assets/footer_logos.png";
import footer2 from "../Assets/footer_logos2.png";

function App() {
  return (
    <React.Fragment>
      <header>
        <div className='flex justify-between p-2 3xl:bg-indigo-950 2xl:bg-indigo-950 xl:bg-indigo-950 lg:bg-indigo-950'> {/* #1D1B4C */}
          <div className='block'>
            <img src={logo} title="Header" alt="Header" placeholder="Header" className='2xl:py-4 2xl:pl-16 xl:py-4 xl:pl-16 lg:py-4 lg:pl-2 lg:block 3xs:hidden'/>
          </div>{/* pt-4 pl-16 w-11/12 w-[296px] */}
          <div className='block'>
            <img src={centroAyuda} title="Ayuda" alt="Ayuda" placeholder="Ayuda" className='2xl:w-full 2xl:pr-24 2xl:px-1 xl:w-full xl:pr-24 xl:px-1 lg:w-full lg:pr-8 lg:px-1 md:w-16 md:pr-6 md:pt-2 sm:w-full sm:pr-20 sm:pt-2 xs:w-16 xs:pr-8 xs:pt-2 2xs:w-16 2xs:pr-8 2xs:pt-2 3xs:w-7 3xs:pr-2.5' />
          </div>
        </div>
      </header>
      <main className='flex flex-1'>
        <div className='flex 3xs:flex-col lg:flex-row w-full items-center justify-around'>
          <div className='flex flex-1 items-center justify-around w-full h-full border-2 border-gray-300'>hola</div>
          <div className='flex flex-1 items-center justify-around w-full h-full border-2 border-gray-300'>hola</div>
        </div>
      </main>
      <footer>
        <div className='flex flex-row items-center justify-around'>
          <div className='block'>
            <img src={footer1} title="Footer" alt="Footer" placeholder="Footer" className='p-3 lg:block 2xs:hidden 3xs:hidden' />
            <img src={footer2} title="Footer" alt="Footer" placeholder="Footer" className='lg:hidden  3xs:block 3xs:p-1 2xs:p-5  xs:p-5  sm:p-5  md:p-4' />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
