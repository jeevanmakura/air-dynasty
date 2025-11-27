import { Box } from "@mui/material";
import RoleTable from "../component/table/RoleTable";

const RolePage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <RoleTable />
    </Box>
  );
};

export default RolePage;
