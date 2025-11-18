import type { Icon } from "iconsax-react";

export interface MenuItem {
  label: string;
  icon: Icon | null;
  path: string;
  children?: MenuItem[];
}
