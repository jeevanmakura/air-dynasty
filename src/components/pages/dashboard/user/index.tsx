import { Box } from "@mui/material";
import UserTable from "../component/table/UsersTable";

const UsersPage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <UserTable />
    </Box>
  );
};

export default UsersPage;
