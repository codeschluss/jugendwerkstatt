import jwtDecode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../client/components/footer";
import Header from "../shared/components/header";
import Loader from "../shared/components/ui/Loader";
import AuthContext from "../contexts/AuthContext";
import {
  useGetMeBasicQuery,
  useGetUserQuery,
  useRefreshTokenMutation,
} from "../GraphQl/graphql";
import Modal from "../client/components/modals/courseReviewPopUp";
import SideBarContext from "../contexts/SideBarContext";

const Layout: React.FC = ({ children }) => {
  const [accessT, setAccessT] = useState();
  const [refreshT, setRefreshT] = useState();
  const { sideBar } = useContext(SideBarContext);

  const { setIsLogedIn, isLogedIn } = useContext(AuthContext);

  const result = useGetMeBasicQuery({
    skip: !accessT ? true : false,
  });

  useEffect(() => {
    if (accessT) {
      result.refetch();
    }
  }, [accessT]);

  useEffect(() => {
    if (result.data) {
      setIsLogedIn(true);
    }
  }, [result.data]);

  const [refreshTokenMutation, { data, loading, error }] =
    useRefreshTokenMutation();
  if (data) {
    localStorage.setItem("accessToken", data?.refreshToken?.access || "");
    localStorage.setItem("refreshToken", data?.refreshToken?.refresh || "");
  }

  const checkToken = () => {
    if (!localStorage.getItem("accessToken")) {
      return;
    } else {
      const aToken: any = jwtDecode(localStorage.getItem("accessToken") || "");
      const rToken: any = jwtDecode(localStorage.getItem("refreshToken") || "");
      const accessToken: number | any = aToken.exp * 1000;
      const refreshToken: number | any = rToken.exp * 1000;
      if (Date.now() < accessToken) {
        setAccessT(aToken.id);

        return;
      } else {
        if (Date.now() < refreshToken) {
          refreshTokenMutation({
            variables: {
              refreshToken: localStorage.getItem("refreshToken") || "",
            },
          });
          return;
        } else {
          return;
        }
      }
    }
  };

  useEffect(() => {
    checkToken();
  }, [localStorage.getItem("accessToken")]);

  return (
    <main
      className={`flex flex-col  min-h-screen transition-all duration-500 ${
        sideBar ? "md:pl-60" : "md:pl-20"
      }`}
    >
      {isLogedIn && <Header />}

      <div className="md:p-12">
        <Modal visible={false} course={"Holz 1"}></Modal>
        {result.loading ? (
          <Loader />
        ) : (
          <div>
            {" "}
            <Outlet />{" "}
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
