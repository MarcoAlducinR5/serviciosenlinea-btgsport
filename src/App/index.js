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
          </div>
          <div className='block'>
            <img src={centroAyuda} title="Ayuda" alt="Ayuda" placeholder="Ayuda" className='2xl:w-full 2xl:pr-24 2xl:px-1 xl:w-full xl:pr-24 xl:px-1 lg:w-full lg:pr-8 lg:px-1 md:w-16 md:pr-6 md:pt-2 sm1:w-full sm1:pr-20 sm1:pt-2 xs:w-16 xs:pr-8 xs:pt-2 2xs1:w-16 2xs1:pr-8 2xs1:pt-2 3xs1:w-7 3xs1:pr-2.5' /> 
          </div>
        </div>
      </header>
      <main className='flex flex-1'>
        <div className="w-full grid grid-col-2 lg:grid-flow-col">
          <div className="block">
            <div className='flex flex-row 3xs1:items-end lg:items-center justify-around h-full text-center'>
                <div className='block'>
                  <img src={imgHome} title="imgHome" alt="imgHome" placeholder="imgHome" className='xl:hidden 3xs1:block 3xs1:px-4 sm1:px-5 md1:w-[465px] md2:w-[482px] md3:w-[502px] lg:w-1/2'/>
                </div>
            </div>
          </div>
          <div className="block">
            <div className='flex 3xs1:flex-col md1:flex-row lg:flex-col 3xs1:items-start md1:items-center lg:items-start justify-around h-full text-center font-bold '>
              <div className='block w-full h-full 3xs1:px-8 3xs2:px-14 2xs4:px-12 sm1:px-16 sm2:px-24 md1:px-6 '>
                <div className='flex flex-row 3xs1:items-end md1:items-center lg:items-end justify-around h-full text-center'>
                  <div className='block'>
                    <p className="3xs1:text-xl 3xs1:py-2 3xs2:text-2xl sm1:text-3xl sm1:text-3xl md1:text-[27px]">Bienvenido a</p>
                    <p className='flex flex-1 items-center justify-around'>
                      <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-24 3xs2:w-36 2xs1:w-40 2xs3:w-44 2xs5:w-[184px] sm1:w-[314px] sm2:w-[335px] md1:w-[232px] md2:w-[242px] md3:w-[252px]'/>
                    </p>
                    <p className="3xs1:text-sm 3xs1:py-2 sm1:text-base md1:px-6">
                      Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                      <div className="flex items-center">
                        <div className="text-right 3xs1:w-3/4 3xs1:mx-1 3xs2:w-2/3 2xs1:w-3/5 sm1:w-[55%] sm1:py-2 sm2:py-2 md1:w-3/5">
                          Sólo para MX
                        </div>
                        <div className="3xs1:w-1/4 3xs1:mx-1 3xs2:w-1/3 2xs1:w-2/5 sm1:w-[45%] md1:w-2/5">
                          <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='3xs1:w-3 3xs2:w-5 sm1:w-7'/>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className='block w-full h-full 3xs1:px-8 3xs2:px-14 2xs4:px-12 sm1:px-16 sm2:px-24 md1:px-6 '>
                <div className='flex flex-row 3xs1:items-start md1:items-center lg:items-start justify-around h-full text-center'>
                  <div className='block'>
                    <div className='flex 3xs1:flex-col xl:flex-row justify-around'>
                      <div className='block bg-[#F12364] cursor-pointer rounded-[3.125rem] px-4 py-2 m-2 3xs1:text-xl 3xs1:w-32 3xs2:w-52 2xs1:w-56 2xs3:w-64 2xs3:w-[248px] sm1:w-[425px] sm2:w-[455px] md1:w-64 md1:py-1 md1:m-3 '>
                        <span>Contrata</span>
                      </div>
                      <div className='block bg-[#603685] cursor-pointer rounded-[3.125rem] px-4 py-2 m-2 3xs1:text-xl 3xs1:w-32 3xs2:w-52 2xs1:w-56 2xs3:w-64 2xs3:w-[248px] sm1:w-[425px] sm2:w-[455px] md1:w-64 md1:py-1 md1:m-3 '>
                        <span>Tu cuenta</span
                      ></div>
                    </div>
                  </div>
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
            <img src={footer2} title="Footer" alt="Footer" placeholder="Footer" className='lg:hidden  3xs1:block 3xs1:p-1 2xs:p-5  xs:p-5  sm1:p-5  md:p-4' />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
