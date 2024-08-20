import React from "react";
import { Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdoptDisplay from "./AdoptDisplay";
import { MasonryPropsTypes } from "../types";

const AdoptMasonry: React.FC<MasonryPropsTypes> = ({
  columnCount,
  cards,
}) => {
  const navigate = useNavigate();

  
  return (
    <Box
      width="100%"
      display="flex"
      height={"auto"}
      overflow={"auto"}
      flexDirection={"column"}
    >
      <Grid container spacing={1} pr={1} pl={1}>
        {cards.map((card, index) => (
          <Grid item xs={12 / columnCount} key={index}>
            <AdoptDisplay
              name={card.name}
              onClick={() => {
                navigate(`/adopt/adoptanimalpage/${card.originalIndex}`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdoptMasonry;
