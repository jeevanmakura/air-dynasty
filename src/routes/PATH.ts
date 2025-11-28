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
    ADVERTISMENT: {
      ROOT: "/advertisements",
    },
    EMAIL_LOGS: {
      ROOT: "/email-logs",
    },
    SETTINGS: {
      ROOT: "/settings",
    },
  },
  AGENT: {
    DASHBOARD: {
      ROOT: "/agent-dashboard"
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
    PAYMENTS: {
      ROOT: "/payments"
    },
    FIXED_DEPARTURE: {
      ROOT: "/fixed-departure"
    },
    STATEMENTS: {
      ROOT: "/statements"
    }
  }
};
