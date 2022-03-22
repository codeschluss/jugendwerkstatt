import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/home";
import Register from "../pages/register";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
