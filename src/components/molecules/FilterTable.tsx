import {
    Box,
    Button,
    Checkbox,
    Divider,
    Slider,
    Stack,
    TextField,
    Typography,
    useTheme
} from '@mui/material';

import { useState } from 'react';
import RangeSlider from './RangeSlider';

export const FilterTable = ({
    // table,
    onSubmit, closePopover }: any) => {
    const theme = useTheme();

    const [status, setStatus] = useState<string>("");

    const handleStatusChange = (value: string) => {
        setStatus(prev => (prev === value ? "" : value));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data: any = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        data.status = status;

        console.log("FORM DATA:", data);
        onSubmit?.(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="p-4 w-[286px]">

                <Typography variant="h6" fontWeight={400} fontSize={16} className="py-2" pt={0}>
                    Filter
                </Typography>

                <Divider />

                {/* STATUS CHECKBOXES */}
                <div className='my-4 mb-2'>
                    <Typography color="text.secondary" fontWeight={400} fontSize={12} className="py-2" pt={0}>
                        Status
                    </Typography>

                    {/* APPROVED */}
                    <Box
                        className="flex items-center gap-2 py-1 pe-5 cursor-pointer"
                        onClick={() => handleStatusChange("approved")}
                    >
                        <Checkbox
                            checked={status === "approved"}
                            size="medium"
                            color="default"
                            sx={{
                                color: theme.palette.text.gray,
                                "&.Mui-checked": { color: theme.palette.primary.main },
                                p: 0,
                            }}
                        />
                        <Typography color="text.secondary" fontSize={14}>Approved</Typography>
                    </Box>

                    {/* NOT APPROVED */}
                    <Box
                        className="flex items-center gap-2 py-2 pe-5 cursor-pointer"
                        onClick={() => handleStatusChange("not_approved")}
                    >
                        <Checkbox
                            checked={status === "not_approved"}
                            size="medium"
                            color="default"
                            sx={{
                                color: theme.palette.text.gray,
                                "&.Mui-checked": { color: theme.palette.primary.main },
                                p: 0,
                            }}
                        />
                        <Typography color="text.secondary" fontSize={14}>Not Approved</Typography>
                    </Box>
                </div>

                <Divider />

                {/* PRICE RANGE */}
                <div className='my-4'>
                    <Typography color="text.secondary" fontWeight={400} fontSize={12} className="py-2" pt={0}>
                        Price Range
                    </Typography>
                    <RangeSlider />
                </div>

                <Divider />

                {/* NO OF PAX */}
                <div className='my-4'>
                    <Typography color="text.secondary" fontWeight={400} fontSize={12} className="py-2" pt={0}>
                        No. of Pax.
                    </Typography>

                    <div className="flex items-center gap-2">
                        <TextField
                            size="small"
                            name="pax_min"
                            type="text"
                            placeholder="Enter Pax."
                            sx={{
                                width: "100px",
                                "& .MuiInputBase-input": { fontSize: "12px" },
                                "& .MuiInputBase-root": { padding: "8px 8px", borderRadius: "4px" }
                            }}
                        />

                        <Slider
                            name="pax_slider"
                            defaultValue={50}
                            aria-label="Pax Slider"
                            valueLabelDisplay="auto"
                            sx={{
                                color: theme.palette.primary.main,
                                "& .MuiSlider-thumb": {
                                    backgroundColor: theme.palette.background.paper,
                                },
                                "& .MuiSlider-rail": {
                                    backgroundColor: theme.palette.text.disabled,
                                    height: "8px",
                                },
                                "& .MuiSlider-track": {
                                    backgroundColor: theme.palette.primary.main,
                                    height: "8px",
                                },
                            }}
                        />
                    </div>
                </div>

                <Divider />

                {/* ACTION BUTTONS */}
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="end"
                    gap={1.5}
                    mt={3}
                >
                    <Button
                        variant="outlined"
                        type="button"
                        fullWidth
                        sx={{
                            borderColor: theme.palette.secondary.light,
                            color: theme.palette.grey[600],
                            px: 3,
                            borderRadius: 1.5,
                        }}
                        onClick={() => {
                            setStatus("");
                            closePopover();
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ px: 3, borderRadius: 1.5, textWrap: "nowrap" }}
                    >
                        Apply Now
                    </Button>
                </Stack>
            </div>
        </form>
    );
};
