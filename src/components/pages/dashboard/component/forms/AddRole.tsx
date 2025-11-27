import {
  alpha,
  Box,
  Button,
  Checkbox,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Airplane, ArrowDown2, ArrowUp2, SearchNormal1 } from "iconsax-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { showToast } from "../../../../../slice/toastSlice";
import { useAppDispatch } from "../../../../../store/hook";
import ButtonWithBackground from "../../../../atom/ButtonWithBackground";

// ---------------- INITIAL DATA ----------------
const initialPermissions = [
  {
    id: 1,
    name: "Users",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
  {
    id: 2,
    name: "Agents",
    browse: true,
    create: false,
    edit: true,
    delete: false,
  },
  {
    id: 3,
    name: "Flights",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
  {
    id: 4,
    name: "Finances",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
  {
    id: 5,
    name: "Debtors",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
  {
    id: 6,
    name: "Statements",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
  {
    id: 7,
    name: "Advertisement",
    browse: true,
    create: false,
    edit: false,
    delete: false,
  },
];

const formFields = [
  {
    label: "Role Name",
    name: "roleName",
    type: "text",
    required: true,
    defaultValue: "",
    placeholder: "Enter name of the role",
  },
];

// ---------------- MAIN COMPONENT ----------------
export default function AddRole({
  isEdit,
  data: rowData,
  setOpen,
}: {
  isEdit?: boolean;
  data?: any;
  setOpen?: (open: boolean) => void;
}) {
  const theme = useTheme();
  const [data, setData] = useState(initialPermissions);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState<any>([]);
  const [roleName, setRoleName] = useState("");

  const dispatch = useAppDispatch();

  // ---------------- FILTER DATA ----------------
  const filteredData = useMemo(
    () =>
      data.filter((row) =>
        row.name.toLowerCase().includes(search.toLowerCase())
      ),
    [data, search]
  );

  // ---------------- UTILS ----------------
  const updatePermission = (id: number, key: string, value: boolean) => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  };

  const updateAll = (key: string, value: boolean) => {
    setData((prev) => prev.map((row) => ({ ...row, [key]: value })));
  };

  const isColumnChecked = (key: string) =>
    data.every((row: any) => row[key] === true);

  const permissionsKeys = ["browse", "create", "edit", "delete"];

  // ---------------- COLUMNS ----------------
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Role",
        cell: (info: any) => info.getValue(),
      },
      ...permissionsKeys.map((key) => ({
        accessorKey: key,
        header: () => (
          <Checkbox
            size="small"
            checked={isColumnChecked(key)}
            onChange={(e) => updateAll(key, e.target.checked)}
          />
        ),
        cell: ({ row }: { row: any }) => (
          <Checkbox
            size="small"
            checked={row.original[key]}
            onChange={(e) =>
              updatePermission(row.original.id, key, e.target.checked)
            }
          />
        ),
      })),
    ],
    [data]
  );

  // ---------------- TABLE ----------------
  const table = useReactTable({
    data: filteredData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    meta: { updatePermission, updateAll },
  });

  const sortDesc = table.getState().sorting[0]?.desc || false;

  // ---------------- FORM SUBMIT ----------------
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { role: roleName, permissions: data };
    console.log("Submitting role:", payload);
    dispatch(
      showToast({
        message: "Statement added successfully",
        severity: "success",
      }),
    );
  };

  useEffect(() => {
    if (isEdit && data) {
      // Map data to form fields, fallback to defaultValue if key missing
      const newForm = formFields.reduce((acc, f) => {
        acc[f.name] = rowData[f.name] ?? f.defaultValue;
        return acc;
      }, {} as Record<string, any>);

      setRoleName(newForm.roleName);
    }
  }, [isEdit, data]);

  return (
    <Box>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <ButtonWithBackground>
            <Airplane
              size={40}
              color={theme.palette.primary.main}
              variant="Bold"
            />
          </ButtonWithBackground>
          <Stack spacing={0.5}>
            <Typography variant="h5" fontWeight="bold">
              {isEdit ? "Edit" : "Create"} Role
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fill in the form to create a new role.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ borderWidth: 1, mb: 3 }} />

      {/* ---------------- FORM ---------------- */}
      <Box component="form" onSubmit={handleSubmit}>
        {!isEdit && (
          <Stack spacing={2}>
            {formFields.map((field) => (
              <Box>
                <Typography
                  fontSize={field.type === "switch" ? 16 : 14}
                  fontWeight={600}
                  color={
                    field.type === "switch" ? "text.secondary" : "text.primary"
                  }
                  mb={0.5}
                >
                  {field.label}{" "}
                  {field.required && <span style={{ color: "red" }}>*</span>}
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  type={field.type}
                  placeholder={field.placeholder}
                  value={roleName}
                  required={field.required}
                  onChange={(e) => setRoleName(e.target.value)}
                />
              </Box>
            ))}
          </Stack>
        )}

        {/* ---------------- TABLE ---------------- */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table
            sx={{
              borderCollapse: "collapse",
              overflow: "hidden",
              border: "1px solid #ccc", // outer table border
              "& th": { py: 1.25 },
            }}
          >
            <TableHead>
              {/* ----- HEADER ROW 1 ----- */}
              <TableRow
                sx={{
                  height: 48,
                }}
              >
                <TableCell
                  sx={{
                    width: 164,
                    border: "1px solid #ccc", // cell border
                    overflow: "hidden",
                  }}
                >
                  <TextField
                    size="small"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: 164 }}
                    InputProps={{
                      startAdornment: (
                        <SearchNormal1 size={16} style={{ marginRight: 8 }} />
                      ),
                    }}
                  />
                </TableCell>
                {permissionsKeys.map((key) => (
                  <TableCell
                    key={key}
                    sx={{
                      fontWeight: "bold",
                      fontSize: 14,

                      border: "1px solid #ccc",
                      textAlign: "center",
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </TableCell>
                ))}
              </TableRow>

              {/* ----- HEADER ROW 2 ----- */}
              <TableRow
                sx={{
                  height: 48,
                  backgroundColor: alpha(theme.palette.text.secondary, 0.1),
                  "& th": { py: 1, border: "1px solid #ccc" }, // border for header cells
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: 14,

                    border: "1px solid #ccc",
                  }}
                  onClick={() =>
                    table.setSorting([{ id: "name", desc: !sortDesc }])
                  }
                >
                  {sortDesc ? (
                    <ArrowDown2
                      size={16}
                      className="me-2 inline"
                      color={theme.palette.primary.main}
                    />
                  ) : (
                    <ArrowUp2
                      size={16}
                      className="me-2 inline"
                      color={theme.palette.primary.main}
                    />
                  )}
                  Role
                </TableCell>

                {permissionsKeys.map((key) => (
                  <TableCell
                    key={key}
                    sx={{ border: "1px solid #ccc", textAlign: "center" }}
                  >
                    <Checkbox
                      size="small"
                      checked={isColumnChecked(key)}
                      onChange={(e) => updateAll(key, e.target.checked)}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    height: 40,
                    "& td": { py: 1, border: "1px solid #ccc" }, // cell borders
                  }}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      sx={{
                        fontWeight: "500",
                        fontSize: 14,

                        textAlign: index === 0 ? "left" : "center",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              {filteredData.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    sx={{
                      textAlign: "center",
                      py: 4,
                      border: "1px solid #ccc",
                    }}
                  >
                    No results found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider sx={{ borderWidth: 1, mt: 4 }} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          gap={1.5}
          px={2}
          mt={3}
        >
          <Button
            variant="outlined"
            onClick={() => setOpen?.(false)}
            sx={{
              borderColor: theme.palette.secondary.light,
              color: theme.palette.grey[600],
              px: 3,
              borderRadius: 1.5,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ px: 3, borderRadius: 1.5 }}
          >
            Confirm
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
