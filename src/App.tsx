import { ReactElement, useEffect, useMemo } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
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

// admin pages
import {
    CategoriesListPage,
    ChatActivationPage,
    CourseMembersPage,
    CreateCategoriesPage,
    CreateCourseMembersPage,
    CreateEvaluationAssignmentPage,
    CreateEventsPage,
    CreateFormsCategories,
    CreateFormsPage,
    CreateMediaCategoriesPage,
    CreateMediaPage,
    CreateOrganizersPage,
    CreatePublicPagesPage,
    CreateUserFormsPage,
    CreateVacancyCategoriesPage,
    CreateVacancyCompaniesPage,
    CreateVacancyPage,
    EditGeneralAddressPage,
    EditUserPage,
    EvaluationQuestionFormPage,
    EvaluationQuestionsPage,
    EvaluationQuestionViewPage,
    EvaluationsAssignmentsPage,
    EventsListPage,
    FormsCategoriesListPage,
    FormsListPage,
    FormsUserListPage,
    GeneralAddressPage,
    GroupCourseFormPage,
    GroupCoursesPage,
    GroupFormPage,
    GroupListPage,
    GroupPage,
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

import { GeneralAddressForm } from "./admin/components/organisms";
import GlobalPages from "./client/pages/globalPages";
import Home from "./client/pages/home";
import AddMemberPanel from "./client/pages/messenger/adminPanel/AddMemberPanel";
import ChatAccessRules from "./client/pages/messenger/adminPanel/ChatAccessRules";
import GroupNamePanel from "./client/pages/messenger/adminPanel/GroupNamePanel";
import MainPanel from "./client/pages/messenger/adminPanel/MainPanel";
import { useGetChatSettingsQuery } from "./GraphQl/graphql";
import Notifications from "./shared/components/notifications";
import { RequireAuthAll } from "./shared/components/RequireAuthRoute/RequireAuthAll";
import { useAuthStore } from "./store";

import { Capacitor } from "@capacitor/core";
import {
    ActionPerformed,
    PushNotifications,
    PushNotificationSchema,
    Token,
} from "@capacitor/push-notifications";
import { Toast } from "@capacitor/toast";
import RolePending from "./client/pages/verify/RolePending";
import { useGetMeBasicQuery, useSaveSubscriptionMutation } from "./GraphQl/graphql";

const App = (): ReactElement => {
    const { loading } = useAuth();
    const { isAuthenticated } = useAuthStore();
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable("PushNotifications");
    const chatEnabled = useGetChatSettingsQuery({
        fetchPolicy: "network-only",
        skip: !isAuthenticated,
    });

    const me = useGetMeBasicQuery({
        skip: !isAuthenticated,
    });

    useEffect(() => {
        if (isAuthenticated) {
            chatEnabled.refetch();
            me.refetch();
        }
    }, [isAuthenticated]);

    const [subs] = useSaveSubscriptionMutation();

    useEffect(() => {
        if (isPushNotificationsAvailable && me.data) {
            PushNotifications.checkPermissions().then((res) => {
                if (res.receive !== "granted") {
                    PushNotifications.requestPermissions().then((res) => {
                        if (res.receive === "denied") {
                            showToast("Push Notification permission denied");
                        } else {
                            showToast("Push Notification permission granted");
                            register();
                        }
                    });
                } else {
                    register();
                }
            });
        }
    }, [me.data?.me]);
    const navigate = useNavigate();

    const register = () => {
        PushNotifications.register();

        PushNotifications.addListener("registration", (token: Token) => {
            const entity = {
                deviceToken: token.value,
                user: {
                    id: me.data?.me?.id,
                },
            };
            subs({
                variables: {
                    entity,
                },
            });
        })
            .catch(() => alert("Unnknown error, contact admin"))
            .finally();

        // PushNotifications.addListener("registrationError", (error: any) => {
        //   alert("Error on registration: " + JSON.stringify(error));
        // });

        PushNotifications.addListener(
            "pushNotificationReceived",
            (notification: PushNotificationSchema) => {},
        );
        PushNotifications.addListener(
            "pushNotificationActionPerformed",
            (notification: ActionPerformed) => {
                console.log(notification.notification, " noti");

                switch (notification.notification.data.type) {
                    case "chat":
                        navigate(`messenger/chat/${notification.notification.data?.id}`);
                        break;
                    case "event":
                        navigate(`event/${notification.notification.data?.id}`);
                        break;
                    case undefined:
                        navigate("notifications");
                }
            },
        );
    };

    const showToast = async (msg: string) => {
        await Toast.show({
            text: msg,
        });
    };

    if (loading) return <div>Loading...</div>;

    const chatActive = !!chatEnabled?.data?.getSettings?.chatActive;

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<RequireAuthAll />}>
                <Route path="/profile" element={<ProfileSettings />} />
                <Route path="/profile-personal" element={<PersonalData />} />
                <Route path="/profile-password" element={<ChangePassword />} />
                <Route path="/profile-upload-picture" element={<ProfileImageUpload />} />
                <Route path="/reVerifyEmail" element={<ReVerifyUser />} />
                <Route path="/pendingRole" element={<RolePending />} />
                <Route path="/pending-approval" element={<ApprovalPending />} />
                <Route path="/messenger" element={chatActive && <Messenger />}>
                    <Route path="chats" element={chatActive && <Chats />} />
                    <Route path="calls" element={chatActive && <Calls />} />
                    <Route path="contacts" element={chatActive && <Contacts />} />
                    <Route path="chat/:id" element={chatActive && <Chat />} />
                </Route>
                <Route path="/adminMsnPanel/:id" element={<MainPanel />} />
                <Route path="/groupAddMember/:id" element={<AddMemberPanel />} />
                <Route path="/groupChatNameChange/:id" element={<GroupNamePanel />} />
                <Route path="/groupChatRules/:id" element={<ChatAccessRules />} />{" "}
            </Route>
            <Route path="/verification/:id" element={<RegisteredSuccessfully />} />

            <Route path="/alreadyVerified" element={<AlreadyVerifiedUser />} />
            <Route path="/infoPage/:id" element={<GlobalPages />} />

            <Route element={<RequireNonAuthRoute />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/forgot-password" element={<ForgotPassword />}>
                    <Route path="email" element={<Email />} />
                    <Route path="password/:id" element={<Password />} />
                </Route>
                <Route path="/toVerifyEmail" element={<ToVerifyUser />} />
            </Route>

            <Route element={<RequireAuthRoute accessRole={["student"]} />}>
                <Route path="/job-ad/:id" element={<JobDetails />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/jobs" element={<Jobs />} />

                <Route path="/upload-file" element={<UploadData />} />

                <Route path="/map" element={<Map />} />
                <Route path="/media-library" element={<MediaLibrary />} />

                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/calendar" element={<EventsCalendar />} />

                <Route path="/events">
                    <Route index element={<Events />} />
                    <Route path=":id" element={<EventDetail />} />
                    <Route path="time" element={<EventsTime />} />
                </Route>

                <Route path="/forms">
                    <Route index element={<Forms />} />
                    <Route path="templates" element={<Templates />} />
                    <Route path="templates/:id" element={<TemplateView />} />
                    <Route path="templates/edit/:id" element={<TemplateEdit />} />
                </Route>
            </Route>

            <Route element={<RequireAuthRoute accessRole={["admin", "supervisor", "student"]} />}>
                <Route path="/notifications" element={<Notifications />} />
            </Route>

            <Route element={<RequireAuthRoute accessRole={["admin", "supervisor"]} />}>
                <Route path="/admin/events">
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

                <Route path="/admin/job-announcements">
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

                <Route path="/admin/medias">
                    <Route index element={<MediaListPage />} />
                    <Route path="new" element={<CreateMediaPage />} />
                    <Route path=":id" element={<CreateMediaPage />} />

                    <Route path="categories">
                        <Route index element={<MediaCategoriesListPage />} />
                        <Route path="new" element={<CreateMediaCategoriesPage />} />
                        <Route path=":id" element={<CreateMediaCategoriesPage />} />
                    </Route>
                </Route>

                <Route path="/admin/users">
                    <Route index element={<UsersListPage />} />
                    <Route path="requests" element={<UsersRequestsListPage />} />
                    <Route path=":id" element={<EditUserPage />} />
                </Route>

                <Route path="/admin/forms">
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

                <Route path="/admin/groups">
                    <Route index element={<GroupListPage />} />
                    <Route path=":id/view" element={<GroupPage />} />
                    <Route path="new" element={<GroupFormPage />} />
                    <Route path=":id" element={<GroupFormPage />} />
                    <Route path=":id/courses" element={<GroupCoursesPage />} />
                    <Route path=":id/courses/:courseId" element={<GroupCourseFormPage />} />
                    <Route path=":id/courses/new" element={<GroupCourseFormPage />} />
                </Route>

                <Route path="/admin/courses">
                    <Route path=":id" element={<CourseMembersPage />} />
                    <Route path=":id/members/new" element={<CreateCourseMembersPage />} />
                </Route>

                <Route path="/admin/evaluations">
                    <Route path="questions">
                        <Route index element={<EvaluationQuestionsPage />} />
                        <Route path=":id" element={<EvaluationQuestionFormPage />} />
                        <Route path=":id/view" element={<EvaluationQuestionViewPage />} />
                        <Route path="new" element={<EvaluationQuestionFormPage />} />
                    </Route>

                    <Route path="assignments">
                        <Route index element={<EvaluationsAssignmentsPage />} />
                        <Route path="new" element={<CreateEvaluationAssignmentPage />} />
                        <Route path=":id" element={<CreateEvaluationAssignmentPage />} />
                    </Route>
                </Route>

                <Route path="/admin/general-settings">
                    <Route index element={<PublicPagesPage />} />
                    <Route path="push-messages" element={<PushMessagesPage />} />
                    <Route path="chat-activation" element={<ChatActivationPage />} />
                    <Route path="public-pages" element={<PublicPagesPage />} />
                    <Route path="public-pages/:id" element={<CreatePublicPagesPage />} />
                    <Route path="public-pages/new" element={<CreatePublicPagesPage />} />

                    <Route path="addresses">
                        <Route index element={<GeneralAddressPage />} />
                        <Route path=":id" element={<EditGeneralAddressPage />} />
                        <Route path="new" element={<GeneralAddressForm />} />
                    </Route>
                </Route>
            </Route>

            <Route path="/admin" element={<Navigate to={{ pathname: "/admin/events" }} />} />

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
