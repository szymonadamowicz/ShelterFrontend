import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";


const HomeTags = () => {
  const tagName = [
    { img: "", text: "1asd" },
    { img: "", text: "2asd" },
    { img: "", text: "1asd" },
    { img: "", text: "2asd" },
    { img: "", text: "1asd" },
  ];

  return (
    <Box display="flex" flexWrap="wrap">
      {tagName.map((item, index) => (
        <Button
          onClick={() => {
            console.log(index);
          }}
          style={{
            backgroundColor: "brown",
            height: 50,
            width: 100,
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
          <img src={item.img} alt="" />
          <Typography>{item.text}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default HomeTags;
