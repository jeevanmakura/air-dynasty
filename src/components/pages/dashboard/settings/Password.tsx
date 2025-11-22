import { Box, Button, Stack, Typography } from "@mui/material";

import type { FormFields } from "../../../../types/types";
import FormSection from "../../../organism/FormSection";
import { useState } from "react";

let fields: FormFields[] = [
  {
    label: "Current Password",
    name: "currentPassword",
    type: "password",
    required: true,
    defaultValue: "",
    placeholder: "Enter current password",
  },
  {
    label: "New Password",
    name: "newPassword",
    type: "password",
    required: true,
    defaultValue: "",
    placeholder: "Enter new password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    required: true,
    defaultValue: "",
    placeholder: "Enter confirm password",
  },
];

const Password = () => {

  const [value] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [form, setForm] = useState(value);

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", form);
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5">Password</Typography>
          <Typography variant="subtitle2" color="text.grey">
            Please enter your current password to change your password.
          </Typography>
        </Box>
      </Stack>
      <Box mt={4} component={"form"} onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-y-6 gap-x-3.5 mt-8">
          <FormSection
            fields={fields}
            form={form}
            onChange={handleChange}
          />
        </div>
        <Box textAlign="right">
          <Button
            variant="contained"
            type="submit"
            size="medium"
            sx={{ mt: 4 }}
          >
            Update Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Password;
