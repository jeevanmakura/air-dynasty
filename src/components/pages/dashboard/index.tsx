import { Box, Grid, Stack, Typography } from "@mui/material";
import { formatDateTime } from "../../../utils/formatDateTime";
import { Clock } from "iconsax-react";
import StatCard from "../../molecules/StatCard";
import { statItems } from "../../../constants";
import FlightTypeOverview from "./component/FlightTypeOverview";
import MonthlyFloghtOperation from "./component/MonthlyFloghtOperation";
import OverviewTable from "./component/table/OverviewTable";

export const DashboardPage = () => {
  const now = formatDateTime();

  return (
    <Box component="section" sx={{ width: "100%" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ p: 4, gap: 2 }}
      >
        {/* Left Side */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 886,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Good Morning,{" "}
            <Box
              component="span"
              sx={{ color: "primary.main" }}
              fontWeight="bold"
            >
              Finnstar!
            </Box>
          </Typography>

          <Typography className="tex-base" color="text.secondary">
            Here’s a quick overview of today’s flight operations, performance
            metrics, and pending actions to manage efficiently.
          </Typography>
        </Box>

        {/* Right Side: Date & Time */}
        <Stack
          spacing={0.5}
          alignItems={{ xs: "flex-start", sm: "flex-start" }}
        >
          <Typography
            fontWeight="medium"
            color="text.secondary"
            sx={{ fontSize: 16 }}
          >
            {now.date}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ fontSize: 16 }}
          >
            <Clock size={16} color="red" />
            <Typography fontWeight="normal" color="text.secondary">
              {now.time}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Grid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 pb-8">
        {statItems.map((item) => (
          <StatCard key={item.id} data={item} />
        ))}
      </Grid>
      <Grid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8 pb-4">
        <Box className="col-span-2 max-h-[490px]">
          <FlightTypeOverview />
        </Box>
        <Box className="col-span-4">
          <MonthlyFloghtOperation />
        </Box>
        <Box className="col-span-6"><OverviewTable /></Box>
      </Grid>
    </Box>
  );
};
