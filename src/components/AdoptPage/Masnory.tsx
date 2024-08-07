import React from "react";
import { Box, Grid } from "@mui/material";

const AdoptMasnory = ({ columnCount = 3 }) => {

    const Card = () => {
        return (
            <Box 
                height={200} 
                width="auto"
                display="flex" 
                justifyContent="center" 
                alignItems="center"
                border={1}
                borderColor="grey.300"
                bgcolor="white"
                m={1}
            >
                asd
            </Box>
        );
    };

    const cards = Array(8).fill(null);

    return (
        <Box 
        width={"100%"}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container spacing={0} justifyContent="center">
                {cards.map((_, index) => (
                    <Grid item xs={12 / columnCount} key={index}>
                        <Card />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AdoptMasnory;
