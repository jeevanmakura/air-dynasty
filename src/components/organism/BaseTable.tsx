import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Button,
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

const BaseTable = ({
  data,
  columns,
}: {
  data: any[];
  columns: any[];
  perPage?: number;
}) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowSelection: () => rowSelection,
    onRowSelectionChange: setRowSelection,
    columnResizeMode: "onChange",
    state: {
      sorting: sorting,
      globalFilter: filtering,
      rowSelection: rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  let searchCount = table.getFilteredRowModel().rows.length;

  return (
    <>
      <TableHeader
        searchValue={filtering}
        onSearchChange={setFiltering}
        table={table}
      />
      <TableContainer
        sx={{
          borderRadius: 2,
          border: "1px solid #d1d5db",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            {table?.getHeaderGroups()?.map((headerGroup) => (
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
                      textTransform: "capitalize",
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

          {
            //if there are no rows, show a message
            table.getRowModel().rows.length === 0 && (
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
            )
          }
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#f9fafb",
                  },
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  //checkbox in Sn column
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
                        }}
                      >
                        <Checkbox
                          checked={row.getIsSelected()}
                          indeterminate={row.getIsSomeSelected()}
                          onChange={row.getToggleSelectedHandler()}
                          sx={{
                            p: 0,
                            pr: 0.5,
                            color: "text.light",
                          }}
                          size="small"
                        />
                        {cell.getValue()}
                      </TableCell>
                    );
                  }

                  // check if this is the "status" column
                  if (cell.column.id === "status") {
                    const status = cell.getValue();

                    let bg = "";
                    let color = "";

                    if (status === "On Time") {
                      bg = "#D1F7D8"; // light green background
                      color = "#1A7F37"; // green text
                    } else if (status === "Delayed") {
                      bg = "#FFE7C2"; // light orange
                      color = "#B45F06"; // dark orange
                    } else if (status === "Failed") {
                      bg = "#FFD6D6"; // light red
                      color = "#B22222"; // red text
                    }

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
                        <span
                          style={{
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontWeight: 500,
                            backgroundColor: bg,
                            color,
                            fontSize: "0.8rem",
                            fontFamily: "sans-serif",
                          }}
                        >
                          {status}
                        </span>
                      </TableCell>
                    );
                  }

                  // default cell rendering
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
      <TableFooter
        count={table.getPageCount()}
        page={table.getState().pagination.pageIndex + 1}
        table={table}
        perPage={6}
      />
    </>
  );
};

export default BaseTable;
