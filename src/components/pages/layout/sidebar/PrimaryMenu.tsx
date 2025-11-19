import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { sidebarMenuItems } from "../../../../constants";
import { Link } from "react-router-dom";
import { Setting2 } from "iconsax-react";

export default function PrimaryMenu() {
  const [open, setOpen] = useState<string | null>(null);

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
                  sx={{
                    color: (theme) => theme.palette.text.secondary,
                    padding: "16px 12px",
                    height: "48px",
                    borderRadius: "8px",

                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.action.hover,
                      color: (theme) => theme.palette.primary.main,
                      "& .MuiListItemIcon-root": {
                        color: (theme) => theme.palette.primary.main,
                      },
                      "& .MuiTypography-root": {
                        fontWeight: "semibold",
                      },
                    },
                  }}
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
                  <List component="div" disablePadding>
                    {item?.children?.map((child) => (
                      <ListItem key={child.label} disablePadding>
                        <ListItemButton
                          sx={{
                            color: (theme) => theme.palette.text.secondary,
                            padding: "16px 12px",
                            ml: 4,
                            height: "48px",
                            borderRadius: "8px",

                            "&:hover": {
                              backgroundColor: (theme) =>
                                theme.palette.action.hover,
                              color: (theme) => theme.palette.primary.main,
                              "& .MuiListItemIcon-root": {
                                color: (theme) => theme.palette.primary.main,
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
