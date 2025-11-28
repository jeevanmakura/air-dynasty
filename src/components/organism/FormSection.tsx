import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { ArrowDown2, Gallery } from "iconsax-react";
import type { FormFields } from "../../types/types";
import Switch from "../atom/Switch";

interface FormSectionProps {
  fields: FormFields[];
  form: Record<string, any>;
  disabled?: boolean;
  onChange: (name: string, value: any) => void;
}

export default function FormSection({
  fields,
  form,
  disabled,
  onChange,
}: FormSectionProps) {
  const theme = useTheme();

  return fields.map((field) => (
    <div
      key={field.name}
      className={`${field.type === "switch" ? "flex sm:col-span-2 items-center gap-2" : ""
        }`}
    >
      <Typography
        fontSize={field.type === "switch" ? 16 : 14}
        fontWeight={600}
        color={field.type === "switch" ? "text.secondary" : "text.primary"}
        maxWidth={"75%"}
        gutterBottom
      >
        {field.label}{" "}
        {field.required && <span style={{ color: "red" }}>*</span>}
      </Typography>

      {field.type === "switch" ? (
        <FormControl size="small" className="flex-1">
          <Switch
            value={form[field.name]}
            disabled={disabled}
            onChange={() => onChange(field.name, !form[field.name])}
          />
        </FormControl>
      ) : field.type === "select" ? (
        <FormControl fullWidth size="small">
          <Select
            value={form[field.name] || ""}
            displayEmpty
            onChange={(e) => onChange(field.name, e.target.value)}
            disabled={disabled}
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
      ) : field.type === "file" ? (
        <Box
          sx={{
            textAlign: "center",
            cursor: "pointer",
            width: "100%",
            mx: "auto",
            "&:hover": {
              opacity: 0.8,
              transition: "all 0.2s ease-in-out",
              borderColor: theme.palette.primary.main,
            },
          }}
          border={1}
          borderColor={theme.palette.divider}
          borderRadius={1}
          p={3.5}
        >
          {/* Hidden Input */}
          <input
            type="file"
            accept=".svg,.jpg,.png,.jpeg"
            id="upload-input"
            style={{ display: "none" }}
            onChange={(e) => onChange(field.name, e.target.files?.[0])}
          />

          {/* Clickable Wrapper */}
          <label htmlFor="upload-input">
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: alpha(theme.palette.error.main, 0.1),
                mb: 1,
                mx: "auto",
              }}
            >
              <Gallery size="24" color={theme.palette.error.main} />
            </Box>

            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 500, cursor: "pointer" }}
            >
              Click here to upload an image
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.5}
              fontFamily={"sans-serif"}
              fontWeight={500}
            >
              Supported Format: SVG, JPG, PNG (10 MB each)
            </Typography>
          </label>
        </Box>
      ) : (
        <TextField
          variant="outlined"
          fullWidth
          name={field.name}
          size="small"
          type={field.type}
          placeholder={field.placeholder}
          value={form[field.name] || ""}
          onChange={(e) => onChange(field.name, e.target.value)}
          InputLabelProps={field.type === "date" ? { shrink: true } : {}}
          disabled={disabled}

        />
      )}
    </div>
  ));
}
