import React from "react";

const CallItems = () => {
  return (
    <div className="flex flex-row w-full my-3">
      <img src="/assets/avatarSmall2.png" className="w-10 h-10" alt="" />
      <div
        className="flex flex-row border-b-2 w-full
   border-[#676767] justify-between ml-3 pb-1 "
      >
        <div className="flex flex-col w-full ">
          <p className="text-base">Jane Cooper</p>

          <div className="flex">
            <p className="text-xs mr-3">IC</p>
            <span className="flex text-xs">
              <p>23.</p>
              <p>Februar,</p>
              <p>11:58</p>
            </span>
          </div>
        </div>
        <p className="text-xl text-center text-[#676767]">icon</p>
      </div>
    </div>
  );
};

export default CallItems;
