import { Box, Button, Divider, IconButton, Stack } from "@mui/material";
import FormSection from "../../../../organism/FormSection";
import type { FormFields } from "../../../../../types/types";
import { Add, CloseCircle, Trash } from "iconsax-react";

const passengerFields: FormFields[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Name",
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    defaultValue: "",
    placeholder: "Enter Email Address",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "tel",
    required: true,
    defaultValue: "",
    placeholder: "Enter Phone Number",
  },
  {
    label: "Nationality",
    name: "nationality",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Nationality",
  },
  {
    label: "Passport Number",
    name: "passport",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Passport Number",
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    required: true,
    defaultValue: "",
    placeholder: "Select Date of Birth",
  },
  {
    label: "Weight",
    name: "weight",
    type: "number",
    required: true,
    defaultValue: "",
    placeholder: "Select Weight",
  },
];

interface Props {
  index: number;
  passenger: Record<string, any>;
  onChange: (index: number, name: string, value: any) => void;
  onRemove: (index: number) => void;
  onAdd: () => void;
  isLast: boolean;
}

const AddPassenger = ({
  index,
  passenger,
  onChange,
  onRemove,
  onAdd,
  isLast,
}: Props) => {
  const handleFieldChange = (name: string, value: any) => {
    onChange(index, name, value);
  };

  return (
    <Box
      sx={{
        mt: 3.5,
        position: "relative",
      }}
    >
      {/* Passenger Form */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-3.5">
        <FormSection
          fields={passengerFields}
          form={passenger}
          onChange={handleFieldChange}
        />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="end"
          spacing={2}
        >
          <Button
            variant="contained"
            onClick={() => onRemove(index)}
            size="small"
            sx={{
              px: 1.25,
              color: "white",
            }}
            startIcon={<Trash size={18} color={"#fff"} />}
          >
            <span className="text-xs">Remove</span>
          </Button>

          {isLast && (
            <Button
              variant="contained"
              onClick={onAdd}
              size="small"
              sx={{
                color: "white",
                px: 1.25,
              }}
              startIcon={<Add size={18} color={"#fff"} />}
            >
              <span className="text-xs">Add a passenger</span>
            </Button>
          )}
        </Stack>
      </div>
      {!isLast && <Divider sx={{ borderWidth: 1, mt: 4 }} />}
      {index !== 0 && <Divider sx={{ borderWidth: 1, mt: 2 }} />}
    </Box>
  );
};

export default AddPassenger;
