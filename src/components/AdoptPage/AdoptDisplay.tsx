import { Box, Typography } from "@mui/material";
import { CardProps } from "../types";



const AdoptDisplay: React.FC<CardProps> = ({ name, onClick }) => {
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
            alt="random-pic"
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

  export default AdoptDisplay