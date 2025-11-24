import { Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import { Add, ArrowForward, Filter, Trash } from "iconsax-react";
import SearchBox from "./SearchBox";
import type { FormFields, TableConfig } from "../../types/types";
import DialogButton from "../organism/DialogButton";
import DeleteBox from "../pages/dashboard/component/dialogebox/DeleteBox";

const searchField: FormFields[] = [
  {
    label: "Payement Date",
    name: "Date",
    type: "date",
    required: true,
    defaultValue: "",
    placeholder: "Select Date",
  },
];

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
        alignItems="flex-end"
        justifyContent="space-between"
        mb={4}
      >
        <Stack direction="row" alignItems="bottom" spacing={1.5}>
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
          {headerConfig?.headerLeft?.showDelete && isRowSelected && (
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
          {/* custom search */}
          {headerConfig?.headerLeft?.isCustomSearch &&
            searchField.map((field: FormFields) => (
              <div key={field.name} className="w-[292px]">
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  color={"text.primary"}
                  mb={0.5}
                >
                  {field.label}{" "}
                  {field.required && <span style={{ color: "red" }}>*</span>}
                </Typography>
                <TextField
                  name={field.name}
                  variant="outlined"
                  fullWidth
                  size="small"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={searchValue}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="custom-date"
                />
              </div>
            ))}
        </Stack>
        <Stack direction="row" alignItems="bottom" spacing={2}>
          {headerConfig?.headerRight?.secondaryButton &&
            (() => {
              const IconComponent =
                headerConfig.headerRight.secondaryButton.startIcon || Add;

              return (
                <DialogButton
                  title={
                    headerConfig.headerRight.secondaryButton.headerText ||
                    "Add Form"
                  }
                  dialogWidth={
                    headerConfig?.headerRight?.secondaryButton?.dialogWidth
                  }
                  button={
                    <Button
                      variant="outlined"
                      startIcon={
                        !IconComponent ? (
                          <Add size={24} color={theme.palette.primary.main} />
                        ) : (
                          <IconComponent
                            size={24}
                            color={theme.palette.primary.main}
                          />
                        )
                      }
                    >
                      {headerConfig.headerRight.secondaryButton.label}
                    </Button>
                  }
                >
                  {headerConfig.headerRight.secondaryButton.component}
                </DialogButton>
              );
            })()}
          {headerConfig?.headerRight?.primaryButton &&
            (() => {
              const IconComponent =
                headerConfig.headerRight.primaryButton.startIcon || Add;

              return (
                <DialogButton
                  title={
                    headerConfig.headerRight.primaryButton.headerText ||
                    "Add Form"
                  }
                  dialogWidth={
                    headerConfig?.headerRight?.primaryButton?.dialogWidth
                  }
                  button={
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: theme.palette.primary.main }}
                      startIcon={
                        !IconComponent ? (
                          <Add size={24} color={theme.palette.grey[50]} />
                        ) : (
                          <IconComponent
                            size={24}
                            color={theme.palette.grey[50]}
                          />
                        )
                      }
                    >
                      {headerConfig.headerRight.primaryButton.label}
                    </Button>
                  }
                >
                  {headerConfig.headerRight.primaryButton.component}
                </DialogButton>
              );
            })()}
        </Stack>
      </Stack>
    </>
  );
};

export default TableHeader;
