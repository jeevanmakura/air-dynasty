import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { Edit2 } from "iconsax-react";
import { useState } from "react";
import type { FormFields } from "../../../../types/types";
import FormSection from "../../../organism/FormSection";

let fields: FormFields[] = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter name of the user",
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
    label: "Date of Birth",
    name: "dob",
    type: "date",
    required: true,
    placeholder: "Enter date of birth",
    defaultValue: "",
  },

  {
    label: "Address",
    name: "address",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter address",
  },
];

const Profile = () => {
  const theme = useTheme();
  const [edit, setEdit] = useState(false);

  const [value] = useState({
    name: "Jeevan",
    email: "jeevan@jeevan.com",
    dob: "2023-01-01",
    address: "nepal",
  });

  const [form, setForm] = useState(value);

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", form);
    setEdit(false);
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box component={"div"}>
          <Typography variant="h5">Profile</Typography>
          <Typography variant="subtitle2" color="text.gray">
            Check your information and make changes when needed.
          </Typography>
        </Box>

        <Button
          variant="contained"
          size="medium"
          startIcon={<Edit2 size={24} color={theme.palette.text.white} />}
          onClick={() => setEdit(!edit)}
          sx={{
            minWidth: "max-content",
          }}
        >
          Edit Profile
        </Button>
      </Stack>
      <Box mt={4} component={"form"} onSubmit={handleSubmit}>
        <Box className="h-28 w-28 relative rounded-full bg-amber-300">
          <input
            name="image"
            placeholder=""
            type="file"
            accept="image/*"
            aria-label="Upload image"
            className="absolute inset-0 opacity-0 cursor-pointer rounded-full overflow-hidden z-20"
            onChange={() => { }}
            disabled
          />

          <img
            src="/assets/user.jpg"
            alt="user"
            className="h-full w-full object-cover rounded-full overflow-hidden shadow-md"
          />

          <Edit2
            size={32}
            color={theme.palette.primary.main}
            variant="Bold"
            className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md z-10"
          />
        </Box>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-3.5 mt-8">
          <FormSection
            fields={fields}
            form={form}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        {edit && (
          <Box textAlign="right">
            <Button
              variant="contained"
              type="submit"
              size="medium"
              sx={{ mt: 4 }}
            >
              Save Changes
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Profile;
