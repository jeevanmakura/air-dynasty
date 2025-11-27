import DataCard from "../../../../molecules/DataCard";

import { alpha, IconButton, Stack, useTheme } from "@mui/material";
import { Edit2, Trash } from "iconsax-react";
import { useMemo } from "react";
import useFetchTable from "../../../../../hook/useFetchTable";
import type { TableConfig } from "../../../../../types/types";
import BaseTable from "../../../../organism/BaseTable";
import DialogButton from "../../../../organism/DialogButton";
import DeleteBox from "../dialogebox/DeleteBox";
import AddNotice from "../forms/AddNotice";

const tableData = [
  {
    sn: 1,
    title: "Saikush PSD",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "active",
  },
  {
    sn: 2,
    title: "Bibek Airline",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "inactive",
  },
  {
    sn: 3,
    title: "Hirtel Airline",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "inactive",
  },
  {
    sn: 4,
    title: "Nirwesh Lama",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "inactive",
  },
  {
    sn: 5,
    title: "Siddharth Airline",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "active",
  },
  {
    sn: 6,
    title: "Azelarae",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "inactive",
  },
  {
    sn: 7,
    title: "Srijana Airtel",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "active",
  },
  {
    sn: 8,
    title: "Jomsom Air",
    start_date: "23rd March, 2025",
    end_date: "26th March, 2025",
    status: "active",
  },
];
const NoticeTable = () => {
  const theme = useTheme();

  const customHeaders = {
    sn: "SN",
    title: "Title",
    start_date: "Start Date",
    end_date: "End Date",
    status: "Status",
  };
  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { color: string }> = {
        active: {
          color: theme.palette.success.light,
        },

        inactive: {
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

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
    customRenderer,
  });

  const ActionField = ({ rowData }: { rowData: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <DialogButton
          title="View Request List's Details"
          button={
            <Edit2 size={24} color={theme.palette.icon.light} variant="Bold" />
          }
        >
          {/* only send clicked row data */}
          <AddNotice isEdit={true} data={rowData} />
        </DialogButton>
      </IconButton>
      <IconButton size="small">
        <DialogButton
          title="Delete row"
          button={
            <Trash size={24} color={theme.palette.icon.light} variant="Bold" />
          }
        >
          <DeleteBox />
        </DialogButton>
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

  const headerConfig: TableConfig = {
    showHeader: true,
    headerLeft: {
      showSearch: true,
      showFilter: true,
      showDelete: true,
    },

    headerRight: {
      primaryButton: {
        headerText: "Add Notice",
        label: "Add Notice",
        path: "/dashboard/notice",
        component: <AddNotice />,
      },
    },
  };

  return (
    <DataCard isHeader={false}>
      <div className="mt-">
        <BaseTable
          data={rowData}
          columns={finalColumns}
          perPage={8}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default NoticeTable;
