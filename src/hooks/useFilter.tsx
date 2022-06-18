import { useEffect, useState } from "react";

const useFilter = (inputValidation: any, initialValue?: any | undefined) => {
  const [place, setPlace] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [dates, setDates] = useState<any>();

  const placeChangeHandler = (place: string) => {
    setPlace(place);
  };
  const categoryChangeHandler = (category: string) => {
    setCategory(category);
  };
  const datesChangeHandler = (dates: any) => {
    setDates(dates);
  };

  const resetValue = () => {
    setPlace("");
    setCategory("");
    setDates("");
  };

  return {
    place,
    category,
    dates,
    placeChangeHandler,
    categoryChangeHandler,
    datesChangeHandler,

    resetValue,
  };
};

export default useFilter;
