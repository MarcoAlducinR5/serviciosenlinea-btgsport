import React from 'react';
import centroAyuda from '../Assets/icono-centroayuda.png';
import logo from "../Assets/logo.png";
import imgHome from "../Assets/img_home.png";
import logoBig from "../Assets/logo-btgs-big.png";
import iconMX from "../Assets/icon-MX.svg";
import footer1 from "../Assets/footer_logos.png";
import footer2 from "../Assets/footer_logos2.png";

const BtgSportsCtxt = React.createContext();

function BtgSportsPvdr(props){
    return(
        <BtgSportsCtxt.Provider value={{
            centroAyuda, logo, imgHome, logoBig, iconMX, footer1, footer2
        }}>
            {props.children}
        </BtgSportsCtxt.Provider>
    );
}

export {BtgSportsCtxt, BtgSportsPvdr};