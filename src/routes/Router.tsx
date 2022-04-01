import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/home";
import Register from "../pages/register";
import RegisteredSuccessfully from "../components/register/success/registeredSuccessfully";

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
