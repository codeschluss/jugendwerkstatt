import { Route, Routes } from 'react-router-dom';
import Feedback from '../client/components/Feedback';
import Map from '../client/components/map';
import Calls from '../client/components/messenger/overview/calls';
import Chats from '../client/components/messenger/overview/chats';
import Contacts from '../client/components/messenger/overview/contacts';
import RegisteredSuccessfully from '../client/components/register/success/registeredSuccessfully';
import JobDetails from '../client/components/singleJobAdd';
import LoginPage from '../client/pages/authentication/LoginPage';
import RegisterPage from '../client/pages/authentication/Register';
import EventDetail from '../client/pages/eventDetail';
import Events from '../client/pages/events';
import EventsCalendar from '../client/pages/eventsCalendar';
import EventsTime from '../client/pages/eventsTime';
import Favorites from '../client/pages/favorites';
import Forms from '../client/pages/forms';
import TemplateEdit from '../client/pages/forms/TemplateEdit';
import Templates from '../client/pages/forms/Templates';
import TemplateView from '../client/pages/forms/TemplateView';
import UploadData from '../client/pages/forms/UploadData';
import Jobs from '../client/pages/jobs';
import MediaLibrary from '../client/pages/mediaLibrary';
import Messenger from '../client/pages/messenger';
import Chat from '../client/pages/messenger/Chat';
import ChangePassword from '../client/pages/Profile/ChangePassword';
import PersonalData from '../client/pages/Profile/PersonalData';
import ProfileImageUpload from '../client/pages/Profile/ProfileImageUpload';
import ProfileSettings from '../client/pages/Profile/ProfileSettings';
import Protected from '../client/pages/Protected';
import AlreadyVerifiedUser from '../client/pages/verify/AlreadyVerifiedUser';
import ApprovalPending from '../client/pages/verify/ApprovalPending';
import ReVerifyUser from '../client/pages/verify/ReVerifyUser';
import ToVerifyUser from '../client/pages/verify/ToVerifyUser';
import ForgotPassword from '../shared/components/authentication/forgotPassword';
import Email from '../shared/components/authentication/forgotPassword/Email';
import Password from '../shared/components/authentication/forgotPassword/Password';

export const UserRoutes = () => (
  <>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verification/:id" element={<RegisteredSuccessfully />} />
      <Route path="/forgot-password" element={<ForgotPassword />}>
        <Route path="email" element={<Email />} />
        <Route path="password/:id" element={<Password />} />
      </Route>
      <Route
        path="messenger"
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
        <Route
          path="chat/:id"
          element={
            <Protected>
              <Chat />
            </Protected>
          }
        />
      </Route>

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
  </>
);
