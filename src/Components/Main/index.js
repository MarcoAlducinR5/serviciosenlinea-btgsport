import React from 'react';
import imgHome from "../../Assets/img_home.png";
import logoBig from "../../Assets/logo-btgs-big.png";
import iconMX from "../../Assets/icon-MX.svg";

function Main(){
    return(
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
                    <div class="flex 3xs1:basis-1/2 3xs2:basis-[58%] 3xs3:basis-[63.5%] 2xs1:basis-[61%] 2xs2:basis-[61%] 2xs3:basis-[61%] 2xs4:basis-[48%] 2xs5:basis-[63%] sm1:basis-1/2 sm2:basis-[54%] md1:basis-1/2 lg:basis-3/5 xl:basis-3/4 2xl:basis-[71.75%] 3xl:basis-4/5 hd:basis-[72%] 4k:basis-[75.5%] 3xs1:items-end md1:items-center lg:items-end justify-around">
                        <div className='block 3xs1:px-8 3xs2:px-12 2xs3:px-14 2xs5:px-12 sm1:px-16 sm2:px-24 md1:px-12 lg:px-8 xl:px-5 2xl:px-8 hd:px-10 4k:px-0'>
                            <p className="3xs1:text-xl 3xs1:py-2 3xs2:text-2xl sm1:text-[27px] lg:text-[32.5px] 2xl:text-[34px] 3xl:text-4xl hd:text-[39px] 4k:text-6xl">
                                Bienvenido a
                            </p>
                            <p className='flex flex-1 items-center justify-around'>
                                <img src={logoBig} title="logoBig" alt="logoBig" placeholder="logoBig" className='3xs1:w-[88px] 3xs2:w-36 3xs3:w-[150px] 2xs1:w-40 2xs3:w-44 sm1:w-[314px] sm2:w-[335px] md1:w-[232px] md2:w-[242px] md3:w-[252px] lg:w-[261px] xl:w-[331px] 2xl:w-[376.5px] 3xl:w-[407px] hd:w-[510px] 4k:w-[932px]'/>
                            </p>
                            <p className="3xs1:text-sm 3xs1:py-2 sm1:text-base lg:text-lg hd:text-xl 4k:text-[26px]">
                                <div className='hd:tracking-[0.03em] 4k:tracking-[0.01em]'>
                                    Podrás ver completamente en VIVO las ligas deportivas más importantes del mundo, estés donde estés.
                                </div>
                                <div className="flex items-center 3xs2:py-1 2xs1:py-0 4k:py-2">
                                    <div className="text-right 3xs1:w-4/5 3xs1:mx-1 3xs2:w-2/3 3xs3:w-[63%] 2xs4:w-[62%] sm1:w-[55%] md1:w-3/5 xl:w-[58.5%] 3xl:w-[57%] 4k:w-[55%]">
                                        Sólo para MX
                                    </div>
                                    <div className="3xs1:w-1/5 3xs2:w-1/3 3xs3:w-[37%] 2xs4:w-[38%] sm1:w-[45%] md1:w-2/5 lg:mx-1 xl:w-[41.5%] 3xl:w-[43%] 4k:w-[45%]">
                                        <img title="iconMX" src={iconMX} alt="iconMX" placeholder="iconMX" className='3xs1:w-3 3xs2:w-5 2xs1:w-6 sm1:w-[30px] '/>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div class="flex 3xs1:basis-1/2 3xs2:basis-[42%] 3xs3:basis-[37.5%] 2xs1:basis-[39%] 2xs2:basis-[39%] 2xs3:basis-[39%] 2xs4:basis-[52%] 2xs5:basis-[37%] sm1:basis-1/2 sm2:basis-[46%] md1:basis-1/2 lg:basis-2/5 xl:basis-1/4 2xl:basis-[28.25%] 3xl:basis-1/5 hd:basis-[28%] 4k:basis-[25.5%] 3xs1:items-start md1:items-center lg:items-start justify-around">
                        <div className='block'>
                            <div className='flex 3xs1:flex-col xl:flex-row justify-around'>
                                <div className='block bg-[#F12364] cursor-pointer rounded-[3.125rem] px-4 py-2 m-1 3xs1:text-xl 3xs1:w-32 3xs2:w-52 3xs2:py-1 3xs2:m-2.5 3xs3:m-3 3xs3:w-[214px] 2xs1:w-56 2xs3:w-60 sm1:w-[445px] sm2:w-[480px] md1:w-[244px] md2:w-64 md3:w-[267.5px] lg:w-[263.5px] xl:w-48 2xl:w-56 3xl:w-[244px] hd:w-[310px] 4k:w-[574px]'>
                                    <span>Contrata</span>
                                </div>
                                <div className='block bg-[#603685] cursor-pointer rounded-[3.125rem] px-4 py-2 m-1 3xs1:text-xl 3xs1:w-32 3xs2:w-52 3xs2:py-1 3xs2:m-2.5 3xs3:m-3 3xs3:w-[214px] 2xs1:w-56 2xs3:w-60 sm1:w-[445px] sm2:w-[480px] md1:w-[244px] md2:w-64 md3:w-[267.5px] lg:w-[263.5px] xl:w-48 2xl:w-56 3xl:w-[244px] hd:w-[310px] 4k:w-[574px]'>
                                    <span>Tú cuenta</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Main};