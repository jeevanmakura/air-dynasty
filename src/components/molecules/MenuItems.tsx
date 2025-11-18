import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const MenuItems = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  const { t } = useTranslation();
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={t(label)} />
      </ListItemButton>
    </ListItem>
  );
};

export default MenuItems;
