import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { IconButton, Stack, useTheme } from "@mui/material";
import { Airplane, Edit2, Eye, Sms, Trash } from "iconsax-react";
import type { HeaderConfig } from "../../../../../types/types";
import DialogButton from "../../../../organism/DialogButton";
import DetailView from "../dialogebox/DetailView";
import AddFixedDeparture from "../forms/AddFixedDeparture";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 7,
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "24 Oct,2000",
    pax: 9,
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "78,0000",
    flight_date: "23rd Oct,2025",
    pax: 990,
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "76,6788",
    flight_date: "23rd Oct,2025",
    pax: 100,
  },
  {
    sn: 5,
    id: "9987382812",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 6,
  },
  {
    sn: 6,
    id: "9873828471",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 78,
  },
  {
    sn: 7,
    id: "9987386472",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    pax: 89,
  },
];

const FixedDepartureTable = () => {
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
        headerText: "Fixed Departures",
        label: "Add Fixed Departure",
        path: "/dashboard/fixed-departure",
        component: <AddFixedDeparture />,
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

export default FixedDepartureTable;
