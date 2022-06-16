import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Protected: React.FC<{
  children: any;
}> = ({ children }) => {
  // if (!isLogedIn) {
  //   return <Navigate to="/" replace />;
  // }
  return children;
};
export default Protected;
