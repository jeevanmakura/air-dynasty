import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import SearchBox from "../../../molecules/SearchBox";
import { EmojiNormal, NotificationBing } from "iconsax-react";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 260;

export default function CustomAppbar({
  handleDrawerToggle,
}: {
  handleDrawerToggle: () => void;
}) {
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
          {/* LEFT — drawer toggle */}
          <IconButton
            edge="start"
            sx={{ display: { sm: "none" } }} // hide on desktop
            onClick={handleDrawerToggle}
            color="primary"
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            type="button"
            edge="start"
            sx={{ mr: 2 }}
            onClick={handleDrawerToggle}
            color="primary"
          >
            {" "}
            <DashboardIcon /> Dashboard{" "}
          </IconButton>

          {/* RIGHT — search + icons */}
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
            {/* Search Box - takes remaining space */}
            <Box>
              <SearchBox />
            </Box>

            {/* Notification */}
            <IconButton
              sx={{
                width: 40,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 1, // square corners
                border: "1px solid #e0e0e0",
              }}
            >
              <NotificationBing size={18} color="grey" />
            </IconButton>

            {/* User icon */}
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
