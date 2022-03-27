import React, { useState, useRef, MutableRefObject } from "react";
import logo from '../../images/jugendwerkstatt-logo.png';
import { Route } from 'react-router-dom'

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
        <div className="flex justify-center place-items-center px-10 flex-grow w-screen -mt-6 rounded-3xl bg-white">
            <span className="text-center">
                {emailVerificationMessage}
            </span>
        </div>
    </div>
  );
};


export default Index;