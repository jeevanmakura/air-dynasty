import { ArrowDown, CloseCircle } from "iconsax-react";
import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { alpha, useTheme } from "@mui/material";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 9,
    status: "delayed",
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 990,
    status: "failed",
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 100,
    status: "failed",
  },
  {
    sn: 5,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
  {
    sn: 6,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "on-time",
  },
];

export interface TableConfig {
  showHeader: boolean;
  headerLeft?: {
    showSearch: boolean;
    showFilter: boolean;
    showDelete: boolean;
  };
  headerRight?: {
    buttonFirst?: {
      label: string;
      path: string;
    };
    buttonSecond?: {
      label: string;
      path: string;
    };
  };
}

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
            fontFamily: "sans-serif",
          }}
        >
          {value.replace("-", " ")}
        </span>
      );
    },
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customRenderer: customRenderer,
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
          perPage={6}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default OverviewTable;
