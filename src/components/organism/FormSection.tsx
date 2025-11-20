import {
  Typography,
  TextField,
  MenuItem,
  FormControl,
  Select,
  useTheme,
} from "@mui/material";
import { ArrowDown2 } from "iconsax-react";
import type { FormFields } from "../../types/types";
import Switch from "../atom/Switch";

interface FormSectionProps {
  fields: FormFields[];
  form: Record<string, any>;
  onChange: (name: string, value: any) => void;
}

export default function FormSection({
  fields,
  form,
  onChange,
}: FormSectionProps) {
  const theme = useTheme();

  return fields.map((field) => (
    <div
      key={field.name}
      className={`${
        field.type === "switch" ? "flex col-span-2 items-center gap-2" : ""
      }`}
    >
      <Typography
        fontSize={field.type === "switch" ? 16 : 14}
        fontWeight={600}
        color={field.type === "switch" ? "text.secondary" : "text.primary"}
        mb={0.5}
      >
        {field.label}{" "}
        {field.required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      {field.type === "switch" ? (
        <FormControl size="small">
          <Switch
            value={form[field.name]}
            onChange={() => onChange(field.name, !form[field.name])}
          />
        </FormControl>
      ) : field.type === "select" ? (
        <FormControl fullWidth size="small">
          <Select
            value={form[field.name] || ""}
            displayEmpty
            onChange={(e) => onChange(field.name, e.target.value)}
            IconComponent={() => (
              <ArrowDown2 size={20} color={theme.palette.text.primary} />
            )}
            renderValue={(value) =>
              value === "" ? (
                <span style={{ color: theme.palette.text.secondary }}>
                  {field.placeholder || `Select ${field.label}`}
                </span>
              ) : (
                value
              )
            }
          >
            <MenuItem value=""> </MenuItem>
            {field.options?.map((opt: string) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          type={field.type}
          placeholder={field.placeholder}
          value={form[field.name] || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          InputLabelProps={field.type === "date" ? { shrink: true } : {}}
        />
      )}
    </div>
  ));
}
