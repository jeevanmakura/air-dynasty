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
import type { MenuItem } from "./types/types";
import type { StatCardProps } from "./components/molecules/StatCard";
import PendingAeroplane from "./components/atom/icon/PendingAeroplane";
import CancelAirplane from "./components/atom/icon/CancelAirplane";
import PlaneDeparture from "./components/atom/icon/PlaneDeparture";

export const drawerWidth = 260;
export const sidebarMenuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: Grid5,
    path: "/dashboard",
  },
  {
    label: "Agents",
    icon: SecurityUser,
    path: "/agents",
  },
  {
    label: "Flights",
    icon: Airplane,
    path: "/flights",
    children: [
      {
        label: "Request List",
        icon: MessageQuestion,
        path: "/flights/request-list",
      },
      {
        label: "Ad-hoc Flight",
        icon: AirplaneSquare,
        path: "/flights/add-hoc",
      },
      {
        label: "Pre-booking List",
        icon: Bookmark,
        path: "/flights/pre-booking-list",
      },
      {
        label: "Daily operations",
        icon: ArrowDown,
        path: "/flights/daily-operation",
      },
      {
        label: "Cancelled Flights",
        icon: CloseSquare,
        path: "/flights/cancelled-flight",
      },
    ],
  },
  {
    label: "Notices",
    icon: TableDocument,
    path: "/notices",
  },
  {
    label: "Users",
    icon: Profile2User,
    path: "/users",
  },
  {
    label: "Roles",
    icon: UserTag,
    path: "/roles",
  },
  {
    label: "Finance",
    icon: DollarCircle,
    path: "/finance",
  },
  {
    label: "Fixed Departures",
    icon: Airplane,
    path: "/fixed-departure",
  },
  {
    label: "Advertisements",
    icon: DocumentSketch,
    path: "/advertisements",
  },

  {
    label: "Activity Logs",
    icon: Messenger,
    path: "/activity-logs",
  },
  {
    label: "Email Logs",
    icon: Sms,
    path: "/email-logs",
  },
];

export const statItems: StatCardProps[] = [
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
