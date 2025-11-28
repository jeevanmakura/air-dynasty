import { Box, Typography, useTheme } from '@mui/material';
import { ArrowRight2, Setting2 } from 'iconsax-react';
import { useLocation } from 'react-router-dom';
import type { MenuItem } from '../../types/types';

const PageBreadcrumbs = ({ menuItem }: { menuItem: MenuItem[] }) => {
    const theme = useTheme();
    const location = useLocation();


    const segments = location.pathname.split("/").filter(Boolean);

    const parent = menuItem.find(
        (item) => item.path === `/${segments[0]}`
    );

    let child: MenuItem | undefined;

    if (parent?.children) {
        child = parent.children.find(
            (c) => c.path === `/${segments[0]}/${segments[1]}`
        );
    }

    const ParentIcon = parent?.icon;
    const parentIconName = parent?.label;

    const ChildIcon = child?.icon;
    const childIconName = child?.label;
    return (

        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {ParentIcon && (
                <ParentIcon
                    size={20}
                    color={
                        childIconName
                            ? theme.palette.text.gray
                            : theme.palette.primary.main
                    }
                    variant="Bold"
                />
            )}

            <Typography
                variant="body1"
                fontSize={16}
                fontWeight={600}
                width={"max-content"}
                color={childIconName ? "text.gray" : "primary.main"}
            >
                {parentIconName}
            </Typography>

            {/* if page is settings  */}
            {segments[0] === "settings" && (
                <>
                    <Setting2
                        size={20}
                        color={theme.palette.primary.main}
                        variant="Bold"
                    />

                    <Typography
                        variant="body1"
                        fontSize={16}
                        fontWeight={600}
                        color="primary.main"
                    >
                        Settings
                    </Typography>
                </>
            )}

            {childIconName && (
                <>
                    <ArrowRight2
                        size={14}
                        color={theme.palette.text.gray}
                        className="mx-0.5 mt-0.5"
                    />

                    {ChildIcon && (
                        <ChildIcon
                            size={20}
                            color={theme.palette.primary.main}
                            variant="Bold"
                        />
                    )}

                    <Typography
                        variant="body1"
                        fontSize={16}
                        fontWeight={600}
                        color="primary.main"
                        width={"max-content"}
                    >
                        {childIconName}
                    </Typography>
                </>
            )}
        </Box>

    )
}

export default PageBreadcrumbs