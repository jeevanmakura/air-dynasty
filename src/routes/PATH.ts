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
    },
    AGENTS: {
      ROOT: "/agents",
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
