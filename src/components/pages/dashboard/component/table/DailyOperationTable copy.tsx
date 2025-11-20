import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { IconButton, Stack, useTheme, alpha } from "@mui/material";
import { Eye, Trash } from "iconsax-react";
import type { HeaderConfig } from "../../../../../types/types";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    departure_time: "12:20PM",
    Arrival_time: "12:20PM",
    status: "on-time",
    no_of_pax: 7,
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    departure_time: "12:20PM",
    Arrival_time: "12:20PM",
    aircraft: "9N-ABC",
    flight_date: "24 Oct,2000",
    status: "delayed",
    no_of_pax: 9,
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    departure_time: "12:20PM",
    Arrival_time: "12:20PM",
    status: "failed",
    no_of_pax: 990,
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    departure_time: "12:20PM",
    Arrival_time: "12:20PM",
    status: "failed",
    no_of_pax: 100,
  },
  {
    sn: 5,
    id: "9987382812",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    departure_time: "12:20PM",
    Arrival_time: "12:20PM",
    status: "delayed",
    no_of_pax: 6,
  },
];

const DailyOperationTable = () => {
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
          color: theme.palette.warning.dark,
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

  const customHeaders = {
    id: "ID",
    sector: "Sector",
    agent: "Agent",
    departure_time: "Departure Time",
    Arrival_time: "Arrival Time",
    no_of_pax: "No. of Pax",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
    customRenderer: customRenderer,
  });

  const ActionField = ({ row }: { row: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small" onClick={() => console.log(row.sn)}>
        <Eye size={24} color={theme.palette.text.light} variant="Bold" />
      </IconButton>
      <IconButton size="small">
        <Trash size={24} color={theme.palette.text.light} variant="Bold" />
      </IconButton>
    </Stack>
  );

  const finalColumns = useMemo(
    () => [
      ...columns,
      {
        header: "Actions",
        accessorKey: "actions",
        cell: (info: any) => <ActionField row={info.row.original} />,
      },
    ],
    [columns]
  );

  const headerConfig: HeaderConfig = {
    showHeader: true,
    headerLeftContent: {
      showSearch: true,
      showFilter: true,
      showDelete: true,
    },
  };

  return (
    <DataCard isHeader={false}>
      <div className="mt-">
        <BaseTable
          data={rowData}
          columns={finalColumns}
          perPage={6}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default DailyOperationTable;
