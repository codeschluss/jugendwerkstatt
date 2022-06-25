import { Feedback } from "@mui/icons-material";
import { FC, useContext } from "react";

import Modal from "../../client/components/modals/courseReviewPopUp";
import SideBarContext from "../../contexts/SideBarContext";
import { useAuthStore } from "../../store";
import Header from "./header";

export const UserLayout: FC = ({ children }) => {
  const { sideBar } = useContext(SideBarContext);
  const { isAuthenticated } = useAuthStore();

  return (
    <main
      className={`flex flex-col  min-h-screen transition-all duration-500 ${
        sideBar && isAuthenticated ? "md:pl-60" : "md:pl-20"
      }`}
    >
      <Feedback />
      {isAuthenticated && <Header />}
      <div className="md:p-12">
        <Modal visible={false} course={"Holz 1"} />
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};
