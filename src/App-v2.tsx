import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth-v2";
import { RequireAuthRoute, RequireNonAuthRoute } from "./shared/components";

const App = (): ReactElement => {
  const { loading } = useAuth();

  console.log("loading", loading);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route element={<RequireNonAuthRoute />}>
        <Route path="/login" element={<div>Login </div>} />
      </Route>

      <Route element={<RequireAuthRoute />}>
        <Route path="/" element={<div>Home </div>} />
      </Route>
      <Route path="/*" element={<div>Error page </div>} />
    </Routes>
  );
};

export default App;
