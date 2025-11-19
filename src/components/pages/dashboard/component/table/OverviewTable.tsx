import { ArrowDown } from "iconsax-react";
import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";

const tableData = [
  {
    sn: 1,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "On Time",
  },
  {
    sn: 2,
    id: "9873828712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 9,
    status: "Delayed",
  },
  {
    sn: 3,
    id: "9873284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 990,
    status: "Failed",
  },
  {
    sn: 4,
    id: "9987284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 100,
    status: "Failed",
  },
  {
    sn: 5,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "On Time",
  },
  {
    sn: 6,
    id: "8738284712",
    sector: "Lukla–Makalu",
    agent: "Ahii0",
    departure: "12:00PM",
    arrival: "1:20PM",
    pax: 7,
    status: "On Time",
  },
];

const OverviewTable = () => {
  const { rowData, colums } = useFetchTable({
    data: tableData,
    columnsToHide: [],
  });
  // console.log("cols", colums);

  // console.log("rowData", rowData);

  return (
    <DataCard
      icon={ArrowDown}
      title="Daily Operations"
      subtitle="Monitor and manage today’s active flights — track status, passengers, and performance in real time"
    >
      <div className="mt-4">
        <BaseTable data={rowData} columns={colums} perPage={6} />
      </div>
    </DataCard>
  );
};

export default OverviewTable;
