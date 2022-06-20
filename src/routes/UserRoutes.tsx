import { Route, Routes } from "react-router-dom";
import Calls from "../client/components/messenger/overview/calls";
import Chats from "../client/components/messenger/overview/chats";
import Contacts from "../client/components/messenger/overview/contacts";
import Layout from "../containers/Layout";
import Forms from "../client/pages/forms";
import Templates from "../client/pages/forms/Templates";
import TemplateEdit from "../client/pages/forms/TemplateEdit";
import Map from "../client/components/map";
import EventDetail from "../client/pages/eventDetail";
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
import ChangePassword from "../client/pages/Profile/ChangePassword";
import UploadData from "../client/pages/forms/UploadData";
import ProfileImageUpload from "../client/pages/Profile/ProfileImageUpload";
import Homepage from "../client/components/home/Homepage";
import { RequireAuthRoute } from "../shared/components/RequireAuthRoute/RequireAuthRoute";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<RequireAuthRoute />}>
        <Route path="/" element={<Layout />}>
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

          <Route path="*" element={<h1>Page not found!</h1>} />
        </Route>
      </Route>
    </Routes>
  );
};
