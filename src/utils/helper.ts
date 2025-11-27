export const buildColumns = (data: any[], columnsToHide: string[]) => {
  if (!data || data.length === 0) return [];

  const cols = Object.keys(data[0]).map((key) => ({
    header: key,
    accessorKey: key,
  }));

  return cols.filter((col) => !columnsToHide.includes(col.accessorKey));
};

export const formatText = (text: string) => {
  if (typeof text !== "string") return text;
  return text.replace(/[_-]/g, " ");
};

// Helper to convert string numbers with commas to actual numbers
export const parseNumber = (str: string) => Number(str.replace(/,/g, ""));
