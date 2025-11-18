import { Route, RouterProvider, Routes } from "react-router-dom";
import App from "../App";
import Private from "./Private";
import AuthRoot from "../components/pages/auth";
import Login from "../components/pages/auth/login";
import { PATH } from "./PATH";
import Register from "../components/pages/auth/register";
import RoleManagementRoot from "../components/pages/RoleManagement";
import RoleManagementForm from "../components/pages/RoleManagement/RoleManagementForm";
import AllRoles from "../components/pages/RoleManagement/allRoles";
import NotFound from "../components/pages/layout/NotFound";

import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../components/pages/dashboard";

const router = createBrowserRouter([
  {
    element: <AuthRoot />,
    children: [
      {
        path: PATH.AUTH.LOGIN.ROOT,
        element: <Login />,
      },
      {
        path: PATH.AUTH.REGISTER.ROOT,
        element: <Register />,
      },
    ],
  },
  {
    element: <Private />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: PATH.ADMIN.DASHBOARD.ROOT,
        element: <DashboardPage />,
      },
      {
        path: PATH.ADMIN.FLIGHTS.ROOT,
        element: <App />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function GlobalRoutes() {
  return <RouterProvider router={router} />;
}
