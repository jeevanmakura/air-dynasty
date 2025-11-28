import DataCard from "../../../../molecules/DataCard";

import { IconButton, Stack, useTheme } from "@mui/material";
import { Eye, Trash } from "iconsax-react";
import { useMemo } from "react";
import useFetchTable from "../../../../../hook/useFetchTable";
import type { TableConfig } from "../../../../../types/types";
import BaseTable from "../../../../organism/BaseTable";
import DialogButton from "../../../../organism/DialogButton";
import DeleteBox from "../dialogebox/DeleteBox";
import DetailView from "../dialogebox/DetailView";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 7,
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "24 Oct,2000",
    no_of_pax: 9,
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "78,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 990,
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "76,6788",
    flight_date: "23rd Oct,2025",
    no_of_pax: 100,
  },
  {
    sn: 5,
    id: "9987382812",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 6,
  },
  {
    sn: 6,
    id: "9873828471",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 78,
  },
  {
    sn: 7,
    id: "9987386472",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 89,
  },
  {
    sn: 8,
    id: "9987386472",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    flight_date: "23rd Oct,2025",
    no_of_pax: 89,
  },
];

const CanceledFlightTable = () => {
  const theme = useTheme();

  const customHeaders = {
    id: "Flight No.",
    sector: "Sector",
    agent: "Agent",
    price: "Price",
    aircraft: "Aircraft",
    flight_date: "Flight Date",
    no_of_pax: "No. of Pax",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
  });

  const ActionField = ({ row }: { row: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <DialogButton
          title="View Request List's Details"
          button={
            <Eye size={24} color={theme.palette.icon.light} variant="Bold" />
          }
        >
          <DetailView data={row} />
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
        cell: (info: any) => <ActionField row={info.row.original} />,
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
  };

  return (
    <DataCard isHeader={false}>
      <div className="mt-">
        <BaseTable
          data={rowData}
          columns={finalColumns}
          perPage={10}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default CanceledFlightTable;
