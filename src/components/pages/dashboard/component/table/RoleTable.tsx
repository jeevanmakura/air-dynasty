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
import AddRole from "../forms/AddRole";

const tableData = [
  {
    sn: 1,
    role: "Admin",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 2,
    role: "Backend",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 3,
    role: "Frontend",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 4,
    role: "Admin",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 5,
    role: "Backend",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 6,
    role: "Admin",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 7,
    role: "Admin",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
  {
    sn: 8,
    role: "Backend",
    createdOn: "23rd March, 2025",
    permission: ["Create", "View", "Delete", "Edit"],
  },
];

const RoleTable = () => {
  const theme = useTheme();

  const customHeaders = {
    sn: "SN",
    role: "Role",
    createdOn: "Created On",
    permission: "Permission",
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
          <AddRole isEdit={true} data={rowData} />
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
      primaryButton: {
        headerText: "Role Creation ",
        label: "Add Role",
        path: "/dashboard/users",
        component: <AddRole />,
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

export default RoleTable;
