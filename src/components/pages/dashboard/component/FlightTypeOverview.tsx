import { AirplaneSquare } from "iconsax-react";
import DataCard from "../../../molecules/DataCard";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme, Typography, Box } from "@mui/material";

const FlightTypeOverview = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main; // Red-ish color
  const light = "#f8c6c6"; // Light pink for Ad-Hoc

  const series = [97, 3]; // 97% scheduled, 3% Ad-Hoc
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
      height: 350,
    },
    labels: ["Scheduled Flights", "Ad-Hoc Flights"],
    colors: [primary, light],
    stroke: {
      show: true,
      width: 10,
      colors: ["#fff"], // gap between slices
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              fontSize: "30px",
              fontWeight: "bold",
              color: primary,
              formatter: function (val: number) {
                return val + "%";
              },
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
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      markers: {},
    },
  };

  return (
    <DataCard
      title="Flight Type Overview"
      icon={AirplaneSquare}
      subtitle="Quickly track the balance between scheduled and ad-hoc flights to assess demand and operational load."
    >
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={350}
      />
    </DataCard>
  );
};

export default FlightTypeOverview;
