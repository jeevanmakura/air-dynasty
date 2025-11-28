import { useTheme } from "@mui/material";
import type { ApexOptions } from "apexcharts";
import { Calendar } from "iconsax-react";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import DataCard from "../../../molecules/DataCard";

const BookingStatusOverview = () => {
    const theme = useTheme();

    const series = useMemo(
        () => [
            { name: "Approved", data: [120, 121, 130, 40, 120] },
            { name: "Pending", data: [125, 122, 132, 20, 103] },
            { name: "Cancelled", data: [135, 101, 115, 60, 121] },
        ],
        []
    );

    const options: ApexOptions = useMemo(
        () => ({
            chart: {
                type: "bar",
                height: 430,
                stacked: false,
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "16px",
                    gap: 10,
                    borderRadius: 4,

                },
            },
            colors: [
                theme.palette.primary.light,
                theme.palette.primary.main,
                theme.palette.primary.dark,
            ],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 4,
                colors: ["transparent"],

            },
            xaxis: {
                categories: ["Lukla-Makhu", "Pharping-Iowa", "Jumla-Humla", "Ktm-Brt", "Lukla-Makhu"],
                axisTicks: {
                    show: false,
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                    },
                },
                hover: {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
            yaxis: {
                title: {
                    text: undefined,
                },
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            legend: {
                formatter: function (seriesName: string) {
                    return `<span style="margin-left: 8px;">${seriesName}</span>`;
                },
                position: "top",
                horizontalAlign: "right",
                markers: {
                    size: 8
                },
                itemMargin: {
                    horizontal: 20,
                    vertical: 0,
                },
            }
        }),
        [theme]
    );

    return (
        <DataCard
            title="Booking Status Overview"
            subtitle="Track approved, pending, and cancelled bookings at a glance."
            icon={Calendar}
            isHeader
        >
            <ReactApexChart options={options} series={series} type="bar" height={350} />
        </DataCard>
    );
};

export default BookingStatusOverview;
