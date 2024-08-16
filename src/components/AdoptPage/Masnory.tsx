import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MasonryPropsTypes {
  columnCount: number;
  page: number;
  numOfCards: number;
  cards: any;
}

interface CardProps {
  index: number;
}

const AdoptMasonry: React.FC<MasonryPropsTypes> = ({
  columnCount,
  page,
  numOfCards,
  cards,
}) => {
  const navigate = useNavigate();

  const Card: React.FC<CardProps> = ({ index }) => {
    return (
      <Box
        component="button"
        onClick={() => {
          console.log(index + numOfCards * page);

          navigate(`/adoptanimalpage/${index}`);

        }}
        sx={{
          padding: 0,
          border: "none",
          backgroundColor: "transparent",
          textAlign: "inherit",
          font: "inherit",
          cursor: "pointer",
          width: "100%",
          height: "auto",
        }}
      >
        <Box
          height={"auto"}
          width="auto"
          display="flex"
          alignItems="flex-start"
          border={1}
          borderColor="blue.300"
          bgcolor="white"
          flexDirection="column"
          overflow="hidden"
          borderRadius={4}
        >
          <img
            src="https://picsum.photos/200/160"
            alt="random"
            style={{ height: 150, width: "100%" }}
          />
          <Box
            display="flex"
            alignItems="center"
            borderRadius={"2vh"}
            width="100%"
            pl={1}
          >
            <Typography
              noWrap
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              width={"100%"}
              fontSize={"2vh"}
              p={1}
            >
              Milosek
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      width="100%"
      display="flex"
      height={"90vh"}
      overflow={"auto"}
      flexDirection={"column"}
    >
      <Box>
        <Typography>Adopt</Typography>
      </Box>

      <Grid container spacing={1}>
        {cards
          .slice(numOfCards * page, numOfCards * (page + 1))
          .map((_: any, index: number) => (
            <Grid item xs={12 / columnCount} key={index}>
              <Card index={index} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default AdoptMasonry;
