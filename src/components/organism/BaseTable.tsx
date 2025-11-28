import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type SortingState,
} from "@tanstack/react-table";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { TableConfig } from "../../types/types";
import TableFooter from "../molecules/TableFooter";
import TableHeader from "../molecules/TableHeader";

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
    onSortingChange: setSorting as Dispatch<SetStateAction<SortingState>>,
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
          width: "100%",
          overflowX: "auto",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "primary.main", border: "none" }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <TableCell
                    key={header.id}
                    onClick={
                      index === 0
                        ? undefined
                        : header.column.getToggleSortingHandler()
                    }
                    sx={{
                      color: "white",
                      fontWeight: 500,
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontFamily: "DM Sans",
                    }}
                  >
                    {index === 0 ? (
                      Object.keys(rowSelection).length > 0 ? (
                        <>
                          <Checkbox
                            checked={table.getIsAllRowsSelected()}
                            onChange={table.getToggleAllRowsSelectedHandler()}
                            sx={{
                              p: 0,
                              mr: 0.5,
                              color: "white",
                            }}
                          />
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </>
                      ) : (
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )
                      )
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
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
                  color: "text.gray",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                No data found
              </TableCell>
            </TableRow>
          )}

          <TableBody>
            {table
              .getRowModel()
              .rows.slice(0, perPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:hover": { backgroundColor: "#f9fafb" },
                    borderBottom: `1px solid `,
                    borderColor: "divider",

                    "&:last-child": { border: 0 },
                  }}
                >
                  {row.getVisibleCells().map((cell: Cell<any, any>, index) => {
                    // Checkbox for first column
                    if (index === 0 && cell.column.id === "sn" && row.getVisibleCells().length > 1) {
                      return (
                        <TableCell
                          key={cell.id}
                          sx={{
                            color: "text.gray",
                            fontWeight: 500,
                            fontSize: 14,
                            display: "flex",
                            alignItems: "center",
                            minHeight: {
                              xs: 50,
                              md: "72px",

                            },
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            border: 0,
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
                          color: "text.secondary",
                          fontWeight: 500,
                          fontSize: 14,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          border: 0,
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
