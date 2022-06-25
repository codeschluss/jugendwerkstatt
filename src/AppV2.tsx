import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth-v2";
import { RequireAuthRoute, RequireNonAuthRoute } from "./shared/components";

// pages
import Map from "./client/components/map";
import Calls from "./client/components/messenger/overview/calls";
import Chats from "./client/components/messenger/overview/chats";
import Contacts from "./client/components/messenger/overview/contacts";
import RegisteredSuccessfully from "./client/components/register/success/registeredSuccessfully";
import JobDetails from "./client/components/singleJobAdd";
import LoginPage from "./client/pages/authentication/LoginPage";
import RegisterPage from "./client/pages/authentication/Register";
import EventDetail from "./client/pages/eventDetail";
import Events from "./client/pages/events";
import EventsCalendar from "./client/pages/eventsCalendar";
import EventsTime from "./client/pages/eventsTime";
import Favorites from "./client/pages/favorites";
import Forms from "./client/pages/forms";
import TemplateEdit from "./client/pages/forms/TemplateEdit";
import Templates from "./client/pages/forms/Templates";
import TemplateView from "./client/pages/forms/TemplateView";
import UploadData from "./client/pages/forms/UploadData";
import Jobs from "./client/pages/jobs";
import MediaLibrary from "./client/pages/mediaLibrary";
import Messenger from "./client/pages/messenger";
import Chat from "./client/pages/messenger/Chat";
import ChangePassword from "./client/pages/Profile/ChangePassword";
import PersonalData from "./client/pages/Profile/PersonalData";
import ProfileImageUpload from "./client/pages/Profile/ProfileImageUpload";
import ProfileSettings from "./client/pages/Profile/ProfileSettings";
import AlreadyVerifiedUser from "./client/pages/verify/AlreadyVerifiedUser";
import ApprovalPending from "./client/pages/verify/ApprovalPending";
import ReVerifyUser from "./client/pages/verify/ReVerifyUser";
import ToVerifyUser from "./client/pages/verify/ToVerifyUser";
import ForgotPassword from "./shared/components/authentication/forgotPassword";
import Email from "./shared/components/authentication/forgotPassword/Email";
import Password from "./shared/components/authentication/forgotPassword/Password";
import Feedback from "./client/components/Feedback";
import Homepage from "./client/components/home/Homepage";
import DefaultHome from "./client/components/home/defaultHome";

// admin pages
import {
  CategoriesListPage,
  ChatActivationPage,
  CreateCategoriesPage,
  CreateEventsPage,
  CreateFormsCategories,
  CreateFormsPage,
  CreateGroupMembersPage,
  CreateMediaCategoriesPage,
  CreateMediaPage,
  CreateOrganizersPage,
  CreateUserFormsPage,
  CreateVacancyCategoriesPage,
  CreateVacancyCompaniesPage,
  CreateVacancyPage,
  EditGeneralAddressPage,
  EditUserPage,
  EventsListPage,
  FormsCategoriesListPage,
  FormsListPage,
  FormsUserListPage,
  GeneralAddressPage,
  GroupCoursesPage,
  GroupFormPage,
  GroupListPage,
  GroupMembersPage,
  MediaCategoriesListPage,
  MediaListPage,
  OrganizersListPage,
  PublicPagesPage,
  PushMessagesPage,
  UsersListPage,
  UsersRequestsListPage,
  VacancyCategoriesListPage,
  VacancyCompaniesListPage,
  VacancyListPage,
} from "./admin/pages";

import {
  GeneralAddressForm,
  PublicPagesForm,
} from "./admin/components/organisms";

