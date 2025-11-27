import { ArrowDown } from "iconsax-react";
import DataCard from "../../../../molecules/DataCard";

import { alpha, useTheme } from "@mui/material";
import useFetchTable from "../../../../../hook/useFetchTable";
import type { TableConfig } from "../../../../../types/types";
import BaseTable from "../../../../organism/BaseTable";

const tableData = [
  {
    s_n: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
  {
    s_n: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 9,
    status: "delayed",
  },
  {
    s_n: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 990,
    status: "failed",
  },
  {
    s_n: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 100,
    status: "failed",
  },
  {
    s_n: 5,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
  {
    s_n: 6,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
];

const OverviewTable = () => {
  const theme = useTheme();

  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { color: string }> = {
        "on-time": {
          color: theme.palette.success.main,
        },
        delayed: {
          color: theme.palette.error.light,
        },

        failed: {
          color: theme.palette.error.main,
        },

        "not-approved": {
          color: theme.palette.error.main,
        },
      };

      const config = map[value];

      // Fallback (if value doesn't match any key)
      if (!config) return <span>{value}</span>;

      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: 500,
            backgroundColor: alpha(config.color, 0.15),
            color: config.color,
            textTransform: "capitalize",
            fontSize: "0.8rem",
          }}
        >
          {value.replace("-", " ")}
        </span>
      );
    },
  };

  const perPage = 4;
  const customHeaders = {
    s_n: "SN",
    id: "Flight No",
    sector: "Sector",
    agent: "Agent",
    price: "Price",
    flight_date: "Flight Date",
    pax: "No. of Pax",
    status: "Status",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customRenderer: customRenderer,
    customHeaders,
  });

  const headerConfig: TableConfig = {
    showHeader: false,
  };

  return (
    <DataCard
      icon={ArrowDown}
      title="Daily Operations"
      subtitle="Monitor and manage today’s active flights — track status, passengers, and performance in real time"
    >
      <div className="mt-4">
        <BaseTable
          data={rowData}
          columns={columns}
          perPage={perPage}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default OverviewTable;
