import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

const FinancePage = () => {
  return (
    <Box component={"section"} p={4}>
      <Outlet />
    </Box>
  );
};

export default FinancePage;
