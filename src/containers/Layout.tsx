import { useContext, useEffect } from "react";
import Modal from "../client/components/modals/courseReviewPopUp";
import AuthContext from "../contexts/AuthContext";
import SideBarContext from "../contexts/SideBarContext";
import useAuth from "../hooks/useAuth";
import Header from "../shared/components/header";

const Layout: React.FC = ({ children }) => {
  const { sideBar } = useContext(SideBarContext);
  const { isLogedIn } = useContext(AuthContext);

  const { init } = useAuth();
  useEffect(() => {
    init();
  }, []); 

  return (
    <main
      className={`flex flex-col  min-h-screen transition-all duration-500 ${
        sideBar && isLogedIn ? "md:pl-60" : "md:pl-20"
      }`}
    >
      {isLogedIn && <Header />}

      <div className="md:p-12">
        <Modal visible={false} course={"Holz 1"}></Modal>
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
