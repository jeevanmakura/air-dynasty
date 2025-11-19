export const buildColumns = (data: any[], columnsToHide: string[]) => {
  if (!data || data.length === 0) return [];

  let cols = Object.keys(data[0]).map((key) => ({
    header: key,
    accessorKey: key,
  }));

  return cols.filter((col) => !columnsToHide.includes(col.accessorKey));
};
