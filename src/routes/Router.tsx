import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../client/pages/authentication/LoginPage';
import Home from '../client/pages/home';
import Layout from '../containers/Layout';
import AuthContext from '../contexts/AuthContext';
import { If } from '../shared/components/If/If';
import { AdminRoutes } from './AdminRoutes';
import { UserRoutes } from './UserRoutes';

enum UserRole {
  ADMIN = 'Admin',
  STUDENT = 'Student',
}

const Router = () => {
  // get user role
  const { userRole } = useContext(AuthContext);

  // if role is admin disply

  const user =
    localStorage.getItem('accessToken') &&
    JSON.parse(atob(localStorage.getItem('accessToken')?.split('.')[1] || ''));

  console.log(user, user === UserRole.ADMIN);
    
  return (
    <BrowserRouter>

      {/* <AdminRoutes /> */}
      <If condition={user?.roles[0] === UserRole.STUDENT}>
        <Layout>
          <UserRoutes />
        </Layout>
      </If>

      <If condition={user?.roles[0] === UserRole.ADMIN}>
        <AdminRoutes />
      </If>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
