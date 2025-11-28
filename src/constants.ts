import {
  Airplane,
  AirplaneSquare,
  ArrowDown,
  Bookmark,
  CloseSquare,
  DocumentSketch,
  DollarCircle,
  Grid5,
  MessageQuestion,
  Messenger,
  Profile2User,
  SecurityUser,
  Sms,
  TableDocument,
  UserTag,
} from "iconsax-react";
import ApprovedPlane from "./components/atom/icon/ApprovedPlane";
import CancelAirplane from "./components/atom/icon/CancelAirplane";
import PaxFlown from "./components/atom/icon/PaxFlown";
import PendingAeroplane from "./components/atom/icon/PendingAeroplane";
import PlaneDeparture from "./components/atom/icon/PlaneDeparture";
import type { StatCardProps } from "./components/molecules/StatCard";
import { PATH } from "./routes/PATH";
import type { MenuItem } from "./types/types";

export const drawerWidth = 260;

export const agentSidebarMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: Grid5,
    path: PATH.AGENT.DASHBOARD.ROOT,
  },
  {
    label: "Flights",
    icon: Airplane,
    path: PATH.AGENT.FLIGHTS.ROOT,
    children: [
      {
        label: "Request List",
        icon: MessageQuestion,
        path: PATH.AGENT.FLIGHTS.REQUEST_LIST.ROOT,
      },
      {
        label: "Ad-hoc Flight",
        icon: AirplaneSquare,
        path: PATH.AGENT.FLIGHTS.ADD_HOC_FLIGHT.ROOT,
      },
      {
        label: "Pre-booking List",
        icon: Bookmark,
        path: PATH.AGENT.FLIGHTS.PRE_BOOKING_LIST.ROOT,
      },
      {
        label: "Daily operations",
        icon: ArrowDown,
        path: PATH.AGENT.FLIGHTS.DAILY_OPERATION.ROOT,
      },
      {
        label: "Cancelled Flights",
        icon: CloseSquare,
        path: PATH.AGENT.FLIGHTS.CANCELLED_FLIGHTS.ROOT,
      },
    ]
  },
  {
    label: "Payments",
    icon: DollarCircle,
    path: PATH.AGENT.PAYMENTS.ROOT,
  },
  {
    label: "Fixed Departure",
    icon: TableDocument,
    path: PATH.AGENT.FIXED_DEPARTURE.ROOT,
  },
  {
    label: "Statements",
    icon: UserTag,
    path: PATH.AGENT.STATEMENTS.ROOT,
  },
]

export const adminSidebarMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: Grid5,
    path: PATH.ADMIN.DASHBOARD.ROOT,
  },
  {
    label: "Agents",
    icon: SecurityUser,
    path: PATH.ADMIN.AGENTS.ROOT,
  },
  {
    label: "Flights",
    icon: Airplane,
    path: PATH.ADMIN.FLIGHTS.ROOT,
    children: [
      {
        label: "Request List",
        icon: MessageQuestion,
        path: PATH.ADMIN.FLIGHTS.REQUEST_LIST.ROOT,
      },
      {
        label: "Ad-hoc Flight",
        icon: AirplaneSquare,
        path: PATH.ADMIN.FLIGHTS.ADD_HOC_FLIGHT.ROOT,
      },
      {
        label: "Pre-booking List",
        icon: Bookmark,
        path: PATH.ADMIN.FLIGHTS.PRE_BOOKING_LIST.ROOT,
      },
      {
        label: "Daily operations",
        icon: ArrowDown,
        path: PATH.ADMIN.FLIGHTS.DAILY_OPERATION.ROOT,
      },
      {
        label: "Cancelled Flights",
        icon: CloseSquare,
        path: PATH.ADMIN.FLIGHTS.CANCELLED_FLIGHTS.ROOT,
      },
    ],
  },
  {
    label: "Notices",
    icon: TableDocument,
    path: PATH.ADMIN.NOTICES.ROOT,
  },
  {
    label: "Users",
    icon: Profile2User,
    path: PATH.ADMIN.USERS.ROOT,
  },
  {
    label: "Roles",
    icon: UserTag,
    path: PATH.ADMIN.ROLES.ROOT,
  },
  {
    label: "Finance",
    icon: DollarCircle,
    path: PATH.ADMIN.FINANCE.ROOT,
  },
  {
    label: "Fixed Departures",
    icon: Airplane,
    path: PATH.ADMIN.FIXED_DEPARTURE.ROOT,
  },
  {
    label: "Advertisements",
    icon: DocumentSketch,
    path: PATH.ADMIN.ADVERTISMENT.ROOT,
  },

  {
    label: "Activity Logs",
    icon: Messenger,
    path: PATH.ADMIN.ACTIVITY_LOGS.ROOT,
  },
  {
    label: "Email Logs",
    icon: Sms,
    path: PATH.ADMIN.EMAIL_LOGS.ROOT,
    permissions: ["view_email_logs"],
  },
];

export const adminStatItems: StatCardProps[] = [
  {
    id: 1,
    title: "Total Flights Today",
    value: 25,
    icon: Airplane,
  },
  {
    id: 2,
    title: "Pending Approvals",
    value: 120,
    icon: PendingAeroplane,
  },
  {
    id: 3,
    title: "Overall Flights",
    value: 560,
    icon: PlaneDeparture,
  },
  {
    id: 4,
    title: "Cancelled Flights",
    value: 3,
    icon: CancelAirplane,
  },
];

export const agentStatItems: StatCardProps[] = [
  {
    id: 1,
    title: "Total Bookings",
    value: 560,
    icon: Airplane,
  },
  {
    id: 2,
    title: "Total Pax Flown",
    value: 3,
    icon: PaxFlown,
  },
  {
    id: 3,
    title: "Todays Flights",
    value: 560,
    icon: PlaneDeparture,
  },
  {
    id: 4,
    title: "Approved Flights",
    value: 3,
    icon: ApprovedPlane,
  }
];
