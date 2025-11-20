import { alpha, Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Add, ArrowForward, Filter, Grid1, Trash } from "iconsax-react";
import SearchBox from "./SearchBox";
import type { HeaderConfig } from "../../types/types";
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
  headerConfig: HeaderConfig;
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
          {headerConfig?.headerLeftContent?.showSearch && (
            <SearchBox value={searchValue} onChange={onSearchChange} />
          )}
          {headerConfig?.headerLeftContent?.showFilter && (
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
          {headerConfig?.headerLeftContent?.showDelete && (
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
          {headerConfig?.headerLeftContent?.showDelete && (
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
          {headerConfig?.headerRightContent?.buttonFirst && (
            <DialogButton
              title={
                headerConfig?.headerRightContent?.buttonFirst?.headerText ||
                "Add Form"
              }
              button={
                <Button
                  variant="outlined"
                  startIcon={
                    <Add size={24} color={theme.palette.primary.main} />
                  }
                >
                  {headerConfig?.headerRightContent?.buttonFirst?.label}
                </Button>
              }
            >
              {headerConfig?.headerRightContent?.buttonFirst?.component}
            </DialogButton>
          )}
          {headerConfig?.headerRightContent?.buttonSecond && (
            <DialogButton
              title={
                headerConfig?.headerRightContent?.buttonSecond?.headerText ||
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
                  {headerConfig?.headerRightContent?.buttonSecond?.label}
                </Button>
              }
            >
              {headerConfig?.headerRightContent?.buttonSecond?.component}
            </DialogButton>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default TableHeader;
