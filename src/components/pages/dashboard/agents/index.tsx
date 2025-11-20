import { Box } from "@mui/material";
import AgentsTable from "../component/table/AgentsTable";

const AgentsPage = () => {
  return (
    <Box component={"section"} p={4}>
      <AgentsTable />
    </Box>
  );
};

export default AgentsPage;
