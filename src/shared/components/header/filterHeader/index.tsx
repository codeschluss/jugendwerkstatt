import { XCircleIcon } from "@heroicons/react/solid";
import React, { useContext } from "react";
import FilterContext from "../../../../contexts/FilterContext";

const FilterHeader = () => {
  const { category, setCategory, dates, setDates } = useContext(FilterContext);

  return (
    <>
      {category && (
        <div className="bg-[#9E002A] md:bg-primary h-8 pl-3 pr-1 flex   items-center rounded-full text-white text-xs md:text-base mx-1">
          <p>{category.name}</p>
          <XCircleIcon
            className="w-6   rounded-full p-0 ml-1 "
            onClick={() => setCategory("")}
          />
        </div>
      )}
      {dates.startDate && (
        <div className="bg-[#9E002A] md:bg-primary h-8 pl-3 pr-1 flex items-center rounded-full text-white text-xs md:text-base">
          <p>{`${dates.startDate.$D}.${
            dates.startDate.$M < 9
              ? "0" + dates.startDate.$M + 1
              : dates.startDate.$M + 1
          }.${dates.startDate.$y}`}</p>
          <XCircleIcon
            className="w-6   rounded-full p-0 ml-1 "
            onClick={() => setDates({ ...dates, startDate: "" })}
          />
        </div>
      )}
      {dates.endDate && (
        <div className="bg-[#9E002A] md:bg-primary h-8 pl-3 pr-1 flex items-center rounded-full text-white text-xs md:text-base">
          <p>{`${dates?.endDate.$D}.${
            dates?.endDate.$M < 9
              ? "0" + dates?.endDate.$M + 1
              : dates?.endDate.$M + 1
          }.${dates.endDate.$y}`}</p>
          <XCircleIcon
            className="w-6   rounded-full p-0 ml-1 "
            onClick={() => setDates({ ...dates, endDate: "" })}
          />
        </div>
      )}
    </>
  );
};

export default FilterHeader;
