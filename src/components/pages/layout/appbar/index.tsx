import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar
} from "@mui/material";
import {
  EmojiNormal,
  HambergerMenu,
  NotificationBing
} from "iconsax-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { sidebarMenuItems } from "../../../../constants";
import type { MenuItem } from "../../../../types/types";
import Notification from "../../../molecules/Notification";
import PageBreadcrumbs from "../../../molecules/PageBreadcrumbs";
import PopoverButton from "../../../molecules/PopoverButton";
import Profile from "../../../molecules/Profile";
import SearchBox from "../../../molecules/SearchBox";

const drawerWidth = 260;

export default function CustomAppbar({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
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

  if (child) {
    console.log(child);
  }

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
        width: { md: `calc(100% - ${drawerWidth}px)` },
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
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
            color="primary"
          >
            <HambergerMenu size={30} color="gray" />
          </IconButton>
          <Box sx={{ mr: 2, width: "100%", display: { xs: "none", sm: "block" } }}>
            <PageBreadcrumbs />
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
            <Box component={"div"} className="hidden sm:block">
              <SearchBox hasEndAdornment inputRef={inputRef} />
            </Box>

            <PopoverButton
              trigger={
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <NotificationBing size={18} color="gray" />
                </IconButton>
              }
            >
              <Notification />
            </PopoverButton>

            <PopoverButton
              trigger={
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    border: "1px solid #e0e0e0",
                  }}
                >
                  <EmojiNormal size={18} color="gray" />
                </IconButton>
              }
            >
              <Profile />
            </PopoverButton>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
