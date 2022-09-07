// react
import { ReactElement } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useExpireToken } from "../../../hooks/useExpireToken";
import { UserRoleEnum } from "../../../interfaces";

// store
import { useAuthStore } from "../../../store";
import { RequireAuthLayout } from "./RequireAuthLayout";

export const RequireAuthAll = (): ReactElement => {
    // hooks
    const location = useLocation();
    const { isAuthenticated, user } = useAuthStore();
    useExpireToken();

    const layout =
        user?.roles.length !== 0 ? (
            <RequireAuthLayout
                accessRole={[user?.roles.includes(UserRoleEnum.ADMIN) ? "admin" : "student"]}
            />
        ) : (
            <Outlet />
        );

    return isAuthenticated ? (
        layout
    ) : (
        <Navigate to={{ pathname: "/" }} state={{ from: location }} />
    );
};
