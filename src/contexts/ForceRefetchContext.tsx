import { createContext, useState } from "react";
import detectDevice from "../shared/utils/isTouch";

export const ForceRefetchContext = createContext<any>(null);

export const ForceRefetchProvider: React.FunctionComponent = ({ children }) => {
  const [reRender, setReRender] = useState<boolean>();

  return (
    <ForceRefetchContext.Provider value={{ reRender, setReRender }}>
      {children}
    </ForceRefetchContext.Provider>
  );
};

export default ForceRefetchContext;
