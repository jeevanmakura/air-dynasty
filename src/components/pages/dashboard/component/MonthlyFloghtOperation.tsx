import { Airplane } from "iconsax-react";
import DataCard from "../../../molecules/DataCard";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material";

const MonthlyFloghtOperation = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const light = theme.palette.primary.light;
  const [state] = useState({
    series: [
      {
        name: "Flights",
        data: [100, 120, 90, 80, 42, 60, 70, 51, 42, 60, 170, 51],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: { show: false },
      },

      dataLabels: { enabled: false },

      stroke: {
        curve: "smooth",
        width: 2,
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

        axisTicks: {
          show: false,
        },

        axisBorder: {
          show: true,
        },
        labels: {
          show: true,
          style: {
            colors: "#9aa0ac",
          },
        },
      },

      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            fontSize: "12px",
            colors: "#9aa0ac",
          },
        },
      },

      tooltip: {
        y: {
          formatter: (val: number) => `${val} Flights`,
        },
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light", // light or dark
          type: "vertical", // vertical, horizontal
          shadeIntensity: 1,
          gradientToColors: [light], // second color
          opacityFrom: 0.9,
          opacityTo: 0.1,
          stops: [0, 100], // gradient stops
        },
        colors: [primary], // starting color
      },
    },
  });

  return (
    <DataCard
      title="Monthly Flight Overview"
      subtitle="Flight activity over the past month to monitor operational performance."
      icon={Airplane}
    >
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
        width="100%"
      />
    </DataCard>
  );
};

export default MonthlyFloghtOperation;
