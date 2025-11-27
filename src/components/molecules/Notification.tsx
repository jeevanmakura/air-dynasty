import { Box, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <Box component={"div"} className="w-xs px-2">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          p: 2,
        }}
      >
        <Typography variant="h5" component={"div"}>
          Notification
        </Typography>
        <Link to="/notification">See All</Link>
      </Stack>
      <Divider sx={{ m: 0 }} />
      <Box sx={{ p: 2 }} component={"div"} className="flex flex-col gap-2">
        <Typography variant="body1" component={"div"}>
          Notification 1
        </Typography>
        <Typography variant="body1" component={"div"}>
          Notification 2
        </Typography>
        <Typography variant="body1" component={"div"}>
          Notification 3
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
