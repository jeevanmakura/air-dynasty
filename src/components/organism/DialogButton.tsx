import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  useTheme,
} from "@mui/material";
import { CloseCircle } from "iconsax-react";
import React, { cloneElement, useState, type ReactElement } from "react";

const DialogButton = ({
  title,
  button,
  dialogWidth = "sm",
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
        disableEnforceFocus
        //rouded corners
        slotProps={{
          paper: {
            style: {
              borderRadius: "24px",
              border: `8px solid ${theme.palette.background.default}`,

            },
          },

        }}
        sx={{
          p: 0,
          "& .MuiDialog-paper": {
            margin: {
              xs: "12px",
              sm: "24px",
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

        <DialogContent sx={{
          p: {
            xs: 2,
            md: 3
          }
        }}>
          {children &&
            React.isValidElement(children) &&
            React.cloneElement(
              children as ReactElement<{ setOpen: (val: boolean) => void }>,
              { setOpen }
            )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogButton;
