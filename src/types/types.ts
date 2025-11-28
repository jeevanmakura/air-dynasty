import type { Icon } from "iconsax-react";

export interface MenuItem {
  label: string;
  icon: Icon | null;
  path: string;
  children?: MenuItem[];
  permissions?: string[];
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

export interface TableConfig {
  showHeader?: boolean;
  showFooter?: boolean;
  headerLeft?: {
    isCustomSearch?: boolean;
    showSearch: boolean;
    showFilter: boolean;
    showDelete: boolean;
  };
  headerRight?: {
    secondaryButton?: {
      headerText: string;
      label: string;
      startIcon?: Icon;
      path: string;
      component: React.ReactNode;
      dialogWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    };
    primaryButton?: {
      headerText: string;
      label: string;
      startIcon?: Icon;
      path: string;
      component: React.ReactNode;
      dialogWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    };
  };
}
