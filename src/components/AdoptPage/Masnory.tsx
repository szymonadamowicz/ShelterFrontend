import React from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdoptDisplay from "./AdoptDisplay";
import { MasonryPropsTypes } from "../types";

const AdoptMasonry: React.FC<MasonryPropsTypes> = ({
  columnCount,
  cards,
  loading,
  cardsCount,
  currentPage
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
        {(loading ? cardsCount : cards).map((_: any, index: number) => (
          <Grid item xs={12 / columnCount} key={index}>
            <Box
              height={180}
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {loading ? (
                <CircularProgress />
              ) : (
                <AdoptDisplay
                  name={cards[index]?.name}
                  image={cards[index]?.image_data}
                  onClick={() => {
                    navigate(`/adopt/adoptanimalpage/${cards[index]?.id}?page=${currentPage}`, {
                      state: { page: currentPage },
                    });
                  }}
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdoptMasonry;
