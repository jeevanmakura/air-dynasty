import { Box } from "@mui/material";
import ActivityLogTable from "../component/table/ActivityLogTable";

const ActivityLogs = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <ActivityLogTable />
    </Box>
  );
};

export default ActivityLogs;
