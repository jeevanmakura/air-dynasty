import { CalendarTick } from "iconsax-react";
import DataCard from "../../../../molecules/DataCard";

import { alpha, useTheme } from "@mui/material";
import useFetchTable from "../../../../../hook/useFetchTable";
import type { TableConfig } from "../../../../../types/types";
import BaseTable from "../../../../organism/BaseTable";

const tableData = [
  {
    s_n: 1,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 7,
    status: "approved",
  },
  {
    s_n: 2,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 9,
    status: "not-approved",
  },
  {
    s_n: 3,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 990,
    status: "not-approved",
  },
  {
    s_n: 4,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 100,
    status: "not-approved",
  },
  {
    s_n: 5,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 7,
    status: "approved",
  },
  {
    s_n: 6,
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    flight_date: "12nd Jan, 2025",
    arrival: "1:20PM",
    pax: 7,
    status: "approved",
  },
];

const UpcomingFlightTable = () => {
  const theme = useTheme();

  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { color: string }> = {
        "approved": {
          color: theme.palette.success.main,
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

  const perPage = 6;
  const customHeaders = {
    s_n: "SN",
    sector: "Sector",
    agent: "Agent",
    flight_date: "Flight Date",
    arrival: "Arrival Time",
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
      icon={CalendarTick}
      isHeader={true}
      title="Upcoming Flights"
      subtitle="Stay updated on flights departing in the coming days."
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

export default UpcomingFlightTable;
