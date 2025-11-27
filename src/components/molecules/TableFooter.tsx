import {
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Stack,
  useTheme,
} from "@mui/material";
import type { Table } from "@tanstack/react-table";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useState } from "react";
import ArrowLeftDouble from "../atom/icon/ArrowLeftDouble";
import ArrowRightDouble from "../atom/icon/ArrowRightDouble";

interface TableFooterProps {
  count: number;
  page: number;
  table: Table<any>;
  perPage?: number;
}

const TableFooter = ({ count, page, table, perPage = 6 }: TableFooterProps) => {
  const [pageSize, setPageSize] = useState(perPage);

  const theme = useTheme();
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="text-xs flex items-center gap-2">
        <span> Show </span>
        <Select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            table.setPageSize(Number(e.target.value));
          }}

          sx={{
            fontSize: "12px",
            padding: "4px 12px",
            borderRadius: "4px",
            width: {
              xs: "40px",
              sm: "80px",
            },
          }}
        >
          {[2, 4, 6, 8, 10].map((size) => (
            <MenuItem key={size} value={size} sx={{ pr: 0 }}>
              {size}
            </MenuItem>
          ))}
        </Select>
        per page
      </div>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={(_, value) => table.setPageIndex(value - 1)}
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          renderItem={(item: any) => (
            <PaginationItem
              {...item}
              slots={{
                first: () => (
                  <ArrowLeftDouble color={theme.palette.text.primary} />
                ),
                last: () => (
                  <ArrowRightDouble color={theme.palette.text.primary} />
                ),
                previous: () => (
                  <ArrowLeft2 size="14" color={theme.palette.text.primary} />
                ),
                next: () => (
                  <ArrowRight2 size="14" color={theme.palette.text.primary} />
                ),
              }}
              sx={{
                fontWeight: 500,
                color: "#111",
                borderRadius: "50%",
                height: "24px",
                minWidth: "24px",

                "&.Mui-selected": {
                  backgroundColor: theme.palette.primary.main,
                  color: "text.white",
                  fontSize: "12px",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              }}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export default TableFooter;
