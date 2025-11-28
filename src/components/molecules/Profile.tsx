import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();

  const handleUserChange = (role: string) => {
    const user = { name: "Jems Kumar", role };
    localStorage.setItem("activeUser", JSON.stringify(user));

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <Box component={"div"} className="px-3 min-w-40">
      <Typography variant="h6" className="py-2 text-center">
        Jems Kumar
      </Typography>
      <Divider sx={{ m: 0 }} />
      <Box component={"div"} className="flex flex-col gap-2 py-2">
        <Button variant="text">
          <Link to="/profile" className="text-black">
            Profile
          </Link>
        </Button>
        <Button>
          <Link to="/logout" className={`text-[${theme.palette.primary.main}]`}>
            Logout
          </Link>
        </Button>
        <Button onClick={() => handleUserChange("admin")}>
          Admin Dashboard
        </Button>
        <Button onClick={() => handleUserChange("agent")}>
          Agent Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
