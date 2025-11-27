import { Box } from "@mui/material";
import EmailLogTable from "../component/table/EmailLogTable";

const EmailLogsPage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
      className="max-w-screen overflow-x-hidden"
    >
      <EmailLogTable />{" "}
    </Box>
  );
};

export default EmailLogsPage;
