import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  alpha,
  Stack,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { sidebarMenuItems } from "../../../../constants";
import { Link, useLocation } from "react-router-dom";
import { Setting2 } from "iconsax-react";

export default function PrimaryMenu() {
  const [open, setOpen] = useState<string | null>(null);

  const location = useLocation();

  const handleToggle = (label: string) => {
    setOpen(open === label ? null : label);
  };

  return (
    <Box sx={{ padding: "0 16px" }}>
      <List>
        {sidebarMenuItems.map((item) => {
          const hasChildren = !!item.children;

          return (
            <Box key={item.label}>
              {/* Parent menu */}
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => hasChildren && handleToggle(item.label)}
                  component={!hasChildren ? Link : "button"}
                  to={!hasChildren ? item.path : undefined}
                  sx={(theme) => ({
                    color: location.pathname.includes(item.path)
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,

                    padding: "16px 12px",
                    height: "48px",
                    borderRadius: "8px",
                    backgroundColor: location.pathname.includes(item.path)
                      ? alpha(theme.palette.primary.light, 0.1)
                      : "transparent",
                    "& .MuiTypography-root": {
                      fontWeight: location.pathname.includes(item.path)
                        ? 600
                        : "normal",
                    },

                    "&:hover": {
                      backgroundColor: alpha(theme.palette.primary.light, 0.1),
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      "& .MuiListItemIcon-root": {
                        color: theme.palette.primary.main,
                      },
                      "& .MuiTypography-root": {
                        fontWeight: "semibold",
                      },
                    },
                  })}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                    }}
                  >
                    {item.icon && <item.icon size={20} color="currentColor" />}
                  </ListItemIcon>

                  <ListItemText primary={item.label} sx={{ p: 0, margin: 0 }} />

                  {/* Dropdown arrow */}
                  {hasChildren &&
                    (open === item.label ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
              </ListItem>

              {/* Children dropdown */}
              {hasChildren && (
                <Collapse in={open === item.label} timeout="auto" unmountOnExit>
                  <Stack direction="row" sx={{ height: "100%", ml: 3 }}>
                    <Divider
                      sx={{
                        borderWidth: "1px",
                        height: "100%",
                        borderColor: (theme) =>
                          alpha(theme.palette.primary.main, 0.1),
                      }}
                      orientation="vertical"
                    />
                    <List component="div" disablePadding>
                      {item?.children?.map((child) => (
                        <ListItem key={child.label} disablePadding>
                          <ListItemButton
                            sx={{
                              color: (theme) =>
                                location.pathname.includes(child.path)
                                  ? theme.palette.primary.main
                                  : theme.palette.text.secondary,
                              padding: "16px 8px 16px 20px",
                              height: "48px",
                              borderRadius: 0,
                              position: "relative",

                              "&:before": {
                                content: '""',
                                position: "absolute",
                                left: "-2px",
                                top: 0,
                                bottom: 0,
                                borderLeft: location.pathname.includes(
                                  child.path
                                )
                                  ? "2px solid"
                                  : "none",
                              },

                              "& .MuiTypography-root": {
                                fontWeight: location.pathname.includes(
                                  child.path
                                )
                                  ? 600
                                  : "normal",
                              },

                              "&:hover": {
                                color: (theme) => theme.palette.primary.main,
                                "& .MuiListItemIcon-root": {
                                  color: (theme) => theme.palette.primary.main,
                                },
                                "&:before": {
                                  borderLeft: "2px solid",
                                  position: "absolute",
                                  left: "-2px",
                                  top: 0,
                                  bottom: 0,
                                  borderColor: (theme) =>
                                    theme.palette.primary.main,
                                },
                              },
                            }}
                            component={Link}
                            to={child.path}
                          >
                            <ListItemIcon
                              sx={{
                                color: "inherit",
                              }}
                            >
                              {child.icon && (
                                <child.icon size={20} color="currentColor" />
                              )}
                            </ListItemIcon>
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Stack>
                </Collapse>
              )}
            </Box>
          );
        })}
      </List>
      <ListItemButton
        sx={{
          color: (theme) => theme.palette.text.secondary,
          padding: "16px 12px",
          height: "48px",
          borderRadius: "8px",
          mt: 4,

          "&:hover": {
            backgroundColor: (theme) => theme.palette.action.hover,
            color: (theme) => theme.palette.primary.main,
            "& .MuiListItemIcon-root": {
              color: (theme) => theme.palette.primary.main,
            },
          },
        }}
        component={Link}
        to="/settings"
      >
        <ListItemIcon sx={{ color: "inherit" }}>
          <Setting2 size={20} color="currentColor" />
        </ListItemIcon>
        <ListItemText primary={"Settings"} />
      </ListItemButton>
    </Box>
  );
}
