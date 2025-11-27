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
    label: "Amount",
    name: "amount",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Amount",
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
    label: "Payement Mode",
    name: "payment_mode",
    type: "select",
    required: true,
    defaultValue: "",
    placeholder: "Select Payement Mode",
    options: ["Online", "Cash"],
  },

  {
    label: "Remarks",
    name: "remarks",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Remarks",
  },
];

const AddStatement = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
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
    setOpen && setOpen(false);
    dispatch(
      showToast({
        message: "Statement added successfully",
        severity: "success",
      }),
    );
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
      <Divider
        sx={{
          borderWidth: 1,
          mt: 2,
        }}
      />
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
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
          mt={3}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen && setOpen(false)}
            sx={{
              borderColor: theme.palette.secondary.light,
              color: theme.palette.grey[400],
              px: 3,
              borderRadius: 1.5,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ px: 3, borderRadius: 1.5 }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddStatement;
