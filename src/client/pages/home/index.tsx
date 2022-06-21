import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import DefaultHome from '../../components/home/defaultHome';
import Homepage from '../../components/home/Homepage';

const Home = () => {
  const { isLogedIn } = useContext(AuthContext);
  let page;
  if (isLogedIn) page = <Homepage />;
  else page = <DefaultHome />;
  return page;
};

export default Home;
