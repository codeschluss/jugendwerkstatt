import { Navigate } from "react-router-dom";
import { UserRoleEnum } from "../../../interfaces";
import { UserLayout } from "../../../shared/components/UserLayout";
import { useAuthStore } from "../../../store";
import Homepage from "../../components/home/Homepage";

const Home = () => {
  const { isAuthenticated, user } = useAuthStore();

  const { ADMIN, SUPERVISOR } = UserRoleEnum;

  const hasAccess = user?.roles.some((role) =>
    [ADMIN, SUPERVISOR].includes(role as UserRoleEnum)
  );

  if (isAuthenticated && hasAccess) {
    return <Navigate to={{ pathname: "/admin" }} />;
  }

  return (
    <UserLayout>
      <Homepage />
    </UserLayout>
  );
};

export default Home;
