import { styled } from "@mui/material/styles";
import MuiSwitch from "@mui/material/Switch";

const Switch = styled(MuiSwitch)(({ theme }) => ({
  width: 75,
  height: 24,
  padding: 0,
  position: "relative",

  "& .MuiSwitch-switchBase": {
    padding: 4,
    zIndex: 2,
    "&.Mui-checked": {
      transform: "translateX(52px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        border: "none",
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    backgroundColor: theme.palette.text.light,
    transition: "background-color 0.2s",
    opacity: 1,
  },

  "& .Mui-checked .MuiSwitch-thumb": {
    backgroundColor: "white",
  },

  "& .MuiSwitch-track": {
    borderRadius: 30,
    backgroundColor: "white",
    border: `1px solid black`,
    position: "relative",
    transition: "all .2s",

    "&::before": {
      content: '"NO"',
      position: "absolute",
      left: "calc(50% - 12px)",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#000",
      fontSize: 12,
      fontWeight: 500,
      opacity: 1,
      transition: "opacity .2s",
    },

    "&::after": {
      content: '"YES"',
      position: "absolute",
      right: "calc(50% - 12px)",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      fontSize: 12,
      fontWeight: 500,
      opacity: 0,
      transition: "opacity .2s",
    },
  },

  "& .Mui-checked + .MuiSwitch-track": {
    opacity: 1,
    "&::before": { opacity: 0 },
    "&::after": { opacity: 1 },
  },

  ".Mui-disabled": {
    opacity: 1,
  },
}));

export default Switch;
