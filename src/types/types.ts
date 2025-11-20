import type { Icon } from "iconsax-react";

export interface MenuItem {
  label: string;
  icon: Icon | null;
  path: string;
  children?: MenuItem[];
}

export interface FormFields {
  label: string;
  name: string;
  type: string;
  required: boolean;
  defaultValue: string | number | boolean;
  placeholder: string;
  options?: string[];
}

export interface HeaderConfig {
  showHeader: boolean;
  headerLeftContent?: {
    showSearch: boolean;
    showFilter: boolean;
    showDelete: boolean;
  };
  headerRightContent?: {
    buttonFirst?: {
      headerText: string;
      label: string;
      path: string;
      component: React.ReactNode;
    };
    buttonSecond?: {
      headerText: string;
      label: string;
      path: string;
      component: React.ReactNode;
    };
  };
}
