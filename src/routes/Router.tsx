import { BrowserRouter, Route, Routes } from "react-router-dom";
import Texting from "../components/messenger/texting";
import Layout from "../containers/Layout";
import Home from "../pages/home";
import Messenger from "../pages/messenger";
import Register from "../pages/register";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="messenger" element={<Messenger />} />
          <Route path="/messenger/person" element={<Texting />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
