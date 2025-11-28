import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { UserOctagon } from "iconsax-react";
import { useEffect, useState } from "react";
import { showToast } from "../../../../../slice/toastSlice";
import { useAppDispatch } from "../../../../../store/hook";
import type { FormFields } from "../../../../../types/types";
import ButtonWithBackground from "../../../../atom/ButtonWithBackground";
import FormSection from "../../../../organism/FormSection";

const fields: FormFields[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter name of the user",
  },
  {
    label: "Role",
    name: "role",
    type: "select",
    required: true,
    placeholder: "Enter the description",
    defaultValue: "",
    options: ["Admin", "User"],
  },

  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    defaultValue: "",
    placeholder: "Enter email address",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
    defaultValue: "",
    placeholder: "Enter password",
  },
];

const AddUser = ({
  isEdit,
  data,
  setOpen,
}: {
  isEdit?: boolean;
  data?: any;
  setOpen?: (open: boolean) => void;
}) => {
  const [form, setForm] = useState<Record<string, any>>(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: f.defaultValue }), {})
  );

  const dispatc = useAppDispatch();

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", form);
    dispatc(
      showToast({
        message: "Statement added successfully",
        severity: "success",
      }),
    );
    setOpen && setOpen(false);
  };

  const theme = useTheme();

  useEffect(() => {
    if (isEdit && data) {
      const newForm = fields.reduce((acc, f) => {
        acc[f.name] = data[f.name] ?? f.defaultValue;
        return acc;
      }, {} as Record<string, any>);

      setForm(newForm);
    }
  }, [isEdit, data]);

  return (
    <Box component="section">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <ButtonWithBackground>
            <UserOctagon
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
              Add User
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fill in the form to add a user.
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
          my={3}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen && setOpen(false)}
            sx={{
              borderColor: theme.palette.secondary.light,
              color: theme.palette.grey[700],
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

export default AddUser;
