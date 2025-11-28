import { Box, Grid, Stack, Typography } from "@mui/material";
import { Clock } from "iconsax-react";
import { adminStatItems, agentStatItems } from "../../../constants";
import CAN from "../../../routes/CAN";
import { formatDateTime } from "../../../utils/formatDateTime";
import StatCard from "../../molecules/StatCard";
import BookingStatusOverview from "./component/BookingStatusOverview";
import FlightTypeOverview from "./component/FlightTypeOverview";
import MonthlyBookingFlights from "./component/MonthlyBookingFlights";
import MonthlyFlightOperation from "./component/MonthlyFlightOperation";
import AdHocFlightRequestTable from "./component/table/AdHocFlightRequestTable";
import OverviewTable from "./component/table/OverviewTable";
import UpcomingFlightTable from "./component/table/UpcomingFlightTable";

export const DashboardPage = () => {
  const now = formatDateTime();

  return (
    <Box component="section" sx={{ width: "100%" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{
          gap: 2,
        }}
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
      <Grid className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pb-8">
        <CAN role={"admin"} >
          {adminStatItems.map((item) => (
            <StatCard key={item.id} data={item} />
          ))}
        </CAN>
        <CAN role={"agent"} >
          {agentStatItems.map((item) => (
            <StatCard key={item.id} data={item} />
          ))}
        </CAN>
      </Grid>
      <CAN role={"admin"} >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          <Box className="md:col-span-2 xl:col-span-2">
            <FlightTypeOverview />
          </Box>
          <Box className="md:col-span-2 xl:col-span-4">
            <MonthlyFlightOperation />
          </Box>
        </div>
      </CAN>
      <CAN role={"agent"} >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <Box className="col-span-1">
            <BookingStatusOverview />
          </Box>
          <Box className="col-span-1">
            <MonthlyBookingFlights />
          </Box>
        </div>
      </CAN>
      <CAN role={"admin"} >
        <Box className="mt-8">
          <OverviewTable />
        </Box>
      </CAN>
      <CAN role={"agent"} >
        <>
          <Box className="mt-8">
            <UpcomingFlightTable />
          </Box>
          <Box className="mt-8">
            <AdHocFlightRequestTable isHeader />
          </Box>
        </>
      </CAN>
    </Box>
  );
};
