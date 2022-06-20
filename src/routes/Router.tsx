import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../shared/components/authentication/forgotPassword';
import Email from '../shared/components/authentication/forgotPassword/Email';
import Password from '../shared/components/authentication/forgotPassword/Password';
import Calls from '../client/components/messenger/overview/calls';
import Chats from '../client/components/messenger/overview/chats';
import Contacts from '../client/components/messenger/overview/contacts';
import RegisteredSuccessfully from '../client/components/register/success/registeredSuccessfully';
import Layout from '../containers/Layout';
import Forms from '../client/pages/forms';
import Templates from '../client/pages/forms/Templates';
import TemplateEdit from '../client/pages/forms/TemplateEdit';
import Map from '../client/components/map';
import EventDetail from '../client/pages/eventDetail';
import Home from '../client/pages/home';
import MediaLibrary from '../client/pages/mediaLibrary';
import EventsCalendar from '../client/pages/eventsCalendar';
import EventsTime from '../client/pages/eventsTime';
import Chat from '../client/pages/messenger/Chat';
import TemplateView from '../client/pages/forms/TemplateView';
import JobDetails from '../client/components/singleJobAdd';
import Favorites from '../client/pages/favorites';
import Events from '../client/pages/events';
import Jobs from '../client/pages/jobs';
import PushNotificationsContainer from '../client/pages/capacitor';
import ProfileSettings from '../client/pages/Profile/ProfileSettings';
import PersonalData from '../client/pages/Profile/PersonalData';
import ToVerifyUser from '../client/pages/verify/ToVerifyUser';
import AlreadyVerifiedUser from '../client/pages/verify/AlreadyVerifiedUser';
import ReVerifyUser from '../client/pages/verify/ReVerifyUser';
import ChangePassword from '../client/pages/Profile/ChangePassword';
import Protected from '../client/pages/Protected';
import UploadData from '../client/pages/forms/UploadData';
import Feedback from '../client/components/Feedback';
import ProfileImageUpload from '../client/pages/Profile/ProfileImageUpload';
import LoginPage from '../client/pages/authentication/LoginPage';
import RegisterPage from '../client/pages/authentication/Register';
import Messenger from '../client/pages/messenger';
import ApprovalPending from '../client/pages/verify/ApprovalPending';
import { Switch } from '../admin/components/atoms';
import { UserRoutes } from './UserRoutes';
import { AdminRoutes } from './AdminRoutes';
import AuthContext from '../contexts/AuthContext';
import { If } from '../shared/components/If/If';
import useAuth from '../hooks/useAuth';

enum UserRole {
  ADMIN = 'Admin',
  STUDENT = 'Student',
}

const Router = () => {
  // get user role
  const { userRole } = useContext(AuthContext);

  // if role is admin disply

  console.log(userRole, userRole === UserRole.ADMIN);
  const user =
    localStorage.getItem('accessToken') &&
    JSON.parse(atob(localStorage.getItem('accessToken')?.split('.')[1] || ''));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
      </Routes>

      {/* <AdminRoutes /> */}
      <If condition={user?.roles[0] === UserRole.STUDENT}>
        <Layout>
          <UserRoutes />
        </Layout>
      </If>

      <If condition={user?.roles[0] === UserRole.ADMIN}>
        <AdminRoutes />
      </If>
    </BrowserRouter>
  );
};

export default Router;
