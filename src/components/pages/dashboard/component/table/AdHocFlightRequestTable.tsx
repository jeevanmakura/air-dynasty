import DataCard from "../../../../molecules/DataCard";

import { IconButton, Stack, useTheme } from "@mui/material";
import { AirplaneSquare, Eye, Trash } from "iconsax-react";
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
    flight_no: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 7,
  },
  {
    sn: 2,
    flight_no: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    aircraft: "9N-ABC",
    flight_date: "24 Oct,2000",
    no_of_pax: 9,
  },
  {
    sn: 3,
    flight_no: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "78,0000",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 990,
  },
  {
    sn: 4,
    flight_no: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "76,6788",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 100,
  },
  {
    sn: 5,
    flight_no: "9987382812",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 6,
  },
  {
    sn: 6,
    flight_no: "9873828471",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 78,
  },
  {
    sn: 7,
    flight_no: "9987386472",
    sector: "Lukla–Makalu",
    agent: "Ahilo",
    price: "23,0000",
    aircraft: "9N-ABC",
    flight_date: "23rd Oct,2025",
    no_of_pax: 89,
  },
];

const AdHocFlightRequestTable = ({ isHeader = false }: { isHeader?: boolean }) => {
  const theme = useTheme();

  const customHeaders = {
    flight_no: "Flight No.",
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
          {/* only send clicked row data */}
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
    showHeader: false,
  };

  return (
    <DataCard isHeader={isHeader}
      icon={AirplaneSquare}
      title="Ad-hoc Flight Request"
      subtitle="Review and manage all ad-hoc flight requests awaiting action.">
      <div className="mt-4">
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

export default AdHocFlightRequestTable;
