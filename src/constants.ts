import {
  Airplane,
  AirplaneSquare,
  DocumentSketch,
  DollarCircle,
  Grid5,
  MessageQuestion,
  Messenger,
  Note,
  Profile2User,
  SecurityUser,
  Sms,
  User,
  UserTag,
} from "iconsax-react";
import type { MenuItem } from "./types/types";
import type { StatCardProps } from "./components/molecules/StatCard";

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
        path: "/flights",
      },
      {
        label: "Ad-hoc Flight",
        icon: AirplaneSquare,
        path: "/flights/add-flight",
      },
      {
        label: "Pre-booking List",
        icon: MessageQuestion,
        path: "/flights",
      },
    ],
  },
  {
    label: "Notices",
    icon: Note,
    path: "/support",
  },
  {
    label: "Users",
    icon: Profile2User,
    path: "/support",
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
    path: "/fixed-departures",
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
    icon: Airplane,
  },
  {
    id: 3,
    title: "Overall Flights",
    value: 560,
    icon: Airplane,
  },
  {
    id: 4,
    title: "Cancelled Flights",
    value: 3,
    icon: Airplane,
  },
];
