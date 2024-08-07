import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface PageOverlayType {
    children: ReactNode;
}

const PageOverlay: React.FC<PageOverlayType> = ({ children }) => {
    return (
        <Box bgcolor="blue" width="100%">
            <Box width="55%" mx="auto">
                {children}
            </Box>
        </Box>
    );
};

export default PageOverlay;
