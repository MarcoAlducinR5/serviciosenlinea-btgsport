import './App.css';
import React from 'react';
import centroAyuda from '../Assets/icono-centroayuda.png';
import logo from "../Assets/logo.png";
import footer1 from "../Assets/footer_logos.png";
import footer2 from "../Assets/footer_logos2.png";
import imgHome from "../Assets/img_home.png";
import logoBig from "../Assets/logo-btgs-big.png";
import iconMX from "../Assets/icon-MX.svg";

function App() {
  return (
    <React.Fragment>
      <header>
        <div className='flex justify-between p-2 3xl:bg-indigo-950 2xl:bg-indigo-950 xl:bg-indigo-950 lg:bg-indigo-950'> {/* #1D1B4C */}
          <div className='block'>
            <img src={logo} title="Header" alt="Header" placeholder="Header" className='2xl:py-4 2xl:pl-16 xl:py-4 xl:pl-16 lg:py-4 lg:pl-2 lg:block 3xs1:hidden'/>
          </div>{/* pt-4 pl-16 w-11/12 w-[296px] */}
          <div className='block'>
            <img src={centroAyuda} title="Ayuda" alt="Ayuda" placeholder="Ayuda" className='2xl:w-full 2xl:pr-24 2xl:px-1 xl:w-full xl:pr-24 xl:px-1 lg:w-full lg:pr-8 lg:px-1 md:w-16 md:pr-6 md:pt-2 sm:w-full sm:pr-20 sm:pt-2 xs:w-16 xs:pr-8 xs:pt-2 2xs:w-16 2xs:pr-8 2xs:pt-2 3xs1:w-7 3xs1:pr-2.5' />
          </div>
        </div>
      </header>
      <main className='flex flex-1'>
        <div className='flex 3xs1:flex-col lg:flex-row w-full items-center justify-around'>
          <div className='flex flex-1 items-center justify-around w-full h-full'>
            <img src={imgHome} title="imgHome" alt="imgHome" placeholder="imgHome" className='xl:hidden 3xs1:block 3xs1:px-4 sm:px-5 md:w-[454px] lg:w-5/6'/>
          </div>
          <div className='flex flex-1 items-center justify-around w-full h-full text-center font-bold p-2 3xs1:p-1 3xs1:pb-2 3xs2:px-9'>
          {/* 3xs1:p-2 3xs1:pb-2 */}
            <div className="block">
              <p className="3xs1:text-xl">Bienvenido a</p>
              <p className='flex flex-1 items-center justify-around 3xs1:p-2'>
                <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-24 3xs2:w-32'/>
              </p>
              <p className="3xs1:text-sm 3xs1:px-1 3xs2:text-base">
                Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                <div className="3xs1:text-xs 3xs1:p-2 3xs1:pr-8">
                  Sólo para MX <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='absolute 3xs1:-bottom-[75.5px] 3xs1:right-[68px] 3xs1:w-4 3xs2:bottom-[176.5px] 3xs2:right-[137.5px] 3xs3:bottom-[196px] 3xs3:right-[145px]'/>
                </div>
              </p>
              <div className='flex flex-col items-center justify-around'>
                <div className='block bg-[#F12364] w-28 3xs1:text-base 3xs1:my-2 3xs3:my-2 cursor-pointer rounded-[3.125rem]'>
                  <span className="btnContrata">Contrata</span>
                </div>
                <div className='block bg-[#603685] w-28 3xs1:text-base 3xs1:my-2 3xs3:my-2 cursor-pointer rounded-[3.125rem]'>
                  <span className="btnTuCuenta">Tu cuenta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className='flex flex-row items-center justify-around'>
          <div className='block'>
            <img src={footer1} title="Footer" alt="Footer" placeholder="Footer" className='p-3 lg:block 2xs:hidden 3xs1:hidden' />
            <img src={footer2} title="Footer" alt="Footer" placeholder="Footer" className='lg:hidden  3xs1:block 3xs1:p-1 2xs:p-5  xs:p-5  sm:p-5  md:p-4' />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
