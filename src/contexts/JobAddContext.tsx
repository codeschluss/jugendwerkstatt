import { createContext, useState, useEffect } from "react";
import { useGetJobAdsQuery } from "../GraphQl/graphql";

export const JobAddContext = createContext<any>(null);

export const JobAddPovider: React.FunctionComponent = ({ children }) => {
  const [allJobAds, setAllJobAds] = useState<any>();

  const result = useGetJobAdsQuery({
    variables: {
      params: {
        //FilterSortPaginate fields
      },
    },
  });

  useEffect(() => {
    setAllJobAds(result.data?.getJobAds?.result);
  }, [result.data?.getJobAds?.result]);

  return (
    <JobAddContext.Provider
      value={{
        allJobAds,
        setAllJobAds,
      }}
    >
      {children}
    </JobAddContext.Provider>
  );
};

export default JobAddContext;
