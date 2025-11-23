import {
  alpha,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Sms } from "iconsax-react";

const Email = () => {
  const theme = useTheme();
  return (
    <Box>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        mb={3}
      >
        <Box
          sx={{
            height: 64,
            width: 64,
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <Sms size={40} variant="Bold" color={theme.palette.primary.main} />
        </Box>
        <Typography variant="h5" fontWeight="bold" marginTop={1}>
          Send Reservation Email
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="semibold"
          color="text.secondary"
        >
          Are you sure you want to send a reservation email?
        </Typography>
      </Stack>
      <Divider
        sx={{
          borderWidth: 1,
          mb: 3,
        }}
      />
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1.5}
      >
        <Button variant="outlined" sx={{ borderRadius: 1.5 }}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ borderRadius: 1.5 }}>
          Yes
        </Button>
      </Stack>
    </Box>
  );
};

export default Email;
