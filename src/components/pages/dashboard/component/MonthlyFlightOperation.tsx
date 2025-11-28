import { useTheme } from "@mui/material";
import type { ApexOptions } from "apexcharts";
import { Calendar } from "iconsax-react";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import DataCard from "../../../molecules/DataCard";

const MonthlyFlightOperation = () => {
  const theme = useTheme();

  const primary = theme.palette.primary.main;
  const light = theme.palette.primary.light;

  // ====== Chart Series ======
  const series = useMemo(
    () => [
      {
        name: "Flights",
        data: [100, 120, 90, 80, 42, 60, 70, 51, 42, 60, 170, 51],
      },
    ],
    []
  );

  // ====== Chart Options ======
  const options: ApexOptions = useMemo(
    () => ({
      chart: {
        type: "area",
        toolbar: { show: false },
      },

      responsive: [
        {
          breakpoint: 1200,
          options: { chart: { height: 300 } },
        },
        {
          breakpoint: 900,
          options: {
            chart: { height: 260 },
            xaxis: { labels: { rotate: -45 } },
          },
        },
        {
          breakpoint: 600,
          options: { chart: { height: 240 } },
        },
      ],

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
        axisTicks: { show: false },
        axisBorder: { show: true },
        labels: {
          show: true,
          style: { colors: "#9aa0ac" },
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
          shade: "light",
          type: "vertical",
          gradientToColors: [light],
          opacityFrom: 0.9,
          opacityTo: 0.1,
          stops: [0, 100],
        },
        colors: [primary],
      },
    }),
    [primary, light]
  );

  return (
    <DataCard
      title="Monthly Flight Overview"
      subtitle="Flight activity over the past month to monitor operational performance."
      icon={Calendar}
      isHeader
    >
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </DataCard>
  );
};

export default MonthlyFlightOperation;
