import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";

import type { HeaderConfig } from "../../../../../types/types";
import { useTheme } from "@mui/material";

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

const ActivityLogTable = () => {
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

  const finalColumns = useMemo(() => [...columns], [columns]);

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
          perPage={8}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default ActivityLogTable;
