import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Home from "../pages/home";
import Login from "../pages/login";
import MediaLibrary from "../pages/mediaLibrary";
import Overview from "../pages/messenger";
import Chat from "../pages/messenger/Chat";
import Register from "../pages/register";
import TemplateView from "../pages/forms/TemplateView";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/registeredsuccessfully"
            element={<RegisteredSuccessfully />}
          />
          <Route path="/messenger" element={<Overview />}>
            <Route path="chats" element={<Chats />} />
            <Route path="calls" element={<Calls />} />
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="/messenger/chat/:id" element={<Chat />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/EmailVerification" element={<EmailVerification />} />
          <Route path="/EmailVerified" element={<EmailVerified />} />
          <Route path="/MediaLibrary" element={<MediaLibrary />} />

          <Route path="/Forms" element={<Forms />} />
          <Route path="/Forms/Templates" element={<Templates />} />
          <Route path="/Forms/Templates/:id" element={<TemplateView />} />
          <Route path="/Forms/Templates/Edit/:id" element={<TemplateEdit />} />


        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
