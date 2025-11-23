import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
  type Cell,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableFooter from "../molecules/TableFooter";
import TableHeader from "../molecules/TableHeader";
import type { TableConfig } from "../../types/types";

const defaultTableConfig: TableConfig = {
  showFooter: true,
};

const BaseTable = ({
  data,
  columns,
  heaaderConfig = {},
  perPage = 10,
}: {
  data: any[];
  columns: any[];
  heaaderConfig: TableConfig;
  perPage?: number;
}) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const finalConfig = { ...defaultTableConfig, ...heaaderConfig };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    state: {
      sorting,
      globalFilter: filtering,
      rowSelection,
    },
    onSortingChange: setSorting as any,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      {finalConfig?.showHeader && (
        <TableHeader
          searchValue={filtering}
          onSearchChange={setFiltering}
          table={table}
          headerConfig={finalConfig}
        />
      )}

      <TableContainer
        sx={{
          borderRadius: 2,
          border: "1px solid #d1d5db",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      fontSize: 14,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>

          {table.getRowModel().rows.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                sx={{
                  color: "text.grey",
                  fontWeight: 500,
                  fontSize: 14,
                  fontFamily: "sans-serif",
                }}
              >
                No data found
              </TableCell>
            </TableRow>
          )}

          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": { backgroundColor: "#f9fafb" },
                }}
              >
                {row.getVisibleCells().map((cell: Cell<any, any>) => {
                  // Checkbox for SN column
                  if (cell.column.id === "sn") {
                    return (
                      <TableCell
                        key={cell.id}
                        sx={{
                          fontFamily: "sans-serif",
                          color: "text.grey",
                          fontWeight: 500,
                          fontSize: 14,
                          display: "flex",
                          alignItems: "center",
                          minHeight: "72px",
                        }}
                      >
                        <Checkbox
                          checked={row.getIsSelected()}
                          indeterminate={row.getIsSomeSelected()}
                          onChange={row.getToggleSelectedHandler()}
                          sx={{ p: 0, pr: 0.5, color: "text.light" }}
                          size="small"
                        />
                        {cell.getValue()}
                      </TableCell>
                    );
                  }

                  // Default cell rendering (supports customRenderer)
                  return (
                    <TableCell
                      key={cell.id}
                      sx={{
                        fontFamily: "sans-serif",
                        color: "text.secondary",
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {finalConfig.showFooter && finalConfig?.showFooter && (
        <TableFooter
          count={table.getPageCount()}
          page={table.getState().pagination.pageIndex + 1}
          table={table}
          perPage={perPage}
        />
      )}
    </>
  );
};

export default BaseTable;
