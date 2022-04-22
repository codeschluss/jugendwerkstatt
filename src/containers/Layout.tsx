import jwtDecode from "jwt-decode";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import AuthContext from "../contexts/AuthContext";
import { useRefreshTokenMutation } from "../GraphQl/graphql";

const Layout: React.FC = ({ children }) => {
  const { setIsLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken") || "";
  const refreshToken = localStorage.getItem("refreshToken") || "";
  const atoken: any = jwtDecode(accessToken);
  const rtoken: any = jwtDecode(refreshToken);
  const accessTokenTime = atoken.exp * 1000;
  const refreshTokenTime = rtoken.exp * 1000;

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
    if (Date.now() > accessTokenTime) {
      setIsLogedIn(true);
      //goEvents
      return;
    } else if (Date.now() < refreshTokenTime) {
      refreshTokenMutation();
      return;
    } else {
      navigate("/login");
    }
  };

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
      <Footer />
    </main>
  );
};

export default Layout;
