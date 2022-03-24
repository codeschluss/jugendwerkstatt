import React from "react";
import logo from './jugendwerkstatt-logo.png'

const index = () => {
  return (
    <div className="px-0 flex flex-col h-screen">
        <div className="px-0 h-[14rem]">
            <img className="h-full w-screen object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="flex justify-center items-center flex-grow w-screen -mt-10 rounded-3xl bg-white">
            test
        </div>
    </div>
  );
};

export default index;