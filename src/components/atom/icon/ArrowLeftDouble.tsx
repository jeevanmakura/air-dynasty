import { useTheme } from "@mui/material";

const ArrowLeftDouble = ({
  size,
  color,
}: {
  size?: number;
  color?: string;
}) => {
  const theme = useTheme();
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.74995 11.62L4.94662 7.81667C4.49745 7.3675 4.49745 6.6325 4.94662 6.18334L8.74995 2.38"
        stroke={theme.palette.text.primary || color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.75 11.62L10.9466 7.81667C10.4974 7.3675 10.4974 6.6325 10.9466 6.18334L14.75 2.38"
        stroke={theme.palette.text.primary || color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftDouble;
