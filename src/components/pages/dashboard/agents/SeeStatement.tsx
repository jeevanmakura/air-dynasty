import {
  alpha,
  Box,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DocumentUpload, UserOctagon } from "iconsax-react";
import useFetchTable from "../../../../hook/useFetchTable";
import type { TableConfig } from "../../../../types/types";
import { parseNumber } from "../../../../utils/helper";
import BaseTable from "../../../organism/BaseTable";
import Email from "../component/dialogebox/Email";

const tableData = [
  {
    date: "24th March, 2024",
    particulars: "Opening balance",
    debits: "34,000",
    credits: "89",
  },
  {
    date: "24th June, 2025",
    particulars: "KTM–Lukla",
    debits: "34,000",
    credits: "89",
  },
  {
    date: "25th May, 2025",
    particulars: "KTM–EBC",
    debits: "34,000",
    credits: "89",
  },
];

const SeeStatement = () => {
  const theme = useTheme();

  const customHeaders = {
    date: "Date",
    particulars: "Particulars",
    debits: "Debits",
    credits: "Credits",
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
  });

  const totalDebits = rowData
    .reduce((sum, item) => sum + parseNumber(item.debits), 0)
    .toLocaleString("en-IN");
  const totalCredits = rowData
    .reduce((sum, item) => sum + parseNumber(item.credits), 0)
    .toLocaleString("en-IN");

  const headerConfig: TableConfig = {
    showHeader: true,
    showFooter: false,
    headerLeft: {
      isCustomSearch: true,
      showSearch: false,
      showFilter: false,
      showDelete: false,
    },
    headerRight: {
      primaryButton: {
        headerText: "Export All",
        label: "Export All",
        startIcon: DocumentUpload,
        path: "/",
        component: <Email />,
        dialogWidth: "sm",
      },
      secondaryButton: {
        headerText: "Reservation Email",
        label: "Send statement on Email",
        startIcon: DocumentUpload,
        path: "/",
        component: <Email />,
        dialogWidth: "sm",
      },
    },
  };
  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={1} mb={3}>
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
          <UserOctagon
            size={40}
            variant="Bold"
            color={theme.palette.primary.main}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            See Statement
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="semibold"
            color="text.secondary"
          >
            Check out to see statement.
          </Typography>
        </Box>
      </Stack>
      <Divider
        sx={{
          borderWidth: 1,
          mb: 3,
        }}
      />
      <BaseTable
        data={rowData}
        columns={columns}
        heaaderConfig={headerConfig}
      />
      {/* ----------------- TOTAL ROW ----------------- */}
      <Box
        component={"div"}
        bgcolor={alpha(theme.palette.primary.main, 0.1)}
        borderRadius={1}
      >
        <Box
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: "error.lighter",
            borderRadius: 2,
            color: "text.black",
            fontWeight: 500,
          }}
          className="flex justify-between"
        >
          <Typography className="w-1/2">Total</Typography>
          <Box className="flex-1 grid grid-cols-2">
            <Typography className="text-end">${totalDebits}</Typography>
            <Typography className="text-center">${totalCredits}</Typography>
          </Box>
        </Box>

        {/* ----------------- PAYABLE ROW ----------------- */}
        <Box
          sx={{
            mt: 1,
            p: 2,
            borderRadius: 1,
            border: "2px solid",
            borderColor: "error.main",
            fontWeight: 500,
            color: "text.black",
          }}
          className="flex justify-between"
        >
          <Typography className="w-1/2">
            Total payable to Air dynasty
          </Typography>
          <Box className="flex-1 grid grid-cols-2">
            <Typography className="text-end">${totalDebits}</Typography>
            <Typography className="text-center">${totalCredits}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SeeStatement;
