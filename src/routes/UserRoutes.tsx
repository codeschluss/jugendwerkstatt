import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../shared/components/authentication/forgotPassword";
import Email from "../shared/components/authentication/forgotPassword/Email";
import Password from "../shared/components/authentication/forgotPassword/Password";
import Calls from "../client/components/messenger/overview/calls";
import Chats from "../client/components/messenger/overview/chats";
import Contacts from "../client/components/messenger/overview/contacts";
import RegisteredSuccessfully from "../client/components/register/success/registeredSuccessfully";
import Layout from "../containers/Layout";
import Forms from "../client/pages/forms";
import Templates from "../client/pages/forms/Templates";
import TemplateEdit from "../client/pages/forms/TemplateEdit";
import Map from "../client/components/map";
import EventDetail from "../client/pages/eventDetail";
import Home from "../client/pages/home";
import MediaLibrary from "../client/pages/mediaLibrary";
import EventsCalendar from "../client/pages/eventsCalendar";
import EventsTime from "../client/pages/eventsTime";
import Chat from "../client/pages/messenger/Chat";
import TemplateView from "../client/pages/forms/TemplateView";
import JobDetails from "../client/components/singleJobAdd";
import Favorites from "../client/pages/favorites";
import Events from "../client/pages/events";
import Jobs from "../client/pages/jobs";
import PushNotificationsContainer from "../client/pages/capacitor";
import ProfileSettings from "../client/pages/Profile/ProfileSettings";
import PersonalData from "../client/pages/Profile/PersonalData";
import ToVerifyUser from "../client/pages/verify/ToVerifyUser";
import AlreadyVerifiedUser from "../client/pages/verify/AlreadyVerifiedUser";
import ReVerifyUser from "../client/pages/verify/ReVerifyUser";
import ChangePassword from "../client/pages/Profile/ChangePassword";
import UploadData from "../client/pages/forms/UploadData";
import Feedback from "../client/components/Feedback";
import ProfileImageUpload from "../client/pages/Profile/ProfileImageUpload";
import LoginPage from "../client/pages/authentication/LoginPage";
import RegisterPage from "../client/pages/authentication/Register";
import { RequireAuthRoute } from "../shared/components/RequireAuthRoute/RequireAuthRoute";
import { RequireNonAuthRoute } from "../shared/components/RequireAuthRoute/RequireNonAuthRoute";
import Homepage from "../client/components/home/Homepage";
import DefaultHome from "../client/components/home/defaultHome";

export const UserRoutes = (): ReactElement => (
  <Routes>
    <Route element={<RequireNonAuthRoute />}>
      <Route path="/" element={<DefaultHome />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verification/:id" element={<RegisteredSuccessfully />} />
      <Route path="/forgot-password" element={<ForgotPassword />}>
        <Route path="email" element={<Email />} />
        <Route path="password/:id" element={<Password />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/toVerifyEmail" element={<ToVerifyUser />} />
      <Route path="/alreadyVerified" element={<AlreadyVerifiedUser />} />
      <Route path="/reVerifyEmail" element={<ReVerifyUser />} />
    </Route>

    <Route element={<RequireAuthRoute />}>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/messenger" element={<PushNotificationsContainer />}>
          <Route path="chats" element={<Chats />} />
          <Route path="calls" element={<Calls />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="/messenger/chat/:id" element={<Chat />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/job-ad/:id" element={<JobDetails />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/profile-personal" element={<PersonalData />} />
        <Route path="/profile-password" element={<ChangePassword />} />
        <Route
          path="/profile-upload-picture"
          element={<ProfileImageUpload />}
        />

        <Route path="/upload-file" element={<UploadData />} />

        <Route path="/map" element={<Map />} />
        <Route path="/MediaLibrary" element={<MediaLibrary />} />
        <Route path="/EventsCalendar" element={<EventsCalendar />} />
        <Route path="/EventsTime" element={<EventsTime />} />
        <Route path="/Forms" element={<Forms />} />
        <Route path="/Forms/Templates" element={<Templates />} />
        <Route path="/Forms/Templates/:id" element={<TemplateView />} />
        <Route path="/Forms/Templates/Edit/:id" element={<TemplateEdit />} />

        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Route>
    </Route>
  </Routes>
);
