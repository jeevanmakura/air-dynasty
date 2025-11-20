import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { alpha, IconButton, Stack, useTheme } from "@mui/material";
import {
  Airplane,
  CloseCircle,
  Edit2,
  Eye,
  Sms,
  TickCircle,
  Timer,
  Trash,
} from "iconsax-react";
import type { HeaderConfig } from "../../../../../types/types";
import AllFlight from "../forms/AddFlight";
import DialogButton from "../../../../organism/DialogButton";
import DetailView from "../dialogebox/DetailView";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 7,
    status: "approved",
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "24 Oct,2000",
    pax: 9,
    status: "-",
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "78,0000",
    flight_date: "23rd Oct,2025",
    pax: 990,
    status: "approved",
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "76,6788",
    flight_date: "23rd Oct,2025",
    pax: 100,
    status: "-",
  },
  {
    sn: 5,
    id: "9987382812",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 6,
    status: "-",
  },
  {
    sn: 6,
    id: "9873828471",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 78,
    status: "-",
  },
  {
    sn: 7,
    id: "9987386472",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 89,
    status: "not-approved",
  },
];

const FlightRequestListTable = () => {
  const theme = useTheme();
  const customHeaders = {
    sn: "SN",
    id: "Flight No",
    sector: "Sector",
    agent: "Agent",
    price: "Price",
    flight_date: "Flight Date",
    pax: "No. of Pax",
    status: "Status",
  };

  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { icon: React.ReactNode; color: string }> = {
        approved: {
          icon: (
            <TickCircle
              size="20"
              color={theme.palette.success.main}
              variant="Bold"
            />
          ),
          color: theme.palette.success.main,
        },

        pending: {
          icon: (
            <Timer
              size="20"
              color={theme.palette.warning.main}
              variant="Bold"
            />
          ),
          color: theme.palette.warning.main,
        },

        rejected: {
          icon: (
            <CloseCircle
              size="20"
              color={theme.palette.error.main}
              variant="Bold"
            />
          ),
          color: theme.palette.error.main,
        },

        "not-approved": {
          icon: (
            <CloseCircle
              size="20"
              color={theme.palette.error.main}
              variant="Bold"
            />
          ),
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
          {config.icon} {value.replace("-", " ")}
        </span>
      );
    },
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customRenderer,
    customHeaders,
  });

  const ActionField = ({ rowData }: { rowData: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <DialogButton
          title="View Request List's Details"
          button={
            <Eye size={24} color={theme.palette.grey[400]} variant="Bold" />
          }
        >
          {/* only send clicked row data */}
          <DetailView data={rowData} />
        </DialogButton>
      </IconButton>
      <IconButton size="small">
        <Edit2 size={24} color={theme.palette.grey[400]} variant="Bold" />
      </IconButton>
      <IconButton size="small">
        <Sms size={24} color={theme.palette.grey[400]} variant="Bold" />
      </IconButton>
      <IconButton size="small">
        <Airplane size={24} color={theme.palette.grey[400]} variant="Bold" />
      </IconButton>
      <IconButton size="small">
        <Trash size={24} color={theme.palette.grey[400]} variant="Bold" />
      </IconButton>
    </Stack>
  );

  const finalColumns = useMemo(
    () => [
      ...columns,
      {
        header: "Actions",
        accessorKey: "actions",
        cell: (cellInfo: any) => (
          <ActionField rowData={cellInfo.row.original} />
        ),
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

    headerRightContent: {
      buttonSecond: {
        headerText: "Flight Requests",
        label: "Add Flight",
        path: "/dashboard/agents/add-statement",
        component: <AllFlight />,
      },
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

export default FlightRequestListTable;
