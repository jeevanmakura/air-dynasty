import { useTheme } from "@mui/material";
import { AirplaneSquare } from "iconsax-react";
import ReactApexChart from "react-apexcharts";
import DataCard from "../../../molecules/DataCard";

const FlightTypeOverview = () => {
  const theme = useTheme();
  const { primary } = theme.palette;

  const chartSeries = [95, 5];

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Scheduled Flights", "Ad-Hoc Flights"],
    colors: [primary.main, primary.light],
    stroke: {
      show: true,
      width: 10,
      colors: ["#fff"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: "30px",
              fontWeight: "bold",
              color: primary.main,
              formatter: (val: number) => `${val}%`,
            },
            total: {
              show: true,
              label: "Total Flight Requested",
              color: "#999",
              fontSize: "14px",
            },
          },
        },
      },
    },
    dataLabels: { enabled: false },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      offsetY: -15,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { height: 300 },
        },
      },
    ],
  };

  return (
    <DataCard
      title="Flight Type Overview"
      icon={AirplaneSquare}
      subtitle="Quickly track the balance between scheduled and ad-hoc flights to assess demand and operational load."
    >
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height={350}
      />
    </DataCard>
  );
};

export default FlightTypeOverview;
