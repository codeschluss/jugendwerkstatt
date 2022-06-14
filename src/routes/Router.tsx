import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  GeneralAddressForm,
  PublicPagesForm,
} from "../admin/components/organisms";
import { AdminDashboardLayout } from "../admin/components/templates";
import {
  AdminProfilePage,
  AdminProfilePasswordPage,
  EventsListPage,
  CreateEventsPage,
  OrganizersListPage,
  CreateOrganizersPage,
  CategoriesListPage,
  CreateCategoriesPage,
  VacancyListPage,
  CreateVacancyPage,
  VacancyCategoriesListPage,
  CreateVacancyCategoriesPage,
  VacancyCompaniesListPage,
  CreateVacancyCompaniesPage,
  MediaListPage,
  CreateMediaPage,
  MediaCategoriesListPage,
  CreateMediaCategoriesPage,
  UsersListPage,
  UsersRequestsListPage,
  EditUserPage,
  CreateFormsPage,
  FormsUserListPage,
  FormsListPage,
  GroupListPage,
  CreateGroupPage,
  EditGroupPage,
  GroupParticipantsListPage,
  PushNotificationsPage,
  ChatActivationPage,
  GeneralAddressPage,
  PublicPagesPage,
  EvaluationsPage,
  EvaluationsQuestionsPage,
  GroupCourseRatingsListPage,
  FormsCategoriesListPage,
  CreateFormsCategories,
} from "../admin/pages";
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
import Homepage from "../client/components/home/Homepage";
import DefaultHome from "../client/components/home/defaultHome";
import { RequireAuthRoute } from "../shared/components/RequireAuthRoute/RequireAuthRoute";
import { RequireNonAuthRoute } from "../shared/components/RequireAuthRoute/RequireNonAuthRoute";
import useAuth from "../hooks/useAuth";
import { RequireAuthAdmin } from "../shared/components/RequireAuthRoute/RequireAuthAdmin";

export const Router = () => {
  const { init } = useAuth();

  useEffect(() => {
    init();
  }, []);

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
      </Route>

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

          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Route>
      </Route>

      <Route element={<RequireAuthAdmin />}>
        <Route path="/admin" element={<AdminDashboardLayout />}>
          <Route path="profile" element={<AdminProfilePage />} />
          <Route
            path="profile-password"
            element={<AdminProfilePasswordPage />}
          />

          <Route path="events" element={<EventsListPage />} />
          <Route path="events/new" element={<CreateEventsPage />} />
          <Route path="events/:id" element={<CreateEventsPage />} />
          <Route path="events/organizers" element={<OrganizersListPage />} />
          <Route
            path="events/organizers/new"
            element={<CreateOrganizersPage />}
          />
          <Route
            path="events/organizers/:id"
            element={<CreateOrganizersPage />}
          />
          <Route path="events/categories" element={<CategoriesListPage />} />
          <Route
            path="events/categories/new"
            element={<CreateCategoriesPage />}
          />
          <Route
            path="events/categories/:id"
            element={<CreateCategoriesPage />}
          />
          <Route path="job-announcements" element={<VacancyListPage />} />
          <Route path="job-announcements/new" element={<CreateVacancyPage />} />
          <Route path="job-announcements/:id" element={<CreateVacancyPage />} />
          <Route
            path="job-announcements/categories"
            element={<VacancyCategoriesListPage />}
          />
          <Route
            path="job-announcements/categories/new"
            element={<CreateVacancyCategoriesPage />}
          />
          <Route
            path="job-announcements/categories/:id"
            element={<CreateVacancyCategoriesPage />}
          />
          <Route
            path="job-announcements/companies"
            element={<VacancyCompaniesListPage />}
          />
          <Route
            path="job-announcements/companies/new"
            element={<CreateVacancyCompaniesPage />}
          />
          <Route
            path="job-announcements/companies/:id"
            element={<CreateVacancyCompaniesPage />}
          />
          <Route path="medias" element={<MediaListPage />} />
          <Route path="medias/new" element={<CreateMediaPage />} />
          <Route path="medias/:id" element={<CreateMediaPage />} />
          <Route
            path="medias/categories"
            element={<MediaCategoriesListPage />}
          />
          <Route
            path="medias/categories/new"
            element={<CreateMediaCategoriesPage />}
          />
          <Route
            path="medias/categories/:id"
            element={<CreateMediaCategoriesPage />}
          />
          <Route path="users/requests" element={<UsersRequestsListPage />} />

          <Route path="users" element={<UsersListPage />} />
          <Route path="users/requests" element={<UsersRequestsListPage />} />
          <Route path="users/:id" element={<EditUserPage />} />

          <Route path="forms/templates" element={<FormsListPage />} />
          <Route path="forms/templates/new" element={<CreateFormsPage />} />
          <Route path="forms/templates/:id" element={<CreateFormsPage />} />
          <Route path="forms/user-templates" element={<FormsUserListPage />} />
          <Route
            path="forms/user-templates/new"
            element={<FormsUserListPage />}
          />
          <Route
            path="forms/user-templates/:id"
            element={<FormsUserListPage />}
          />

          <Route
            path="forms/categories"
            element={<FormsCategoriesListPage />}
          />
          <Route
            path="forms/categories/new"
            element={<CreateFormsCategories />}
          />
          <Route
            path="forms/categories/:id"
            element={<CreateFormsCategories />}
          />

          <Route path="evaluations" element={<EvaluationsPage />} />
          <Route
            path="evaluations/questions"
            element={<EvaluationsQuestionsPage />}
          />

          <Route path="groups" element={<GroupListPage />} />
          <Route path="groups/new" element={<CreateGroupPage />} />
          <Route path="groups/:id" element={<EditGroupPage />} />
          <Route
            path="groups/:id/participants"
            element={<GroupParticipantsListPage />}
          />
          <Route
            path="groups/:id/course-rating"
            element={<GroupCourseRatingsListPage />}
          />

          {/* General Settings */}
          <Route path="general-settings">
            <Route
              path="push-notifications"
              element={<PushNotificationsPage />}
            />
            <Route path="chat-activation" element={<ChatActivationPage />} />

            <Route path="address" element={<GeneralAddressPage />} />
            <Route path="address/new" element={<GeneralAddressForm />} />

            <Route path="public-pages" element={<PublicPagesPage />} />
            <Route path="public-pages/new" element={<PublicPagesForm />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>Page Not Found!</h1>} />
      </Route>
    </Routes>
  );
};
