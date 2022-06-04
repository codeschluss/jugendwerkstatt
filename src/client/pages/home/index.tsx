import Homepage from '../../components/home/Homepage';
import DefaultHome from '../../components/home/defaultHome';
import { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';

const Home = () => {
  const { isLogedIn } = useContext(AuthContext);
  return isLogedIn ? <Homepage /> : <DefaultHome />;
};

export default Home;
