import { Box } from "@mui/material";
import AdvertisementTable from "../component/table/AdvertisementTable";

const AdvertisementPage = () => {
  return (
    <Box
      component={"section"}

      sx={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <AdvertisementTable />
    </Box>
  );
};

export default AdvertisementPage;
