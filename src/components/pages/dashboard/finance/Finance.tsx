import { Box } from "@mui/material";

import FinanceCard from "../../../molecules/FinanceCard";

const Finance = () => {
  return (
    <Box component={"div"} className="grid grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <FinanceCard key={index} />
      ))}
    </Box>
  );
};

export default Finance;
