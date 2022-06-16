import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
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
import Protected from "../client/pages/Protected";
import UploadData from "../client/pages/forms/UploadData";
import Feedback from "../client/components/Feedback";
import ProfileImageUpload from "../client/pages/Profile/ProfileImageUpload";
import LoginPage from "../client/pages/authentication/LoginPage";
import RegisterPage from "../client/pages/authentication/Register";
import Messenger from "../client/pages/messenger";
import ApprovalPending from "../client/pages/verify/ApprovalPending";
import { Switch } from "../admin/components/atoms";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
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
                <Messenger />
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
          <Route
            path="/profile-upload-picture"
            element={
              <Protected>
                <ProfileImageUpload />
              </Protected>
            }
          />

          <Route path="/Login" element={<LoginPage />} />
          <Route path="/toVerifyEmail" element={<ToVerifyUser />} />
          <Route path="/alreadyVerified" element={<AlreadyVerifiedUser />} />
          <Route path="/reVerifyEmail" element={<ReVerifyUser />} />
          <Route path="/pending-approval" element={<ApprovalPending />} />

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

          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
