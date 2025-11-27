import { Box } from "@mui/material";
import AgentsTable from "../component/table/AgentsTable";
// import EmailTemplate from "../../../molecules/EmailTemplate";

const AgentsPage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      {/* <EmailTemplate /> */}
      <AgentsTable />
    </Box>
  );
};

export default AgentsPage;
