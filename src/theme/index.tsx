import "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { alpha, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border?: string;
  }



  interface PaletteOptions {
    border?: string;
  }

  interface TypeText {
    gray?: string;
    black?: string;
    white?: string;
    light?: string;
  }

  interface PaletteColor {
    alt?: string;
  }

  interface SimplePaletteColorOptions {
    alt?: string;
  }

}

declare module "@mui/material/styles" {
  interface Palette {
    icon: PaletteIcon;
  }

  interface PaletteOptions {
    icon?: PaletteIconOptions;
    button?: PaletteButtonOptions;
  }

  interface PaletteIcon {
    main: string;
    black: string;
    dark: string;
    light: string;
  }

  interface PaletteIconOptions {
    main?: string;
    black?: string;
    dark?: string;
    light?: string;
  }

  interface PaletteButtonOptions {
    main?: string;
    light?: string;
  }

}
// Define color palettes
const lightPalette: ThemeOptions["palette"] = {
  primary: {
    main: "#C10308",
    light: "#FDB9BCDE",
    contrastText: "#ffffff",
    alt: "#F94247",
  },
  secondary: {
    main: "#7B61FF",
    light: "#ede7f6",
    dark: "#5e35b1",
    contrastText: "#ffffff",
  },
  error: {
    main: "#c10308",
    light: "#FFF0F1",
    dark: "#d32f2f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#F8D008",
    light: "#FFF6EB",
    dark: "#e65100",
    contrastText: "#ffffff",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#ffffff",
  },
  success: {
    main: "#2e7d32",
    light: "#EDFDF5",
    dark: "#1b5e20",
    contrastText: "#ffffff",
  },
  icon: {
    main: "#C10308",
    black: "#111827",
    dark: "#F94247",
    light: "#B3B3B3",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#1F2937",
    secondary: "#4B5563",
    gray: "#6B7280",
    black: "#000000",
    white: "#ffffff",
    light: "#C9C9C9",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  button: {
    main: "#C10308",
    light: "#F94247",

  },
  border: "#C9C9C9",
  divider: "rgba(0, 0, 0, 0.12)",
};

const darkPalette: ThemeOptions["palette"] = {
  primary: {
    main: "#C10308",
    light: "#FDB9BCDE",
    contrastText: "#ffffff",
    alt: "#F94247",
  },
  secondary: {
    main: "#7B61FF",
    light: "#ede7f6",
    dark: "#5e35b1",
    contrastText: "#ffffff",
  },
  error: {
    main: "#c10308",
    light: "#FFF0F1",
    dark: "#d32f2f",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#F8D008",
    light: "#FFF6EB",
    dark: "#e65100",
    contrastText: "#000000",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#ffffff",
  },
  success: {
    main: "#2e7d32",
    light: "#EDFDF5",
    dark: "#1b5e20",
    contrastText: "#ffffff",
  },
  icon: {
    main: "#C10308",
    black: "#ffffff",
    dark: "#F94247",
    light: "#B3B3B3",
  },
  background: {
    default: "#121212", // dark background
    paper: "#1E1E1E",   // dark card/paper
  },
  text: {
    primary: "#ffffff",
    secondary: "#D1D5DB",
    gray: "#9CA3AF",
    black: "#ffffff",
    white: "#ffffff",
    light: "#C9C9C9",
    disabled: "rgba(255, 255, 255, 0.5)",
  },
  button: {
    main: "#C10308",
    light: "#F94247",
  },
  border: "#4B5563",
  divider: "rgba(255, 255, 255, 0.12)",
};


// Common theme options
const commonThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: [
      '"DM Sans"',
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
    body2: {
      color: "#000",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiSwitch-switchBase": {
            padding: 4,
            zIndex: 2,
            "&.Mui-checked": {
              transform: "translateX(52px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.primary.main,
                border: "none",
              },
            },
          },

          "& .MuiSwitch-thumb": {
            width: 16,
            height: 16,
            backgroundColor: theme.palette.text.light,
            transition: "background-color 0.2s",
            opacity: 1,
          },

          "& .Mui-checked .MuiSwitch-thumb": {
            backgroundColor: "white",
          },

          "& .MuiSwitch-track": {
            borderRadius: 30,
            backgroundColor: "white",
            border: `1px solid black`,
            position: "relative",
            transition: "all .2s",

            "&::before": {
              content: '"NO"',
              position: "absolute",
              left: "calc(50% - 12px)",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#000",
              fontSize: 12,
              fontWeight: 500,
              opacity: 1,
              transition: "opacity .2s",
            },

            "&::after": {
              content: '"YES"',
              position: "absolute",
              right: "calc(50% - 12px)",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 500,
              opacity: 0,
              transition: "opacity .2s",
            },
          },

          "& .Mui-checked + .MuiSwitch-track": {
            opacity: 1,
            "&::before": { opacity: 0 },
            "&::after": { opacity: 1 },
          },

          ".Mui-disabled": {
            opacity: 1,
          },
        })
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
          "&:last-child": {
            paddingBottom: "16px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: "10px 12px",
          borderRadius: "8px",
        },
        input: {
          padding: "0",
        },
        notchedOutline: {
          borderColor: "#C9C9C9",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "16px",
          borderRadius: "14px",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          gap: "8px",
          "&:hover": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            fontWeight: 600,
            "& .MuiListItemIcon-root": {
              color: theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "unset",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: "0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {

          width: "100%",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: 20,
          color: theme.palette.border,
          "& .MuiCheckbox-root": { backgroundColor: "white", },
          "& .Mui-checked": { color: theme.palette.primary.contrastText, },
          "& .MuiCheckbox-indeterminate": { color: theme.palette.primary.contrastText, },
        })
      },
    },

  },
};

// Create theme function
export const createAppTheme = (mode: "light" | "dark") => {
  return createTheme({
    ...commonThemeOptions,
    palette: {
      mode,
      ...lightPalette,
    },
  });
};

// Export palettes for reference
export { darkPalette, lightPalette };

