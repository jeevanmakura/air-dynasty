import { RouterProvider } from "react-router-dom";
import App from "../App";
import Private from "./Private";
import AuthRoot from "../components/pages/auth";
import Login from "../components/pages/auth/login";
import { PATH } from "./PATH";
import Register from "../components/pages/auth/register";

import NotFound from "../components/pages/layout/NotFound";

import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../components/pages/dashboard";
import AgentsPage from "../components/pages/dashboard/agents";
import FlightsPage from "../components/pages/dashboard/flights";
import FlightRequestList from "../components/pages/dashboard/flights/request-list";
import AdHoc from "../components/pages/dashboard/flights/ad-hoc";
import PreBookingList from "../components/pages/dashboard/flights/pre-booking";
import DailyOperation from "../components/pages/dashboard/flights/dailyOperation/index.tsx";
import CanceledFlight from "../components/pages/dashboard/flights/canceledFlight/index.tsx";
import NoticePage from "../components/pages/dashboard/notice/index.tsx";
import UsersPage from "../components/pages/dashboard/user/index.tsx";
import RolePage from "../components/pages/dashboard/role/index.tsx";
import Finance from "../components/pages/dashboard/finance/Finance.tsx";
import FinancePage from "../components/pages/dashboard/finance/index.tsx";
import FinanceDetailsPage from "../components/pages/dashboard/finance/detail/index.tsx";
import FixedDepartureTable from "../components/pages/dashboard/component/table/FixedDepartureTable.tsx";
import ActivityLogs from "../components/pages/dashboard/activityLog/index.tsx";

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
        element: <App />,
      },
      {
        path: PATH.ADMIN.DASHBOARD.ROOT,
        element: <DashboardPage />,
      },
      {
        path: PATH.ADMIN.AGENTS.ROOT,
        element: <AgentsPage />,
      },
      {
        path: PATH.ADMIN.FLIGHTS.ROOT,
        element: <FlightsPage />,
        children: [
          {
            path: PATH.ADMIN.FLIGHTS.REQUEST_LIST.ROOT,
            element: <FlightRequestList />,
          },
          {
            path: PATH.ADMIN.FLIGHTS.ADD_HOC_FLIGHT.ROOT,
            element: <AdHoc />,
          },
          {
            path: PATH.ADMIN.FLIGHTS.PRE_BOOKING_LIST.ROOT,
            element: <PreBookingList />,
          },
          {
            path: PATH.ADMIN.FLIGHTS.DAILY_OPERATION.ROOT,
            element: <DailyOperation />,
          },
          {
            path: PATH.ADMIN.FLIGHTS.CANCELLED_FLIGHTS.ROOT,
            element: <CanceledFlight />,
          },
        ],
      },
      {
        path: PATH.ADMIN.NOTICES.ROOT,
        element: <NoticePage />,
      },
      {
        path: PATH.ADMIN.USERS.ROOT,
        element: <UsersPage />,
      },
      {
        path: PATH.ADMIN.ROLES.ROOT,
        element: <RolePage />,
      },
      {
        element: <FinancePage />,
        children: [
          {
            path: PATH.ADMIN.FINANCE.ROOT,
            element: <Finance />,
          },
          {
            path: PATH.ADMIN.FINANCE.FINANCE_DETAILS.ROOT,
            element: <FinanceDetailsPage />,
          },
        ],
      },
      {
        path: PATH.ADMIN.FIXED_DEPARTURE.ROOT,
        element: <FixedDepartureTable />,
      },
      {
        path: PATH.ADMIN.ACTIVITY_LOGS.ROOT,
        element: <ActivityLogs />,
      },
      {
        path: "*",
        element: <NotFound />,
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
