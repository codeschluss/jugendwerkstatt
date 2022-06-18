import { createContext, useState } from "react";
import detectDevice from "../shared/utils/isTouch";

export const FilterContext = createContext<any>(null);

export const FilterProvider: React.FunctionComponent = ({ children }) => {
  const [category, setCategory] = useState<string>();
  const [dates, setDates] = useState<any>({
    startDate: "",
    endDate: "",
  });

  return (
    <FilterContext.Provider value={{ category, setCategory, dates, setDates }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
