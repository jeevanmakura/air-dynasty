import { alpha, Box, useTheme } from "@mui/material";

const ButtonWithBackground = ({
  bgColor,
  size = 64,
  children,
}: {
  bgColor?: string;
  size?: number;
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={alpha(bgColor || theme.palette.primary.main, 0.1)}
      sx={{
        height: size,
        width: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
    >
      {children}
    </Box>
  );
};

export default ButtonWithBackground;
