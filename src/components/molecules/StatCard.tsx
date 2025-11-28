import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";

export interface StatCardProps {
  id: number;
  title: string;
  value: string | number;
  icon: React.ElementType;
}

const StatCard = ({ data }: { data: StatCardProps }) => {
  const theme = useTheme();
  const bgColor = alpha(theme.palette.primary.main, 0.1); // Box background
  const iconColor = theme.palette.primary.main; // Icon color

  return (
    <Card
      sx={{
        minWidth: 200,
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Icon */}
          <Box
            sx={{
              backgroundColor: bgColor,
              p: "14px",
              borderRadius: 1,
            }}
          >
            <data.icon size={32} color={iconColor} variant="Bold" />
          </Box>

          {/* Title and Value */}
          <Box mt={2}>
            <Typography variant="subtitle1" fontWeight="semibold" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {data.value}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StatCard;
