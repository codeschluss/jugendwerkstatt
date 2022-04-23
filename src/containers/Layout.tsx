import jwtDecode from "jwt-decode";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import AuthContext from "../contexts/AuthContext";
import {
  useGetEventsQuery,
  useGetUserQuery,
  useRefreshTokenMutation,
} from "../GraphQl/graphql";

const Layout: React.FC = ({ children }) => {
  const [skip, setSkip] = useState(true);
  const { setIsLogedIn, setTheUser } = useContext(AuthContext);
  const navigate = useNavigate();

  let accessToken;
  let refreshToken: any;
  let atoken: any;
  let rtoken: any;
  let accessTokenTime: any;
  let refreshTokenTime: any;

  if (
    localStorage.getItem("accessToken") &&
    localStorage.getItem("refreshToken")
  ) {
    accessToken = localStorage.getItem("accessToken") || "";
    refreshToken = localStorage.getItem("refreshToken") || "";
    atoken = jwtDecode(accessToken);
    rtoken = jwtDecode(refreshToken);
    accessTokenTime = atoken.exp * 1000;
    refreshTokenTime = rtoken.exp * 1000;
  }
  const [refreshTokenMutation, { data, loading, error }] =
    useRefreshTokenMutation({
      variables: {
        refreshToken: refreshToken,
      },
    });

  if (data) {
    localStorage.setItem("accessToken", data.refreshToken?.access || "");
    localStorage.setItem("refreshToken", data.refreshToken?.refresh || "");
    setIsLogedIn(true);
  }

  const checkDate = () => {
    if (
      !localStorage.getItem("accessToken") &&
      !localStorage.getItem("refreshToken")
    ) {
      setIsLogedIn(false);
      return;
    } else if (Date.now() > accessTokenTime) {
      setIsLogedIn(true);
      //Eventslog

      return;
    } else if (Date.now() > refreshTokenTime) {
      refreshTokenMutation();
    }
  };
  useEffect(() => {
    if (atoken?.id) {
      setSkip(false);
    }
  }, [atoken]);

  const result = useGetUserQuery({
    skip: !atoken ? true : false,
    variables: {
      entity: {
        id: atoken?.id,
      },
    },
  });

  useEffect(() => {
    if (result) {
      setTheUser(result.data?.getUser);
    }
  }, [result]);

  useEffect(() => {
    checkDate();
  }, []);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      checkDate();
    }, 2000);

    return () => clearInterval(intervalTimer);
  }, []);

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
