// hooks/useFetchTable.ts
import { useMemo, type JSX } from "react";
import { buildColumns } from "../utils/helper";

type CustomRenderer = Record<
  string,
  (info: { getValue: () => any; row: any }) => JSX.Element
>;

const useFetchTable = ({
  data,
  columnsToHide,
  customRenderer,
  customHeaders,
}: {
  data: any[];
  columnsToHide: string[];
  customRenderer?: CustomRenderer;
  customHeaders?: Record<string, string>;
}) => {
  const columns = useMemo(() => {
    let baseCols = buildColumns(data, columnsToHide);

    if (customRenderer || customHeaders) {
      baseCols = baseCols.map((col) => {
        const key = col.accessorKey;

        // Apply custom header name
        if (customHeaders && customHeaders[key]) {
          col.header = customHeaders[key];
        }

        // If custom renderer exists for this column
        if (customRenderer && customRenderer[key]) {
          return {
            ...col,
            cell: (cellInfo: any) =>
              customRenderer[key]({
                getValue: cellInfo.getValue,
                row: cellInfo.row.original,
              }),
          };
        }

        return col;
      });
    }

    return baseCols;
  }, [data, columnsToHide, customRenderer]);

  const rowData = useMemo(() => data ?? [], [data]);

  return { rowData, columns };
};

export default useFetchTable;
