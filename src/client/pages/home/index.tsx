import { Navigate } from "react-router-dom";
import { UserRoleEnum } from "../../../interfaces";
import { useAuthStore } from "../../../store";
import DefaultHome from "../../components/home/defaultHome";
import Homepage from "../../components/home/Homepage";

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.roles.includes(UserRoleEnum.ADMIN)) {
    return <Navigate to={{ pathname: "/admin" }} />;
  }

  return isAuthenticated && user?.roles.includes(UserRoleEnum.STUDENT) ? (
    <Homepage />
  ) : (
    <DefaultHome />
  );
};

export default Home;
