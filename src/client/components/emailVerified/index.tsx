import React, { useState, useRef, MutableRefObject } from "react";
import logo from '../../images/jugendwerkstatt-logo.png';
import {ReactComponent as DoneSign} from '../../images/done-sign.svg';
import { Route } from 'react-router-dom';

const Index = () => {
    const [emailVerificationMessage, setEmailVerificationMessage] = useState('Du hast deine E-Mail-Adresse erfolgreich verifiziert. ');
    const [emailAlreadyVerified, setemailAlreadyVerified] = useState(true);
    
    const successfullyVerifiedEmailMessage = 'Deine E-Mail-Adresse wurde bereits verifiziert.'
    const emailAlreadyVerifiedMessage = 'Du hast deine E-Mail-Adresse erfolgreich verifiziert.'
    
    const GoToApp = () => {
        window.alert('go to app');
    }

  return (
    <div className="px-0 flex flex-col w-screen h-screen">
        <div className="px-0 h-[30%]">
            <img className="h-full w-screen object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="grid grid-rows-12 flex-grow w-screen h-full px-10 -mt-6 rounded-3xl bg-white">
            <div className={`${emailAlreadyVerified==true? 'row-start-4 w-full px-[30%]' :
                                                            'row-start-4 w-full px-[30%]' }`}>
                <DoneSign/>
            </div>
            {
                !emailAlreadyVerified && 
                <div className="row-span-6 text-center pt-5 px-10">
                    <span className="">Glückwunsch</span>
                    <br/>
                    <br/>
                    <span className="text-gray-500 text-xs">{emailAlreadyVerifiedMessage}</span>
                </div>
            }
            {
                emailAlreadyVerified && 
                <div className="text-gray-500 row-span-6 text-xs text-center pt-5 px-10">
                    <br/>
                    <br/>
                    <span>{successfullyVerifiedEmailMessage}</span>
                </div>
            }
            <div style={styles.mainButton} className={`${emailAlreadyVerified==false? 'text-center select-none row-span-1 w-full h-8 active:opacity-80 rounded-2xl bg-[#C20639] text-white':
                                '-mb-4 text-center select-none row-span-1 w-full h-8 active:opacity-80 rounded-2xl bg-[#C20639] text-white'}`}
                    onClick={GoToApp}
                >
                <span className="align-middle ">Zur App</span>
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