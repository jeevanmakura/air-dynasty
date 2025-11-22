import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { Monitor } from "iconsax-react";
import { Link } from "react-router-dom";

const Security = () => {
  const theme = useTheme();
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h5">Security</Typography>
          <Typography variant="subtitle2" color="text.grey">
            All of your active sessions are lsited below. End any sessions you
            dont recognize or trust.
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ my: 1.5 }} />
      {/* //table  */}
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "& td, & th": { borderBottom: "none" },
            }}
          >
            <TableCell
              sx={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Location & Ip
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Os & Browser
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Lass accessed
            </TableCell>
            <TableCell
              sx={{
                fontFamily: "sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "text.secondary",
              }}
            >
              Manage Devices
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 2 }).map((_, index) => (
            <TableRow
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { borderBottom: "none" },
              }}
            >
              <TableCell>
                <Stack direction="row" alignItems="start" spacing={1}>
                  <Monitor size={24} color={theme.palette.text.black} />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: theme.palette.text.black,
                        fontSize: 16,
                      }}
                    >
                      Kathmandu, Nepal
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: 500 }}
                      color="text.grey"
                    >
                      App 127.0.0.1
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  color="text.black"
                >
                  Windows 10
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  color="text.black"
                >
                  Just now
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500 }}
                  color="text.grey"
                >
                  Created 2 days ago
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 500 }}
                  color="primary.main"
                >
                  <Link to="#">Sign out</Link>
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Security;
