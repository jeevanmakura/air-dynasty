import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import SearchBox from "../../../molecules/SearchBox";
import {
  ArrowRight2,
  EmojiNormal,
  NotificationBing,
  Setting2,
} from "iconsax-react";
import { sidebarMenuItems } from "../../../../constants";
import type { MenuItem } from "../../../../types/types";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const drawerWidth = 260;

export default function CustomAppbar({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
  const theme = useTheme();
  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);

  const segments = location.pathname.split("/").filter(Boolean);

  const parent = sidebarMenuItems.find(
    (item) => item.path === `/${segments[0]}`
  );

  let child: MenuItem | undefined;

  if (parent?.children) {
    child = parent.children.find(
      (c) => c.path === `/${segments[0]}/${segments[1]}`
    );
  }

  const ParentIcon = parent?.icon;
  const parentIconName = parent?.label;

  const ChildIcon = child?.icon;
  const childIconName = child?.label;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        console.log("FOCUS triggered");
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ px: 3 }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            gap: 2,
          }}
        >
          <IconButton
            edge="start"
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
            color="primary"
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ mr: 2, width: "100%" }} onClick={handleDrawerToggle}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {ParentIcon && (
                <ParentIcon
                  size={20}
                  color={
                    childIconName
                      ? theme.palette.text.grey
                      : theme.palette.primary.main
                  }
                  variant="Bold"
                />
              )}

              <Typography
                variant="body1"
                fontSize={16}
                fontWeight={600}
                color={childIconName ? "text.grey" : "primary.main"}
              >
                {parentIconName}
              </Typography>

              {/* if page is settings  */}
              {segments[0] === "settings" && (
                <>
                  <Setting2
                    size={20}
                    color={theme.palette.primary.main}
                    variant="Bold"
                  />

                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={600}
                    color="primary.main"
                  >
                    Settings
                  </Typography>
                </>
              )}

              {childIconName && (
                <>
                  <ArrowRight2
                    size={14}
                    color={theme.palette.text.grey}
                    className="mx-0.5 mt-0.5"
                  />

                  {ChildIcon && (
                    <ChildIcon
                      size={20}
                      color={theme.palette.primary.main}
                      variant="Bold"
                    />
                  )}

                  <Typography
                    variant="body1"
                    fontSize={16}
                    fontWeight={600}
                    color="primary.main"
                  >
                    {childIconName}
                  </Typography>
                </>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
              width: "100%",
              maxHeight: "40px",
            }}
          >
            <Box>
              <SearchBox hasEndAdornment inputRef={inputRef} />
            </Box>

            <IconButton
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 1,
                border: "1px solid #e0e0e0",
              }}
            >
              <NotificationBing size={18} color="grey" />
            </IconButton>

            <IconButton
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 1,
                border: "1px solid #e0e0e0",
              }}
            >
              <EmojiNormal size={18} color="grey" />
            </IconButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
