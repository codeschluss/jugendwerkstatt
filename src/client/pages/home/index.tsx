import { Navigate } from "react-router-dom";
import { UserRoleEnum } from "../../../interfaces";
import { UserLayout } from "../../../shared/components/UserLayout";
import { useAuthStore } from "../../../store";
import DefaultHome from "../../components/home/defaultHome";
import Homepage from "../../components/home/Homepage";

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();

  const { ADMIN, BETREUER } = UserRoleEnum;

  const hasAccess = user?.roles.some((role) =>
    [ADMIN, BETREUER].includes(role as UserRoleEnum)
  );

  if (isAuthenticated && hasAccess) {
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
