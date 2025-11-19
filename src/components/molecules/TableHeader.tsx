import {
  alpha,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Add, ArrowForward, Filter, Grid1, Trash } from "iconsax-react";
import SearchBox from "./SearchBox";
import ButtonDialog from "../organism/ButtonDialog";

const TableHeader = ({
  searchValue,
  onSearchChange,
  table,
}: {
  searchValue: string;
  table: any;
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
          <SearchBox value={searchValue} onChange={onSearchChange} />
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
          <ButtonDialog
            title="Delete row"
            button={
              <Button
                variant="outlined"
                disabled={!isRowSelected}
                sx={{
                  borderColor: isRowSelected
                    ? theme.palette.primary.main
                    : theme.palette.secondary.light,
                  color: theme.palette.text.grey,
                  px: 1.5,
                }}
              >
                <Trash
                  size={20}
                  color={
                    isRowSelected
                      ? theme.palette.primary.main
                      : theme.palette.text.grey
                  }
                />
              </Button>
            }
          >
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              mb={3}
            >
              <Box
                sx={{
                  height: 64,
                  width: 64,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                }}
              >
                <Grid1
                  size={40}
                  variant="Bold"
                  color={theme.palette.primary.main}
                />
              </Box>
              <Typography variant="h5" fontWeight="semibold" marginTop={1}>
                Delete Row of the Table
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="semibold"
                color="text.secondary"
              >
                Are you sure you want to delete row of table?
              </Typography>
            </Stack>
          </ButtonDialog>
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
        </Stack>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
          startIcon={<Add size={24} color={theme.palette.text.white} />}
        >
          Add Flights
        </Button>
      </Stack>
    </>
  );
};

export default TableHeader;
