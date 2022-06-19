import Homepage from "../../components/home/Homepage";
import DefaultHome from "../../components/home/defaultHome";
import { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";

const Home = () => {
  const { isLogedIn } = useContext(AuthContext);
  let page;
  if (isLogedIn) page = <Homepage />;
  else if (isLogedIn === undefined) page = null;
  else page = <DefaultHome />;
  return page;
};

export default Home;
