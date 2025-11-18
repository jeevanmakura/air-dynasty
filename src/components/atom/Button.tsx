import Button from "@mui/material/Button";

export default function AtomButton({
  startIcon,
  label,
}: {
  startIcon?: React.ReactNode;
  label?: string;
}) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="outlined"
      tabIndex={-1}
      startIcon={startIcon || null}
    >
      {label || "Button"}
    </Button>
  );
}
