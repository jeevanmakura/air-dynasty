import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { IconButton, Stack, useTheme } from "@mui/material";
import { Edit2, Trash } from "iconsax-react";
import type { TableConfig } from "../../../../../types/types";
import DialogButton from "../../../../organism/DialogButton";
import DeleteBox from "../dialogebox/DeleteBox";
import DetailView from "../dialogebox/DetailView";
import AddUser from "../forms/AddUser";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    name: "Saikush PSD",
    email: "saikushsd@gmail.com",
    phone: "98182773678",
    created_on: "23rd March, 2025",
  },
  {
    sn: 2,
    id: "9873828712",
    name: "Bibek Airline",
    email: "bibek@gmail.com",
    phone: "7648389289",
    created_on: "24th March, 2025",
  },
  {
    sn: 3,
    id: "9873284712",
    name: "Hirtel Airline",
    email: "hirtel@yahoo.com",
    phone: "12348699",
    created_on: "23rd March, 2025",
  },
  {
    sn: 4,
    id: "9987284712",
    name: "Nirwesh Lama",
    email: "nirwesh@gmail.com",
    phone: "2356788956",
    created_on: "23rd March, 2025",
  },
  {
    sn: 5,
    id: "9987382812",
    name: "Siddharth Airline",
    email: "siddharth@gmail.com",
    phone: "857948890",
    created_on: "23rd March, 2025",
  },
  {
    sn: 6,
    id: "9987382847",
    name: "Azelarae",
    email: "azelrae@gmail.com",
    phone: "1298898",
    created_on: "23rd March, 2025",
  },
  {
    sn: 7,
    id: "99873824712",
    name: "Srijana Airtel",
    email: "srljan@gmail.com",
    phone: "777787864",
    created_on: "23rd March, 2025",
  },
  {
    sn: 8,
    id: "99873824712",
    name: "Jomsom Air",
    email: "jomson@gmail.com",
    phone: "65456788899",
    created_on: "23rd March, 2025",
  },
];

const UserTable = () => {
  const theme = useTheme();

  const customHeaders = {
    sn: "SN",
    id: "ID",
    name: "Name",
    email: "Email",
    phone: "Phone",
    created_on: "Created On",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
  });

  const ActionField = ({ rowData }: { rowData: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <DialogButton
          title="View Request List's Details"
          button={
            <Edit2 size={24} color={theme.palette.grey[400]} variant="Bold" />
          }
        >
          {/* only send clicked row data */}
          <DetailView data={rowData} />
        </DialogButton>
      </IconButton>
      <IconButton size="small">
        <DialogButton
          title="Delete row"
          button={
            <Trash size={24} color={theme.palette.grey[400]} variant="Bold" />
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
      buttonSecond: {
        headerText: "User Creation ",
        label: "Add User",
        path: "/dashboard/users",
        component: <AddUser />,
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

export default UserTable;
