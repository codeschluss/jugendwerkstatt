import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
import AuthContext from "../contexts/AuthContext";
import { AdminRoutes } from "./AdminRoutes";
import { UserRoutes } from "./UserRoutes";
import { RequireAuthRoleRoute } from "../shared/components/RequireAuthRoute/RequireAuthRoleRoute";

export const Router = () => {
  const { init } = useAuth();

  console.log("first");

  useEffect(() => {
    init();
  }, []);

  return <RequireAuthRoleRoute />;
};
