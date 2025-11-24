import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import CustomAppbar from "../appbar";
import PriymaryMenu from "./PrimaryMenu";

const drawerWidth = 260;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

export default function ResponsiveDrawer({ window, children }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen(!mobileOpen);
  };

  // Drawer content: Logo on top, menu below
  const drawerContent = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Toolbar
        sx={{ padding: "16px", justifyContent: "center", flexShrink: 0 }}
      >
        <Link to={"/"}>
          <img src="/logo.svg" alt="Logo" width={156} height={46} />
        </Link>
      </Toolbar>

      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <PriymaryMenu />
      </Box>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* LEFT SIDEBAR */}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        {/* MOBILE DRAWER */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
          slotProps={{ root: { keepMounted: true } }}
        >
          {drawerContent}
        </Drawer>

        {/* DESKTOP DRAWER */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* RIGHT SIDE: APPBAR + MAIN */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          gap: "16px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <CustomAppbar handleDrawerToggle={handleDrawerToggle} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
}
