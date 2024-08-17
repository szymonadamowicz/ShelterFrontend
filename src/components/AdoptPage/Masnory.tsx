import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

interface MasonryPropsTypes {
  columnCount: number;
  page: number;
  numOfCards: number;
  cards: string[];
}

interface CardProps {
  name: string;
  onClick: () => void;
}

const AdoptMasonry: React.FC<MasonryPropsTypes> = ({
  columnCount,
  page,
  numOfCards,
  cards,
}) => {
  const navigate = useNavigate();
  const [searchedPet, setSearchedPet] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedPet(event.target.value);
  };

  const filteredAndSortedCards = cards.filter((card: string) =>
    card.toLowerCase().includes(searchedPet.toLowerCase())
  );

  const Card: React.FC<CardProps> = ({ name, onClick }) => {
    return (
      <Box
        component="button"
        onClick={onClick}
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
            style={{ height: 140, width: "100%" }}
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
              {name}
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
      <Box flexDirection={"row"} display={"flex"} alignSelf={"center"}>
        <Link to={"/"}>
          <Typography color="blue">Home</Typography>
        </Link>

        <Typography>Adopt</Typography>
      </Box>
      <Box p={1}>
        <TextField
          id="outlined-basic"
          label="Search"
          placeholder="Search a pet's name"
          variant="outlined"
          fullWidth
          size="small"
          value={searchedPet}
          onChange={handleSearchChange}
        />
      </Box>
      <Grid container spacing={1} pr={1} pl={1}>
        {filteredAndSortedCards
          .slice(numOfCards * page, numOfCards * (page + 1))
          .map((name: string, index: number) => (
            <Grid item xs={12 / columnCount} key={index}>
              <Card
                name={name}
                onClick={() => {
                  navigate(`/adopt/adoptanimalpage/${cards.indexOf(name)}`);
                }}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default AdoptMasonry;
