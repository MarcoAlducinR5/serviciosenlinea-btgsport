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
              <div className='block w-full h-full 3xs1:px-8 3xs2:px-14 2xs4:px-12'>
                <div className='flex flex-row 3xs1:items-end md1:items-center lg:items-end justify-around h-full text-center'>
                  <div className='block'>
                    <p className="3xs1:text-xl 3xs1:py-2 3xs2:text-2xl ">Bienvenido a</p>
                    {/* sm1:text-3xl */}
                    <p className='flex flex-1 items-center justify-around'>
                      <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-24 3xs2:w-36 2xs1:w-40 2xs3:w-44 2xs5:w-[184px]'/>
                      {/* sm1:w-3/4 */}
                    </p>
                    <p className="3xs1:text-sm 3xs1:py-2">
                    {/* sm1:text-base sm1:leading-relaxed sm2:text-lg */}
                      Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                      <div className="flex items-center">
                        {/* sm1:my-1 */}
                        <div className="text-right 3xs1:w-3/4 3xs1:mx-1 3xs2:w-2/3 2xs1:w-3/5">
                        {/* 2xs1:w-3/5 2xs1:mx-1 
                        sm2:text-lg */}
                          Sólo para MX
                        </div>
                        <div className="3xs1:w-1/4 3xs1:mx-1 3xs2:w-1/3 2xs1:w-2/5">
                        {/* 2xs1:w-2/5 2xs1:mx-1 */}
                          <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='3xs1:w-3 3xs2:w-5'/>
                          {/* 2xs1:w-6 sm1:w-6 */}
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className='block w-full h-full 3xs1:px-8 3xs2:px-14 2xs4:px-12'>
                <div className='flex flex-row 3xs1:items-start md1:items-center lg:items-start justify-around h-full text-center'>
                  <div className='block'>
                    <div className='flex 3xs1:flex-col xl:flex-row justify-around'>
                      <div className='block bg-[#F12364] cursor-pointer rounded-[3.125rem] px-4 py-2 m-2 3xs1:text-xl 3xs1:w-32 3xs2:w-52 2xs1:w-56 2xs3:w-64 2xs3:w-[248px]'>
                      {/* sm1:w-3/4 sm1:text-xl sm1:py-1 3xs3:my-2 */}
                        <span>Contrata</span>
                      </div>
                      <div className='block bg-[#603685] cursor-pointer rounded-[3.125rem] px-4 py-2 m-2 3xs1:text-xl 3xs1:w-32 3xs2:w-52 2xs1:w-56 2xs3:w-64 2xs3:w-[248px]'>
                      {/* sm1:w-3/4 sm1:text-xl sm1:py-1 3xs3:my-2 */}
                        <span>Tu cuenta</span
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex 3xs1:flex-col lg:flex-row w-full items-center justify-around'> */}
          {/* <div className='flex flex-1 items-center justify-around w-full h-full'>
            <img src={imgHome} title="imgHome" alt="imgHome" placeholder="imgHome" className='xl:hidden 3xs1:block 3xs1:px-4 sm1:px-5 md:w-[454px] lg:w-5/6'/>
          </div> */}
          {/* <div className='flex flex-1 items-center justify-around w-full h-full text-center font-bold p-2 3xs1:p-1 3xs1:pb-2 3xs2:px-9 sm1:pt-5 sm1:px-24 sm2:px-28'>
            <div className="block">
              <p className="sm1:text-3xl 3xs1:text-xl">Bienvenido a</p>
              <p className='flex flex-1 items-center justify-around 3xs1:p-2'>
                <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-24 3xs2:w-32 sm1:w-3/4'/>
              </p>
              <p className="3xs1:text-sm 3xs1:px-1 3xs2:text-base sm1:text-base sm1:leading-relaxed sm2:text-lg">
                Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                <div className="flex sm1:my-1">
                  <div className="text-right
                  3xs1:w-2/3 3xs1:mx-1 3xs1:text-xs 
                  3xs2:w-2/3 3xs2:mx-1 3xs2:text-base
                  2xs1:w-3/5 2xs1:mx-1 
                  sm2:text-lg
                  ">
                    Sólo para MX
                  </div>
                  <div className="
                  3xs1:w-1/3 3xs1:mx-1
                  2xs1:w-2/5 2xs1:mx-1
                  ">
                    <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='
                    3xs1:w-4 3xs2:w-6 2xs1:w-6 sm1:w-6
                    '/>
                  </div>
                </div>
              </p>
              <div className='flex flex-col items-center justify-around'>
                <div className='block bg-[#F12364] w-32 sm1:w-3/4 sm1:text-xl sm1:py-1 3xs1:text-base 3xs1:my-2 3xs3:my-2 cursor-pointer rounded-[3.125rem]'>
                  <span className="btnContrata">Contrata</span>
                </div>
                <div className='block bg-[#603685] w-32 sm1:w-3/4 sm1:text-xl sm1:py-1 3xs1:text-base 3xs1:my-2 3xs3:my-2 cursor-pointer rounded-[3.125rem]'>
                  <span className="btnTuCuenta">Tu cuenta</span>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className='flex 3xs1:flex-col md:flex-row lg:flex-col w-full'>
              <div className='block border-2'>
              flex flex-1 items-center justify-around w-full h-full text-center font-bold p-2 3xs1:p-1 3xs1:pb-2 3xs2:px-9 sm1:pt-5 sm1:px-24 sm2:px-28

              </div>
              <div className='block border-2'>
                Nulla do tempor consectetur non mollit ipsum.
              </div>
          </div> */}
        {/* </div> */}
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
