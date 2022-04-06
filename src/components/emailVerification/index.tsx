import React, { useState, useRef, MutableRefObject } from "react";
import logo from '../../images/jugendwerkstatt-logo.png';
import {ReactComponent as DoneSign} from '../../images/done-sign.svg';
import { Route } from 'react-router-dom';

const Index = () => {
    // const [emailVerification, setEmailVerification] = useState(true);
    // const [emailVerificationMessage, setEmailVerificationMessage] = useState('Sie haben Ihre E-Mail-Adresse erfolgreich bestätigt');
    //Sie haben Ihre E-Mail-Adresse erfolgreich bestätigt
    //Sie haben Ihre E-Mail-Adresse bereits bestätigt

    const VerifyEmail = () => {
        window.alert('verify email');
    }

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
        <div className="px-0 h-[30%]">
            <img className="h-full w-screen object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="grid grid-rows-12 flex-grow w-screen h-full px-10 -mt-6 rounded-3xl bg-white">
            <div className="row-start-6  w-full px-[30%]">
                <DoneSign/>
            </div>
            <div className="row-span-6 text-center pt-5">
                <span className="">Glückwunsch</span>
            </div>
            <div className="text-gray-500 row-span-6 text-center text-xs px-10 -mt-10">
                    <span>Du wurdest erfolgreich registriert.</span>
                    <br/>
                    <br/>
                    <span>Wir haben einen Link an deine E-Mail-Adresse gesendet, damit du diese verifizieren kannst.</span>
                </div>
            <div style={styles.mainButton} className="text-center select-none row-span-1 w-full h-8 active:opacity-80 rounded-2xl bg-[#C20639] text-white"
                    onClick={VerifyEmail}
                >
                <span className="align-middle ">E-Mail verifizieren</span>
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