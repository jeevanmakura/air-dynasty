import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

const FinancePage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <Outlet />
    </Box>
  );
};

export default FinancePage;
