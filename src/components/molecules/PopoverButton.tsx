import { Popover, useTheme, type ButtonProps } from "@mui/material";
import React, { cloneElement, isValidElement, useState, type ReactElement } from "react";

interface PopoverButtonProps {
  trigger: ReactElement<ButtonProps>;
  children:
  | React.ReactNode
  | ((args: { closePopover: () => void }) => React.ReactNode);
  activeBgColor?: string;
  activeIconColor?: string;
}

export default function PopoverButton({
  trigger,
  children,
  activeBgColor = "#C10308",
  activeIconColor = "#fff",
}: PopoverButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const open = Boolean(anchorEl);
  const id = open ? "bottom-right-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const clonedStartIcon = trigger.props.startIcon && isValidElement(trigger.props.startIcon)
    ? cloneElement(trigger.props.startIcon, ({
      color: open ? activeIconColor : (trigger.props.startIcon.props as any).color,
    } as any))
    : trigger.props.startIcon;

  const clonedChildren = trigger.props.children && isValidElement(trigger.props.children)
    ? cloneElement(trigger.props.children, ({
      color: open ? activeIconColor : (trigger.props.children.props as any).color,
    } as any))
    : trigger.props.children;

  const triggerWithVariant = cloneElement(trigger, {
    onClick: handleClick,
    sx: {
      ...((typeof trigger.props.sx === "function" ? trigger.props.sx(theme) : trigger.props.sx) ?? {}),
      backgroundColor: open ? activeBgColor : (trigger.props.sx as any)?.backgroundColor,
      color: open ? activeIconColor : (trigger.props.sx as any)?.color,
    },
    startIcon: clonedStartIcon,
    children: clonedChildren,
  });

  return (
    <>
      {triggerWithVariant}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {typeof children === "function"
          ? children({ closePopover: handleClose })
          : children}
      </Popover>
    </>
  );
}
