import { alpha, Box, Divider, Typography, useTheme } from "@mui/material";
import { ArrowRight } from "iconsax-react";
import { Link } from "react-router-dom";
const FinanceCard = () => {
  const theme = useTheme();
  return (
    <Box
      component={"div"}
      className="col-span-1 p-6"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          borderRadius: 1,
          color: theme.palette.primary.main,
          fontSize: theme.typography.h5.fontSize,
          fontWeight: 600,
          p: 2,
        }}
      >
        Sundry,s Debtors
      </Typography>
      <Box component={"ul"}>
        <Box
          component={"li"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            mx: 1,
            borderBottom: `2px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "text.primary",
            }}
          >
            Todays Date
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              fontStyle: "normal",
              color: "text.primary",
            }}
          >
            29-October-2025
          </Typography>
        </Box>
        <Box
          component={"li"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            mx: 1,
            borderBottom: `2px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "text.primary",
            }}
          >
            Payement Collected
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              fontStyle: "normal",
              color: "text.primary",
            }}
          >
            Rs 0
          </Typography>
        </Box>
        <Box
          component={"li"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            mx: 1,
            borderBottom: `2px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "text.primary",
            }}
          >
            Total Flights
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              fontStyle: "normal",
              color: "text.primary",
            }}
          >
            0
          </Typography>
        </Box>
        <Box
          component={"li"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
            mx: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "text.primary",
            }}
          >
            Total Sales
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 16,
              fontStyle: "normal",
              color: "text.primary",
            }}
          >
            Rs 0
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ mb: 2, borderWidth: 1 }} />
      <Box
        component={"div"}
        className="text-end"
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        <Link
          to="/finance/details"
          className={`text-[16px] font-semibold inline-flex items-center gap-2 `}
        >
          View More <ArrowRight size={24} color={theme.palette.primary.main} />
        </Link>
      </Box>
    </Box>
  );
};

export default FinanceCard;
