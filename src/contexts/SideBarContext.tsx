import { createContext, useState } from "react";
import detectDevice from "../utils/isTouch";

export const SideBarContext = createContext<{
  sideBar: boolean;
  setSideBar: (e: boolean) => void;
}>({
  sideBar: false,
  setSideBar: () => false,
});

export const SideBarProvider: React.FunctionComponent = ({ children }) => {
  const isTouch = detectDevice();
  const [sideBar, setSideBar] = useState<boolean>(!isTouch);

  return (
    <SideBarContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarContext;
