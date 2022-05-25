import React from "react";
import { RegisterFooter } from "../register/registerfooter/RegisterFooter";

interface AuthWrapperProps {
  title: string;
  headerType?: string;
  headerContent?: string;
  resendLink?: any;
  page?: string;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  title,
  children,
  headerType,
  headerContent,
  resendLink,
  page,
}) => {
  let authHeaderIcon;

  return (
    <div className="px-0 flex flex-col w-screen h-screen absolute top-0 z-20">
      <div className="px-0 relative h-100 flex justify-center items-center ">
        <img
          className="h-full w-screen object-cover"
          src="/assets/background.png"
          alt={"logo"}
        />
        {headerType && (
          <div
            className="w-[80%]  h-[80%] bg white absolute z-10
     bg-white rounded-md top-4 flex justify-center
      items-center  flex-col text-center p-3"
          >
            {authHeaderIcon}
            <p className="text-sm">{headerContent}</p>
            {resendLink && (
              <p onClick={resendLink} className="text-sm underline font-medium">
                Link nochmal senden
              </p>
            )}
          </div>
        )}
      </div>
      <div className=" w-full relative -mt-6 rounded-3xl bg-white">
        <h4 className="text-3xl text-center mt-5">{title}</h4>
        {children}
        <RegisterFooter type={page} />
      </div>
    </div>
  );
};

export default AuthWrapper;
