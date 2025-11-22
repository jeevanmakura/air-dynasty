export const PATH = {
  AUTH: {
    LOGIN: {
      ROOT: "/auth/login",
    },
    REGISTER: {
      ROOT: "/auth/register",
    },
    VERIFY_OTP: {
      ROOT: "/auth/verify-otp",
    },
    FORGOT_OTP: {
      ROOT: "/auth/forgot-otp",
    },
  },
  ADMIN: {
    DASHBOARD: {
      ROOT: "/dashboard",
    },
    FLIGHTS: {
      ROOT: "/flights",
      REQUEST_LIST: {
        ROOT: "/flights/request-list",
      },
      ADD_HOC_FLIGHT: {
        ROOT: "/flights/add-hoc",
      },
      PRE_BOOKING_LIST: {
        ROOT: "/flights/pre-booking-list",
      },
      DAILY_OPERATION: {
        ROOT: "/flights/daily-operation",
      },
      CANCELLED_FLIGHTS: {
        ROOT: "/flights/cancelled-flight",
      },
    },

    AGENTS: {
      ROOT: "/agents",
    },
    NOTICES: {
      ROOT: "/notices",
    },
    USERS: {
      ROOT: "/users",
    },
    ROLES: {
      ROOT: "/roles",
    },
    FINANCE: {
      ROOT: "/finance",
      FINANCE_DETAILS: {
        ROOT: "/finance/:id",
      },
    },
    FIXED_DEPARTURE: {
      ROOT: "/fixed-departure",
    },
    ACTIVITY_LOGS: {
      ROOT: "/activity-logs",
    },
    SETTINGS: {
      ROOT: "/settings",
    },
  },
  ROLES: {
    ROOT: "/roles",
    ALL_ROLES: {
      ROOT: "all-roles",
    },
    CREATE_ROLE: {
      ROOT: "/roles/create-role",
    },
    EDIT_ROLE: {
      ROOT: "/roles/:id",
    },
  },
};
