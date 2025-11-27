import { InputAdornment, Stack, TextField, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const theme = useTheme();

    const handleChange = (event: Event, newValue: number[]) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            position: "relative"
        }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={500} color='text.primary' fontSize={14}>Min</Typography>
                <Typography fontWeight={500} color='text.primary' fontSize={14}>Max</Typography>
            </Stack>
            <Slider
                getAriaLabel={() => 'price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
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
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={3} mt={1}>
                <TextField
                    size="small"
                    name='min_price'
                    type="number"
                    sx={{
                        width: "100px",
                        "& .MuiInputBase-input": {
                            fontSize: "12px",
                            color: "text.primary"
                        },
                        "& .MuiInputBase-root": {
                            padding: "6px 8px",
                            borderRadius: "4px"
                        }

                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start" sx={{
                            fontSize: 12
                        }}>रु</InputAdornment>,
                    }}
                    value={value[0]}
                    onChange={(e) => setValue([Number(e.target.value), value[1]])}
                />
                <TextField
                    size="small"
                    name='max_price'
                    type="number"
                    InputProps={{
                        startAdornment: <InputAdornment position="start" sx={{
                            fontSize: 12
                        }}>रु</InputAdornment>,
                    }}
                    sx={{
                        width: "100px",
                        "& .MuiInputBase-input": {
                            fontSize: "12px",
                            color: "text.primary",
                        },
                        "& .MuiInputBase-root": {
                            padding: "6px 8px",
                            borderRadius: "4px"
                        }
                    }}
                    value={value[1]}
                    onChange={(e) => setValue([value[0], Number(e.target.value)])}
                />
            </Stack>
        </Box>
    );
}
