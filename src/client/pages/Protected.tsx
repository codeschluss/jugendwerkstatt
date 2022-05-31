import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Protected: React.FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const { isLogedIn } = useContext(AuthContext);

  if (!isLogedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
