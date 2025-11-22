import {
  alpha,
  Box,
  Button,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import Profile from "./Profile";
import Password from "./Password";
import Security from "./Security";
import DeleteAccount from "./DeleteAccount";

const Setting = () => {
  const theme = useTheme();

  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { key: "profile", label: "Profile" },
    { key: "password", label: "Password" },
    { key: "security", label: "Security" },
    { key: "delete", label: "Delete Account" },
  ];

  return (
    <Box
      p={4}
      borderRadius={1.5}
      component={"section"}
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box>
        <Typography variant="h5" pb={1}>
          Welcome Admin!
        </Typography>
        <Typography variant="subtitle2">
          Manage profile settings, password, and notifications all in one place.
        </Typography>
      </Box>

      <Divider sx={{ mt: 2, mb: 4 }} />

      <Box className="flex gap-8">
        <Box className="w-1/5 flex flex-col items-start gap-0.5">
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              fullWidth
              onClick={() => setActiveTab(tab.key)}
              sx={{
                justifyContent: "left",
                borderRadius: 1.5,
                fontSize: 16,
                bgcolor:
                  activeTab === tab.key
                    ? alpha(theme.palette.primary.main, 0.1)
                    : "transparent",
                color:
                  activeTab === tab.key
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
                fontWeight: 600,
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: 1,
            borderColor: alpha(theme.palette.primary.light, 0.05),
          }}
        />

        <Box className="flex-1">
          {activeTab === "profile" && <Profile />}
          {activeTab === "password" && <Password />}
          {activeTab === "security" && <Security />}
          {activeTab === "delete" && <DeleteAccount />}
        </Box>
      </Box>
    </Box>
  );
};

export default Setting;
