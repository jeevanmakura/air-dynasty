import { alpha, Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Add, ArrowForward, Filter, Grid1, Trash } from "iconsax-react";
import SearchBox from "./SearchBox";
import type { TableConfig } from "../../types/types";
import DialogButton from "../organism/DialogButton";
import DeleteBox from "../pages/dashboard/component/dialogebox/DeleteBox";

const TableHeader = ({
  searchValue,
  onSearchChange,
  table,
  headerConfig,
}: {
  searchValue: string;
  table: any;
  headerConfig: TableConfig;
  onSearchChange: (value: string) => void;
}) => {
  const theme = useTheme();

  const isRowSelected = table.getSelectedRowModel().rows.length > 0;

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {headerConfig?.headerLeft?.showSearch && (
            <SearchBox value={searchValue} onChange={onSearchChange} />
          )}
          {headerConfig?.headerLeft?.showFilter && (
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.secondary.light,
                color: theme.palette.text.grey,
                px: 1.5,
              }}
              startIcon={<Filter size={20} color={theme.palette.text.grey} />}
            >
              Filter
            </Button>
          )}
          {headerConfig?.headerLeft?.showDelete && (
            <DialogButton
              title="Delete row"
              button={
                <Button
                  variant="outlined"
                  disabled={!isRowSelected}
                  sx={{
                    borderColor: isRowSelected
                      ? theme.palette.primary.main
                      : theme.palette.secondary.light,
                    color: theme.palette.grey[400],
                    px: 1.5,
                  }}
                >
                  <Trash
                    size={20}
                    color={
                      isRowSelected
                        ? theme.palette.primary.main
                        : theme.palette.grey[400]
                    }
                  />
                </Button>
              }
            >
              <DeleteBox />
            </DialogButton>
          )}
          {headerConfig?.headerLeft?.showDelete && (
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.secondary.light,
                color: theme.palette.text.grey,
                px: 3,
              }}
            >
              <ArrowForward
                size={20}
                color={theme.palette.text.grey}
                className="transform scale-x-[-1]"
              />
            </Button>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          {headerConfig?.headerRight?.buttonFirst && (
            <DialogButton
              title={
                headerConfig?.headerRight?.buttonFirst?.headerText || "Add Form"
              }
              button={
                <Button
                  variant="outlined"
                  startIcon={
                    <Add size={24} color={theme.palette.primary.main} />
                  }
                >
                  {headerConfig?.headerRight?.buttonFirst?.label}
                </Button>
              }
            >
              {headerConfig?.headerRight?.buttonFirst?.component}
            </DialogButton>
          )}
          {headerConfig?.headerRight?.buttonSecond && (
            <DialogButton
              title={
                headerConfig?.headerRight?.buttonSecond?.headerText ||
                "Add Form"
              }
              button={
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                  }}
                  startIcon={<Add size={24} color={theme.palette.grey[50]} />}
                >
                  {headerConfig?.headerRight?.buttonSecond?.label}
                </Button>
              }
            >
              {headerConfig?.headerRight?.buttonSecond?.component}
            </DialogButton>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default TableHeader;
