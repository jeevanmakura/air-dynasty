import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useTheme
} from "@mui/material";
import {
  EmojiNormal,
  HambergerMenu,
  NotificationBing
} from "iconsax-react";
import { useEffect, useRef } from "react";
import { adminSidebarMenuItems, agentSidebarMenuItems } from "../../../../constants";
import CAN from "../../../../routes/CAN";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

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
        bgcolor: theme.palette.background.paper,
        borderRadius: 0,
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
            <CAN role="admin"><PageBreadcrumbs menuItem={adminSidebarMenuItems} /> </CAN>
            <CAN role="agent"><PageBreadcrumbs menuItem={agentSidebarMenuItems} /> </CAN>
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
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.border}`,
                  }}
                >
                  <NotificationBing size={18} color={theme.palette.icon.light} />
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
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 1,
                    border: `1px solid ${theme.palette.border}`,
                  }}
                >
                  <EmojiNormal size={18} color={theme.palette.icon.light} />
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
