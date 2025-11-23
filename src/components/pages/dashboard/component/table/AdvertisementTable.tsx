import DataCard from "../../../../molecules/DataCard";

import BaseTable from "../../../../organism/BaseTable";
import useFetchTable from "../../../../../hook/useFetchTable";
import { useMemo } from "react";
import { alpha, IconButton, Stack, useTheme } from "@mui/material";
import { Edit2, Trash } from "iconsax-react";
import type { TableConfig } from "../../../../../types/types";
import DialogButton from "../../../../organism/DialogButton";
import DeleteBox from "../dialogebox/DeleteBox";
import DetailView from "../dialogebox/DetailView";
import AddAdvertisement from "../forms/AddAdvertisement";

const tableData = [
  {
    sn: 1,
    ad_name: "Saikush PSD",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "visible",
  },
  {
    sn: 2,
    ad_name: "Saikush PSD",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    status: "invisible",
  },
];

const AdvertisementTable = () => {
  const theme = useTheme();

  const customHeaders = {
    sn: "SN",
    ad_name: "Name",
    image: "Image",
    status: "Status",
  };

  const customRenderer = {
    status: (info: any) => {
      const value: string = info.getValue();

      if (!value) {
        return <span>-</span>;
      }

      const map: Record<string, { color: string }> = {
        visible: {
          color: theme.palette.success.light,
        },

        invisible: {
          color: theme.palette.error.main,
        },
      };

      const config = map[value];

      // Fallback (if value doesn't match any key)
      if (!config) return <span>{value}</span>;

      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: 500,
            backgroundColor: alpha(config.color, 0.15),
            color: config.color,
            textTransform: "capitalize",
            fontSize: "0.8rem",
            fontFamily: "sans-serif",
          }}
        >
          {value.replace("-", " ")}
        </span>
      );
    },
    image: (info: any) => {
      return (
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
        >
          <img
            src={info.getValue()}
            alt="profile"
            style={{
              width: "32px",
              height: "24px",
              objectFit: "cover",
              borderRadius: "2px",
            }}
          />
          <span>image.jpg</span>
        </span>
      );
    },
  };

  const { rowData, columns } = useFetchTable({
    data: tableData,
    columnsToHide: [],
    customHeaders,
    customRenderer,
  });

  const ActionField = ({ rowData }: { rowData: any }) => (
    <Stack direction="row" spacing={1}>
      <IconButton size="small">
        <DialogButton
          title="View Request List's Details"
          button={
            <Edit2 size={24} color={theme.palette.grey[400]} variant="Bold" />
          }
        >
          {/* only send clicked row data */}
          <DetailView data={rowData} />
        </DialogButton>
      </IconButton>
      <IconButton size="small">
        <DialogButton
          title="Delete row"
          button={
            <Trash size={24} color={theme.palette.grey[400]} variant="Bold" />
          }
        >
          <DeleteBox />
        </DialogButton>
      </IconButton>
    </Stack>
  );

  const finalColumns = useMemo(
    () => [
      ...columns,
      {
        header: "Actions",
        accessorKey: "actions",
        cell: (cellInfo: any) => (
          <ActionField rowData={cellInfo.row.original} />
        ),
      },
    ],
    [columns]
  );

  const headerConfig: TableConfig = {
    showHeader: true,
    headerLeft: {
      showSearch: true,
      showFilter: true,
      showDelete: true,
    },

    headerRight: {
      primaryButton: {
        headerText: "Advertisement Creation",
        label: "Add Advertisement",
        path: "/dashboard/advertisements",
        component: <AddAdvertisement />,
      },
    },
  };

  return (
    <DataCard isHeader={false}>
      <div className="mt-">
        <BaseTable
          data={rowData}
          columns={finalColumns}
          perPage={8}
          heaaderConfig={headerConfig}
        />
      </div>
    </DataCard>
  );
};

export default AdvertisementTable;
