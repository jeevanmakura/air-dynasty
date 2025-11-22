import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const SettingPage = () => {
  return (
    <Box component={"section"} p={4}>
      <Outlet />
    </Box>
  );
};

export default SettingPage;
