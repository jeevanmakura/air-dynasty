import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { adminSidebarMenuItems, agentSidebarMenuItems } from "../../../../constants";
import CAN from "../../../../routes/CAN";
import PageBreadcrumbs from "../../../molecules/PageBreadcrumbs";
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
        <CAN role="admin" > <PriymaryMenu handleDrawerToggle={handleDrawerToggle} menuItems={adminSidebarMenuItems} /> </CAN>
        <CAN role="agent" > <PriymaryMenu handleDrawerToggle={handleDrawerToggle} menuItems={agentSidebarMenuItems} /> </CAN>
      </Box>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  const location = useLocation();

  useEffect(() => {
    // Route changed → ensure drawer is closed
    setMobileOpen(false);

    // Remove MUI scroll lock
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      {/* LEFT SIDEBAR */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
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
            display: { xs: "block", md: "none" },
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
            display: { xs: "none", md: "block" },
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
            p: {
              xs: 2,
              sm: 3,
              md: 3,
              lg: 4,
            },
            maxWidth: "100vw",
            height: "100%",
          }}
        >
          <Toolbar />
          <Box sx={{
            mb: 2, width: "100%", px: {
              xs: 2,
              sm: 3,
              md: 7,
            },
            display: {
              xs: "block",
              sm: "none",
            }
          }} >
            <CAN role="admin" > <PageBreadcrumbs menuItem={adminSidebarMenuItems} /> </CAN>
            <CAN role="agent" > <PageBreadcrumbs menuItem={agentSidebarMenuItems} /> </CAN>
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
