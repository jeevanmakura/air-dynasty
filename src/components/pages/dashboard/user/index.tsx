import { Box } from "@mui/material";
import UserTable from "../component/table/UsersTable";

const UsersPage = () => {
  return (
    <Box component={"section"} p={4}>
      <UserTable />
    </Box>
  );
};

export default UsersPage;
