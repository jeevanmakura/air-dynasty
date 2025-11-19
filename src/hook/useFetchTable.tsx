// hooks/useFetchTable.ts
import { useMemo } from "react";
import { buildColumns } from "../utils/helper";

const useFetchTable = ({
  data,
  columnsToHide,
}: {
  data: any[];
  columnsToHide: string[];
}) => {
  const colums = useMemo(() => {
    return buildColumns(data, columnsToHide);
  }, [data, columnsToHide]);

  const rowData = useMemo(() => data ?? [], [data]);

  return { rowData, colums };
};

export default useFetchTable;
