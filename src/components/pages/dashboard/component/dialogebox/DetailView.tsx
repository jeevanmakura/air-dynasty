import {
  alpha,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MessageQuestion } from "iconsax-react";
import { formatText } from "../../../../../utils/helper";

const DetailView = ({ data }: any) => {
  const theme = useTheme();
  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={1} mb={3}>
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
          <MessageQuestion
            size={40}
            variant="Bold"
            color={theme.palette.primary.main}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="semibold">
            Request List's Details
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="semibold"
            color="text.secondary"
          >
            Request list details is shown below.
          </Typography>
        </Box>
      </Stack>
      <Divider
        sx={{
          borderWidth: 1,
          mb: 3,
        }}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.keys(data).map((key) => {
          return (
            <Box>
              <Typography
                variant="subtitle2"
                fontWeight="normal"
                color="gray"
                textTransform={"capitalize"}
                gutterBottom
              >
                {formatText(key)}
              </Typography>
              <Typography variant="subtitle2" fontWeight="semibold">
                {data[key]}
              </Typography>
            </Box>
          );
        })}
      </div>
    </Box>
  );
};

export default DetailView;
