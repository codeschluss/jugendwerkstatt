import React from "react";
import { RegisterFooter } from "../register/registerfooter/RegisterFooter";
import AuthInfoHeader from "./AuthInfoHeader";
interface AuthWrapperProps {
  title: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ title, children }) => {
  return (
    <div className="px-0 flex flex-col w-screen h-screen">
      <div className="px-0 relative h-100 flex justify-center items-center ">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
        <AuthInfoHeader />
      </div>
      <div className=" w-full relative -mt-6 rounded-3xl bg-white">
        <h4 className="text-3xl text-center mt-5">{title}</h4>
        {children}
        <RegisterFooter />
      </div>
    </div>
  );
};

export default AuthWrapper;
