import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Airplane } from "iconsax-react";
import { useState } from "react";
import { showToast } from "../../../../../slice/toastSlice";
import { useAppDispatch } from "../../../../../store/hook";
import type { FormFields } from "../../../../../types/types";
import ButtonWithBackground from "../../../../atom/ButtonWithBackground";
import FormSection from "../../../../organism/FormSection";

const fields: FormFields[] = [
  {
    label: "Sector",
    name: "sector",
    type: "select",
    required: true,
    placeholder: "Select Sector",
    defaultValue: "",
    options: [],
  },
  {
    label: "Agents",
    name: "agents",
    type: "select",
    required: true,
    placeholder: "Select Agents",
    defaultValue: "",
    options: [],
  },
  {
    label: "Date",
    name: "date",
    type: "date",
    required: true,
    placeholder: "Select Date",
    defaultValue: "",
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    required: true,
    placeholder: "Enter Price",
    defaultValue: "",
  },
  {
    label: "No. of Pax",
    name: "pax",
    type: "select",
    required: true,
    placeholder: "Select Pax",
    defaultValue: "",
    options: ["1", "2", "3", "4", "5", "6+"],
  },
  {
    label: "Balance",
    name: "balance",
    type: "number",
    required: true,
    placeholder: "Enter Balance",
    defaultValue: "",
  },
  {
    label: "Adv. RCVD",
    name: "adv_rcvd",
    type: "number",
    required: true,
    placeholder: "Enter Adv. RCVD",
    defaultValue: "",
  },
  {
    label: "Remarks",
    name: "remarks",
    type: "text",
    required: true,
    placeholder: "Enter Remarks",
    defaultValue: "",
  },
];


const AddAdHocForm = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
  const [form, setForm] = useState<Record<string, any>>(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: f.defaultValue }), {})
  );

  const dispatch = useAppDispatch();

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", form);
    dispatch(
      showToast({
        message: "Statement added successfully",
        severity: "success",
      }),
    );
    setOpen && setOpen(false);
  };

  const theme = useTheme();

  return (
    <Box component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <ButtonWithBackground>
            <Airplane
              size={40}
              color={theme.palette.primary.main}
              variant="Bold"
            />
          </ButtonWithBackground>
          <Stack spacing={0.5}>
            <Typography
              variant="h5"
              fontWeight="bold"
              fontFamily={"sans-serif"}
            >
              Add Statement
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fill in the form to add statement.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-3.5">
          <FormSection fields={fields} form={form} onChange={handleChange} />
        </div>
        <Divider
          sx={{
            borderWidth: 1,
            mt: 4,
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          gap={1.5}
          px={2}
          my={3}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen && setOpen(false)}
            sx={{
              borderColor: theme.palette.secondary.light,
              color: theme.palette.grey[600],
              px: 3,
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ px: 3 }}>
            Confirm
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddAdHocForm;
