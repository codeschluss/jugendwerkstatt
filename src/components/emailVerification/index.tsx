import React, { useState, useRef, MutableRefObject } from "react";
import logo from '../../images/jugendwerkstatt-logo.png';
import {ReactComponent as DoneSign} from '../../images/done-sign.svg';
import { Route } from 'react-router-dom';

const Index = () => {
    const [emailVerification, setEmailVerification] = useState(true);
    const [emailVerificationMessage, setEmailVerificationMessage] = useState('Sie haben Ihre E-Mail-Adresse erfolgreich bestätigt');
    //Sie haben Ihre E-Mail-Adresse erfolgreich bestätigt
    //Sie haben Ihre E-Mail-Adresse bereits bestätigt

    

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
        <div className="px-0 h-[30%]">
            <img className="h-full w-screen object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="grid grid-rows-12 flex-grow w-screen h-full px-10 -mt-6 rounded-3xl bg-white">
            <div className="row-start-5  w-full px-[30%]">
                <div className="w-full mt-10">
                    <svg width="" height="" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H100C105.523 0 110 4.47715 110 10V94C110 99.5229 105.523 104 100 104H10C4.47715 104 0 99.5229 0 94V10Z" fill="#FFCF00"/>
                    <path d="M41.0201 71.3336L22.6714 50.5127L16.5552 57.453L41.0201 85.2141L93.4448 25.7259L87.3286 18.7856L41.0201 71.3336Z" fill="#C20639"/>
                    </svg>
                </div>
            </div>
            <div className="row-span-5 text-center pt-5">
                <span className="pt-10">Glückwunsch</span>
            </div>
            <div className="row-span-6 text-center text-xs px-10">
                    <span>Du wurdest erfolgreich registriert.</span>
                    <br/>
                    <br/>
                    <span>Wir haben einen Link an deine E-Mail-Adresse gesendet, damit du diese verifizieren kannst.</span>
                </div>
            <div style={styles.mainButton} className="text-center select-none row-span-1 w-full h-8 active:opacity-80 rounded-2xl bg-[#C20639] text-white"
                                // onClick={Login}
                            >
                <span className="align-middle">E-Mail verifizieren</span>
            </div>
        </div>
        
    </div>
  );
};


export default Index;

const styles = {
    mainButton: {
      boxShadow: '0px 3px 3px grey'
    },
};