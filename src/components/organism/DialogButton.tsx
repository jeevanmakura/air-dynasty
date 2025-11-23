import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import { CloseCircle } from "iconsax-react";
import { cloneElement, useState } from "react";

const DialogButton = ({
  title,
  button,
  dialogWidth = "md",
  children,
}: {
  title?: string;
  button?: React.ReactNode;
  dialogWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  // clone button to inject onClick
  const TriggerButton = () =>
    button &&
    // add open dialog behavior
    // @ts-ignore
    cloneElement(button, {
      onClick: () => setOpen(true),
    });

  const theme = useTheme();

  return (
    <>
      <TriggerButton />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth={dialogWidth}
        //rouded corners
        slotProps={{
          paper: {
            style: {
              borderRadius: "24px",
              border: `8px solid ${theme.palette.background.default}`,
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pr: 5,
            color: theme.palette.text.secondary,
          }}
          variant="subtitle2"
        >
          {title}

          {/* Close Icon */}
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseCircle
              variant="Bold"
              size={24}
              color={theme.palette.primary.main}
            />
          </IconButton>
        </DialogTitle>
        <Divider />

        <DialogContent>{children}</DialogContent>
        {/* <Divider
          sx={{
            borderWidth: 1,
            mx: 2,
          }}
        />
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
            onClick={() => setOpen(false)}
            sx={{
              borderColor: theme.palette.secondary.light,
              color: theme.palette.text.grey,
              px: 3,
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ px: 3 }}>
            Confirm
          </Button>
        </Stack> */}
      </Dialog>
    </>
  );
};

export default DialogButton;
