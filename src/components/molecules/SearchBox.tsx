import { TextField, InputAdornment, Box } from "@mui/material";
import { Command, SearchNormal1 } from "iconsax-react";

export default function SearchBox({
  value,
  onChange,
  hasEndAdornment = false,
}: {
  hasEndAdornment?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <TextField
      placeholder="Search..."
      size="small"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      sx={{
        width: 330,
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: "4px",
        overflow: "hidden",

        "& .MuiInputBase-root": {
          "& svg": {
            stroke: "#919193",
            color: "#919193",
            transition: "color 0.2s, stroke 0.2s",
          },

          "&.Mui-focused svg": {
            stroke: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.main,
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchNormal1 size="16" />
          </InputAdornment>
        ),

        endAdornment: hasEndAdornment && (
          <InputAdornment position="end">
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                padding: "2px 4px",
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "4px",
                transition: "all 0.2s",

                "& svg": {
                  color: theme.palette.text.primary,
                  transition: "color 0.2s",
                },

                // highlight when TextField is focused
                ".Mui-focused &": {
                  borderColor: theme.palette.primary.main,
                },

                ".Mui-focused & svg": {
                  color: theme.palette.primary.main,
                },

                ".Mui-focused & span": {
                  color: theme.palette.primary.main,
                },
              })}
            >
              <Command size={12} />
              <span className="text-xs">K</span>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
}
