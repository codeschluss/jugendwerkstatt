import React from "react";
import logo from './jugendwerkstatt-logo.png'

const index = () => {
  return (
    <div className="px-0">
        <div className="px-0 h-[14rem]">
            <img className="h-full w-full object-cover" src={logo} alt={"logo"}/> 
        </div>
        <div className="h-screen w-screen absolute -mt-10 rounded-3xl bg-white">
            test
        </div>
    </div>
  );
};

export default index;