import { Box, Button, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";


const HomeTags = () => {

const navigate = useNavigate();

  const tagName = [
    { img: "", text: "Adopt" },
    { img: "", text: "Map" },
    { img: "", text: "Shelters" },
    { img: "", text: "Liked" },
    { img: "", text: "Donate" },
    { img: "", text: "Account" },
  ];

  return (
    <Box display="flex" flexWrap="wrap" width={"100%"} bgcolor={"#233728"} justifyContent={"space-between"} pl={2} pr={2}>
      {tagName.map((item, index) => (
        <Button
          onClick={() => {
            navigate(`/${item.text.toLowerCase()}`)
          }}
          style={{
            backgroundColor: "#658a5f",
            height: 60,
            width: 160,
            borderRadius: 26,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            margin: 14,
            marginRight: 8,
            marginLeft: 0,
          }}
          key={index}
        >
          {/* <img src={item.img} alt="tag-pic" /> */}
          <Typography color="white" fontWeight={"bold"} fontSize={25}>{item.text}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default HomeTags;
