import { Box, Card, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export interface DataCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const DataCard = ({ icon: Icon, title, subtitle, children }: DataCardProps) => {
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;
  return (
    <Card sx={{ p: 2, bgcolor: "background.paper", height: "100%" }}>
      <Stack direction="column" spacing={1}>
        {/* Icon + Title */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {Icon && <Icon size={24} color={iconColor} variant="Bold" />}
          <Typography variant="h6" fontWeight="semibold">
            {title}
          </Typography>
        </Stack>

        {/* Subtitle */}
        <Typography
          variant="subtitle2"
          fontWeight={400}
          fontSize={14}
          color="text.secondary"
        >
          {subtitle}
        </Typography>

        {children && <Box mt={1}>{children}</Box>}
      </Stack>
    </Card>
  );
};

export default DataCard;
