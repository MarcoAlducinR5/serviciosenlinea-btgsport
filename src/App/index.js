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
        {/* <div className="w-full grid grid-col-2 lg:grid-flow-col">
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
        </div> */}
        <div class="flex 3xs1:flex-col lg:flex-row w-full">
          <div class="3xs1:basis-1/2 3xs3:basis-[47.5%] 2xs1:basis-[47%] 2xs2:basis-1/2 2xs3:basis-[50.5%] 2xs4:basis-[59.5%] 2xs5:basis-[49%] sm1:basis-[71.5%] sm2:basis-[56.5%] md1:basis-[55%] md2:basis-[54.5%] md3:basis-[55.5%] lg:basis-[64%] xl:basis-3/5 2xl:basis-3/5">
            <div className='flex flex-row 3xs1:items-end lg:items-center justify-around h-full text-center'>
              <div className='block'>
                <img src={imgHome} title="imgHome" alt="imgHome" placeholder="imgHome" className='xl:hidden 3xs1:block 3xs1:px-4 sm1:px-5 md1:w-[465px] md2:w-[482px] md3:w-[502px] lg:w-[368px]'/>
              </div>
            </div>
          </div>
          <div class="3xs1:basis-1/2 3xs3:basis-[52.5%] 2xs1:basis-[53%] 2xs2:basis-1/2 2xs3:basis-[49.5%] 2xs4:basis-[40.5%] 2xs5:basis-[51%] sm1:basis-[28.5%] sm2:basis-[43.5%] md1:basis-[45%] md2:basis-[45.5%] md3:basis-[44.5%] lg:basis-[41%] xl:basis-2/5 2xl:basis-2/5 text-center font-bold">
            <div class="flex 3xs1:flex-col md1:flex-row lg:flex-col h-full">
              <div class="flex 3xs1:basis-1/2 3xs2:basis-[58%] 3xs3:basis-[63.5%] 2xs1:basis-[61%] 2xs2:basis-[61%] 2xs3:basis-[61%] 2xs4:basis-[48%] 2xs5:basis-[63%] sm1:basis-1/2 sm2:basis-[54%] md1:basis-1/2 lg:basis-3/5 xl:basis-3/4 2xl:basis-[71.75%] 3xl:basis-4/5 hd:basis-[72%] 4k:basis-[75.5%] 3xs1:items-end md1:items-center lg:items-end justify-around border-2">
                <div className='block 3xs1:px-8 3xs2:px-12 2xs3:px-14 2xs5:px-12 sm1:px-16 sm2:px-24 md1:px-12 lg:px-8 xl:px-5 2xl:px-8'>
                  <p className="3xs1:text-xl 3xs1:py-2 3xs2:text-2xl sm1:text-[27px] lg:text-[32.5px] 2xl:text-[34px] 3xl:text-4xl">Bienvenido a</p>
                  <p className='flex flex-1 items-center justify-around'>
                    <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-[88px] 3xs2:w-36 3xs3:w-[150px] 2xs1:w-40 2xs3:w-44 sm1:w-[314px] sm2:w-[335px] md1:w-[232px] md2:w-[242px] md3:w-[252px] lg:w-[261px] xl:w-[331px] 2xl:w-[376.5px] 3xl:w-[407px]'/>
                  </p>
                  <p className="3xs1:text-sm 3xs1:py-2 sm1:text-base lg:text-lg">
                    Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                    <div className="flex items-center 3xs2:py-1 2xs1:py-0">
                      <div className="text-right 3xs1:w-4/5 3xs1:mx-1 3xs2:w-2/3 3xs3:w-[63%] 2xs4:w-[62%] sm1:w-[55%] md1:w-3/5 xl:w-[58.5%] 3xl:w-[57%]">
                        Sólo para MX
                      </div>
                      <div className="3xs1:w-1/5 3xs2:w-1/3 3xs3:w-[37%] 2xs4:w-[38%] sm1:w-[45%] md1:w-2/5 lg:mx-1 xl:w-[41.5%] 3xl:w-[43%]">
                        <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='3xs1:w-3 3xs2:w-5 2xs1:w-6 sm1:w-[30px] '/>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
              <div class="flex 3xs1:basis-1/2 3xs2:basis-[42%] 3xs3:basis-[37.5%] 2xs1:basis-[39%] 2xs2:basis-[39%] 2xs3:basis-[39%] 2xs4:basis-[52%] 2xs5:basis-[37%] sm1:basis-1/2 sm2:basis-[46%] md1:basis-1/2 lg:basis-2/5 xl:basis-1/4 2xl:basis-[28.25%] 3xl:basis-1/5 hd:basis-[28%] 4k:basis-[25.5%] 3xs1:items-start md1:items-center lg:items-start justify-around border-2">
                <div className='block border-2'>02</div>
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
