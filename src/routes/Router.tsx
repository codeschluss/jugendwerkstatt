import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import EmailVerification from "../pages/emailVerification";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EmailVerification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
