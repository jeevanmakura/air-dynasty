import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { IconButton, Stack, useTheme } from "@mui/material";
import { Edit2, Eye, Trash } from "iconsax-react";
import { Link } from "react-router-dom";
import type { HeaderConfig } from "../../../../../types/types";
import AddStatement from "../forms/AddStatement";
import AddAgend from "../forms/AddAgend";
import DialogButton from "../../../../organism/DialogButton";
import DeleteBox from "../dialogebox/DeleteBox";
import DetailView from "../dialogebox/DetailView";

const tableData = [
  {
    sn: 1,
    name: "John Doe",
    agent_id: "AGT001",
    date: "2025-01-10",
  },
  {
    sn: 2,
    name: "Jane Smith",
    agent_id: "AGT002",
    date: "2025-01-11",
  },
  {
    sn: 3,
    name: "Michael Johnson",
    agent_id: "AGT003",
    date: "2025-01-12",
  },
  {
    sn: 4,
    name: "Emily Brown",
    agent_id: "AGT004",
    date: "2025-01-13",
  },
  {
    sn: 5,
    name: "David Wilson",
    agent_id: "AGT005",
    date: "2025-01-14",
  },
  {
    sn: 6,
    name: "Sophia Davis",
    agent_id: "AGT006",
    date: "2025-01-15",
  },
  {
    sn: 7,
    name: "James Miller",
    agent_id: "AGT007",
    date: "2025-01-16",
  },
];

const AgentsTable = () => {
  const theme = useTheme();

  const customHeaders = {
    sn: "SN",
    name: "Name",
    agent_id: "Agent ID",
    date: "Date",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
  });

  const StatementField = () => <Link to="#">View Statement</Link>;

  const PaymentField = () => <Link to="#">View Payment</Link>;

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
        header: "Statement",
        accessorKey: "statement",
        cell: <StatementField />,
      },
      {
        header: "Payment",
        accessorKey: "payment",
        cell: <PaymentField />,
      },
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
      buttonFirst: {
        headerText: "Statement Creation",
        label: "Add Statement",
        path: "/dashboard/agents/statement",
        component: <AddStatement />,
      },
      buttonSecond: {
        headerText: "Add Agend",
        label: "Add Agent",
        path: "/dashboard/agents/add",
        component: <AddAgend />,
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

export default AgentsTable;
