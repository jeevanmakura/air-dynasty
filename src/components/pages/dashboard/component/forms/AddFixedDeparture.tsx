import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import { Add, Airplane } from "iconsax-react";
import ButtonWithBackground from "../../../../atom/ButtonWithBackground";
import FormSection from "../../../../organism/FormSection";
import AddPassenger from "./AddPassenger";
import type { FormFields } from "../../../../../types/types";

const flightFields: FormFields[] = [
  {
    label: "Sector",
    name: "sector",
    type: "select",
    required: true,
    defaultValue: "",
    placeholder: "Select Sector",
    options: ["Sector 1", "Sector 2"],
  },
  {
    label: "Agents",
    name: "agents",
    type: "select",
    required: true,
    defaultValue: "",
    placeholder: "Select Agents",
    options: ["Agent 1", "Agent 2"],
  },
  {
    label: "Date",
    name: "date",
    type: "date",
    required: true,
    defaultValue: "",
    placeholder: "Select Date",
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    required: true,
    defaultValue: "",
    placeholder: "Enter Price",
  },
  {
    label: "No. of Pax",
    name: "pax",
    type: "select",
    required: true,
    defaultValue: "",
    placeholder: "Select Pax",
    options: ["1", "2", "3"],
  },
  {
    label: "Balance",
    name: "balance",
    type: "number",
    required: true,
    defaultValue: "",
    placeholder: "Enter Balance",
  },
  {
    label: "Adv. RCVD",
    name: "advance_received",
    type: "number",
    required: true,
    defaultValue: "",
    placeholder: "Enter Adv. RCVD",
  },
  {
    label: "Remarks",
    name: "remarks",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter Remarks",
  },
  {
    label: "Do you want to approve this request?",
    name: "is_approved",
    type: "switch",
    required: false,
    defaultValue: false,
    placeholder: "",
  },
];

const AddFixedDeparture = () => {
  const theme = useTheme();

  // Main form state with passengers nested
  const [form, setForm] = useState<Record<string, any>>({
    ...flightFields.reduce(
      (acc, f) => ({ ...acc, [f.name]: f.defaultValue }),
      {}
    ),
    //initially passengers are empty
    passengers: [], // initial passenger
  });

  // Handle main flight field changes
  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle passenger field changes
  const handlePassengerChange = (index: number, name: string, value: any) => {
    setForm((prev) => {
      const updatedPassengers = [...prev.passengers];
      updatedPassengers[index][name] = value;
      return { ...prev, passengers: updatedPassengers };
    });
  };

  // Add new passenger
  const addPassenger = () => {
    setForm((prev) => ({
      ...prev,
      passengers: [...prev.passengers, { name: "", age: "" }],
    }));
  };

  // Remove a passenger
  const removePassenger = (index: number) => {
    setForm((prev) => ({
      ...prev,
      passengers: prev.passengers.filter((_: any, i: number) => i !== index),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED:", form);
  };

  return (
    <Box component="section">
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <ButtonWithBackground>
            <Airplane
              size={40}
              color={theme.palette.primary.main}
              variant="Bold"
            />
          </ButtonWithBackground>
          <Stack spacing={0.5}>
            <Typography variant="h5" fontWeight="bold">
              Fixed Departures
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fill in the form to add/ request for a Fixed Departures
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Form */}
      <Box component="form" onSubmit={handleSubmit} mt={3.5}>
        <div className="grid grid-cols-2 gap-y-6 gap-x-3.5">
          <FormSection
            fields={flightFields}
            form={form}
            onChange={handleChange}
          />
        </div>

        {/* Passengers */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          mt={4}
        >
          <Stack
            direction="row"
            alignItems="center"
            alignSelf="center"
            spacing={2}
          >
            <ButtonWithBackground size={46}>
              <Airplane
                size={22}
                color={theme.palette.primary.main}
                variant="Bold"
              />
            </ButtonWithBackground>
            <Stack spacing={0.5}>
              <Typography variant="h6" fontWeight="bold">
                Passenger Details
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                Fill in the form to add a new passenger to the flight.
              </Typography>
            </Stack>
          </Stack>

          {form.passengers.length! === 0 && (
            <Button
              variant="contained"
              onClick={addPassenger}
              size="small"
              sx={{
                color: "white",
              }}
              startIcon={<Add size={18} color={"#fff"} />}
            >
              <span className="text-xs">Add Passenger</span>
            </Button>
          )}
        </Stack>
        <Divider sx={{ borderWidth: 1 }} />
        {form.passengers.map((passenger: any, index: number) => (
          <AddPassenger
            key={index}
            index={index}
            passenger={passenger}
            onChange={handlePassengerChange}
            onRemove={removePassenger}
            onAdd={addPassenger}
            isLast={index === form.passengers.length - 1}
          />
        ))}

        <Divider sx={{ borderWidth: 1, mt: 4 }} />

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

export default AddFixedDeparture;
