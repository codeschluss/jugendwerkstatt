import { Navigate } from "react-router-dom";
import { UserRoleEnum } from "../../../interfaces";
import { UserLayout } from "../../../shared/components/UserLayout";
import { useAuthStore } from "../../../store";
import DefaultHome from "../../components/home/defaultHome";
import Homepage from "../../components/home/Homepage";

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.roles.includes(UserRoleEnum.ADMIN)) {
    return <Navigate to={{ pathname: "/admin" }} />;
  }

  return isAuthenticated && user?.roles.includes(UserRoleEnum.STUDENT) ? (
    <UserLayout>
      <Homepage />
    </UserLayout>
  ) : (
    <DefaultHome />
  );
};

export default Home;
