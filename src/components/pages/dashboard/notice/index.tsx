import { Box } from "@mui/material";
import NoticeTable from "../component/table/NoticeTable";

const NoticePage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <NoticeTable />
    </Box>
  );
};

export default NoticePage;
