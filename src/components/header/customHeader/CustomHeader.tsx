import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const CustomHeader: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-24 bg-primary sticky text-2xl text-white flex items-center px-5 ">
      <ChevronLeftIcon className="w-7 h-7" onClick={() => navigate(-1)} />
      <p className="mx-auto">{children}</p>
    </div>
  );
};

export default CustomHeader;
