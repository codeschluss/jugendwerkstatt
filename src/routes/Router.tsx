import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "../components/authentication/forgotPassword";
import Email from "../components/authentication/forgotPassword/Email";
import Password from "../components/authentication/forgotPassword/Password";
import Login from "../components/authentication/login";
import { Feedback } from "../components/Feedback/Feedback";
import Calls from "../components/messenger/overview/calls";
import Chats from "../components/messenger/overview/chats";
import Contacts from "../components/messenger/overview/contacts";
import RegisteredSuccessfully from "../components/register/success/registeredSuccessfully";
import Layout from "../containers/Layout";
import EmailVerification from "../pages/emailVerification";
import EmailVerified from "../pages/emailVerified";
import Forms from "../pages/forms";
import Templates from "../pages/forms/Templates";
import TemplateEdit from "../pages/forms/TemplateEdit";
import Map from "../components/map";
import EventDetail from "../pages/eventDetail";
import Home from "../pages/home";
import MediaLibrary from "../pages/mediaLibrary";
import EventsCalendar from "../pages/eventsCalendar";
import EventsTime from "../pages/eventsTime";
import Overview from "../pages/messenger";
import Chat from "../pages/messenger/Chat";
import Register from "../pages/register";
import TemplateView from "../pages/forms/TemplateView";
import JobDetails from "../components/singleJobAdd";
import Favorites from "../pages/favorites";
import Events from "../pages/events";
import Jobs from "../pages/jobs";
import PushNotificationsContainer from "../pages/capacitor";
import ProfileSettings from "../pages/Profile/ProfileSettings";
import PersonalData from "../pages/Profile/PersonalData";
import EmailVerificationOne from "../components/emailVerification";
import ToVerifyUser from "../pages/verify/ToVerifyUser";
import AlreadyVerifiedUser from "../pages/verify/AlreadyVerifiedUser";
import ReVerifyUser from "../pages/verify/ReVerifyUser";
import ChangePassword from "../pages/Profile/ChangePassword";
import Protected from "../pages/Protected";
import UploadData from "../pages/forms/UploadData";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/verification/:id"
            element={<RegisteredSuccessfully />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />}>
            <Route path="email" element={<Email />} />
            <Route path="password/:id" element={<Password />} />
          </Route>
          <Route
            path="/messenger"
            element={
              <Protected>
                <PushNotificationsContainer />
              </Protected>
            }
          >
            <Route
              path="chats"
              element={
                <Protected>
                  <Chats />
                </Protected>
              }
            />
            <Route
              path="calls"
              element={
                <Protected>
                  <Calls />
                </Protected>
              }
            />
            <Route
              path="contacts"
              element={
                <Protected>
                  <Contacts />
                </Protected>
              }
            />
          </Route>
          <Route
            path="/messenger/chat/:id"
            element={
              <Protected>
                <Chat />
              </Protected>
            }
          />
          <Route
            path="/event/:id"
            element={
              <Protected>
                <EventDetail />
              </Protected>
            }
          />
          <Route
            path="/job-ad/:id"
            element={
              <Protected>
                <JobDetails />
              </Protected>
            }
          />

          <Route
            path="/favorites"
            element={
              <Protected>
                <Favorites />
              </Protected>
            }
          />
          <Route
            path="/events"
            element={
              <Protected>
                <Events />
              </Protected>
            }
          />
          <Route
            path="/jobs"
            element={
              <Protected>
                <Jobs />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <ProfileSettings />
              </Protected>
            }
          />
          <Route
            path="/profile-personal"
            element={
              <Protected>
                <PersonalData />
              </Protected>
            }
          />
          <Route
            path="/profile-password"
            element={
              <Protected>
                <ChangePassword />
              </Protected>
            }
          />

          <Route path="/Login" element={<Login />} />
          <Route path="/toVerifyEmail" element={<ToVerifyUser />} />
          <Route path="/alreadyVerified" element={<AlreadyVerifiedUser />} />
          <Route path="/reVerifyEmail" element={<ReVerifyUser />} />

          <Route path="/upload-file" element={<UploadData />} />

          <Route
            path="/map"
            element={
              <Protected>
                <Map />
              </Protected>
            }
          />
          <Route
            path="/MediaLibrary"
            element={
              <Protected>
                <MediaLibrary />
              </Protected>
            }
          />
          <Route
            path="/EventsCalendar"
            element={
              <Protected>
                <EventsCalendar />
              </Protected>
            }
          />
          <Route
            path="/EventsTime"
            element={
              <Protected>
                <EventsTime />
              </Protected>
            }
          />
          <Route
            path="/Forms"
            element={
              <Protected>
                <Forms />
              </Protected>
            }
          />
          <Route
            path="/Forms/Templates"
            element={
              <Protected>
                <Templates />
              </Protected>
            }
          />
          <Route
            path="/Forms/Templates/:id"
            element={
              <Protected>
                <TemplateView />
              </Protected>
            }
          />
          <Route
            path="/Forms/Templates/Edit/:id"
            element={
              <Protected>
                <TemplateEdit />
              </Protected>
            }
          />

          <Route
            path="/feedback"
            element={
              <Protected>
                <Feedback />
              </Protected>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