const App = (): ReactElement => {
  const { loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route element={<RequireNonAuthRoute />}>
        <Route path="/" element={<DefaultHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification/:id" element={<RegisteredSuccessfully />} />
        <Route path="/forgot-password" element={<ForgotPassword />}>
          <Route path="email" element={<Email />} />
          <Route path="password/:id" element={<Password />} />
        </Route>
        <Route path="/toVerifyEmail" element={<ToVerifyUser />} />
        <Route path="/alreadyVerified" element={<AlreadyVerifiedUser />} />
        <Route path="/reVerifyEmail" element={<ReVerifyUser />} />
        <Route path="/pending-approval" element={<ApprovalPending />} />
      </Route>

      <Route element={<RequireAuthRoute accessRole="student" />}>
        <Route path="/">
          <Route index element={<Homepage />} />

          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/profile-personal" element={<PersonalData />} />
          <Route path="/profile-password" element={<ChangePassword />} />
          <Route
            path="/profile-upload-picture"
            element={<ProfileImageUpload />}
          />

          <Route path="/job-ad/:id" element={<JobDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/jobs" element={<Jobs />} />

          <Route path="messenger">
            <Route index element={<Messenger />} />
            <Route path="chats" element={<Chats />} />
            <Route path="calls" element={<Calls />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="chat/:id" element={<Chat />} />
          </Route>

          <Route path="/upload-file" element={<UploadData />} />

          <Route path="/map" element={<Map />} />
          <Route path="/media-library" element={<MediaLibrary />} />
          <Route path="/feedback" element={<Feedback />} />

          <Route path="/event/:id" element={<EventDetail />} />

          <Route path="/events">
            <Route index element={<Events />} />
            <Route path=":id" element={<EventDetail />} />
            <Route path="time" element={<EventsTime />} />
            <Route path="calendar" element={<EventsCalendar />} />
          </Route>

          <Route path="/forms">
            <Route index element={<Forms />} />
            <Route path="templates" element={<Templates />} />
            <Route path="templates/:id" element={<TemplateView />} />
            <Route path="templates/edit/:id" element={<TemplateEdit />} />
          </Route>
        </Route>
      </Route>

      <Route element={<RequireAuthRoute accessRole="admin" />}>
        <Route path="admin">
          <Route index element={<EventsListPage />} />

          <Route path="events">
            <Route index element={<EventsListPage />} />
            <Route path=":id" element={<CreateEventsPage />} />
            <Route path="new" element={<CreateEventsPage />} />

            <Route path="organizers">
              <Route index element={<OrganizersListPage />} />
              <Route path=":id" element={<CreateOrganizersPage />} />
              <Route path="new" element={<CreateOrganizersPage />} />
            </Route>
            <Route path="categories">
              <Route index element={<CategoriesListPage />} />
              <Route path=":id" element={<CreateCategoriesPage />} />
              <Route path="new" element={<CreateCategoriesPage />} />
            </Route>
          </Route>

          <Route path="job-announcements">
            <Route index element={<VacancyListPage />} />
            <Route path="new" element={<CreateVacancyPage />} />
            <Route path=":id" element={<CreateVacancyPage />} />

            <Route path="categories">
              <Route index element={<VacancyCategoriesListPage />} />
              <Route path="new" element={<CreateVacancyCategoriesPage />} />
              <Route path=":id" element={<CreateVacancyCategoriesPage />} />
            </Route>
            <Route path="companies">
              <Route index element={<VacancyCompaniesListPage />} />
              <Route path="new" element={<CreateVacancyCompaniesPage />} />
              <Route path=":id" element={<CreateVacancyCompaniesPage />} />
            </Route>
          </Route>

          <Route path="medias">
            <Route index element={<MediaListPage />} />
            <Route path="new" element={<CreateMediaPage />} />
            <Route path=":id" element={<CreateMediaPage />} />

            <Route path="categories">
              <Route index element={<MediaCategoriesListPage />} />
              <Route path="new" element={<CreateMediaCategoriesPage />} />
              <Route path=":id" element={<CreateMediaCategoriesPage />} />
            </Route>
          </Route>

          <Route path="users">
            <Route index element={<UsersListPage />} />
            <Route path="requests" element={<UsersRequestsListPage />} />
            <Route path=":id" element={<EditUserPage />} />
          </Route>

          <Route path="forms">
            <Route path="templates">
              <Route index element={<FormsListPage />} />
              <Route path="new" element={<CreateFormsPage />} />
              <Route path=":id" element={<CreateFormsPage />} />
            </Route>

            <Route path="user-templates">
              <Route index element={<FormsUserListPage />} />
              <Route path="new" element={<CreateUserFormsPage />} />
              <Route path=":id" element={<CreateUserFormsPage />} />
            </Route>

            <Route path="categories">
              <Route index element={<FormsCategoriesListPage />} />
              <Route path="new" element={<CreateFormsCategories />} />
              <Route path=":id" element={<CreateFormsCategories />} />
            </Route>
          </Route>

          <Route path="groups">
            <Route index element={<GroupListPage />} />
            <Route path="new" element={<GroupFormPage />} />
            <Route path=":id/courses" element={<GroupCoursesPage />} />
            <Route path=":id/members" element={<GroupMembersPage />} />
            <Route
              path=":id/members/new"
              element={<CreateGroupMembersPage />}
            />
          </Route>

          <Route path="general-settings">
            <Route index element={<PublicPagesPage />} />
            <Route path="public-pages" element={<PublicPagesPage />} />
            <Route path="push-messages" element={<PushMessagesPage />} />
            <Route path="public-pages/new" element={<PublicPagesForm />} />
            <Route path="chat-activation" element={<ChatActivationPage />} />

            <Route path="addresses">
              <Route index element={<GeneralAddressPage />} />
              <Route path=":id" element={<EditGeneralAddressPage />} />
              <Route path="new" element={<GeneralAddressForm />} />
            </Route>
          </Route>
        </Route>

        <Route
          path="/admin"
          element={<Navigate to={{ pathname: "/admin/events" }} />}
        />
      </Route>

      <Route
        path="/*"
        element={
          <div className="flex items-center justify-center h-screen">
            <h2>Nothing was found!</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
