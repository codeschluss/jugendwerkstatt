import jwtDecode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Loader from "../components/ui/Loader";
import AuthContext from "../contexts/AuthContext";
import {
  useGetEventsQuery,
  useGetUserQuery,
  useRefreshTokenMutation,
} from "../GraphQl/graphql";
import Modal from "../components/modals/courseReviewPopUp";
import SideBarContext from "../contexts/SideBarContext";

const Layout: React.FC = ({ children }) => {
  const [accessT, setAccessT] = useState();
  const [refreshT, setRefreshT] = useState();
  const { sideBar } = useContext(SideBarContext);

  const { setIsLogedIn, setTheUser } = useContext(AuthContext);

  const result = useGetUserQuery({
    skip: !accessT ? true : false,
    variables: {
      entity: {
        id: accessT,
      },
    },
  });

  useEffect(() => {
    result.refetch();
  }, [accessT]);

  useEffect(() => {
    if (result.data) {
      setTheUser(result.data.getUser);
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
      className={`flex flex-col justify-between min-h-screen transition-all duration-500 ${
        sideBar ? "md:pl-60" : ""
      }`}
    >
      <Header />
      <div className="md:p-12">
        <Modal visible={false} course={"Holz 1"}></Modal>
        {result.loading ? <Loader /> : <div>{children}</div>}
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
