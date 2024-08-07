import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel() {
  const [imagesVisible, setImagesVisible] = useState(4);
  const [imageCount, setImageCount] = useState(0);

  const imgList = [
    "https://picsum.photos/id/1/200/100",
    "https://picsum.photos/id/2/200/100",
    "https://picsum.photos/id/3/200/100",
    "https://picsum.photos/id/4/200/100",
    "https://picsum.photos/id/13/200/100",
    "https://picsum.photos/id/10/200/100",
    "https://picsum.photos/id/15/200/100",
    "https://picsum.photos/id/12/200/100",
    "https://picsum.photos/id/9/200/100",
    "https://picsum.photos/id/20/200/100",
    "https://picsum.photos/id/21/200/100",
    "https://picsum.photos/id/22/200/100",
  ];

  const imageCountIncrement = () => {
    if (imageCount < imgList.length - imagesVisible) {
      setImageCount(imageCount + 1);
    }
  };

  const imageCountDecrement = () => {
    if (imageCount !== 0) {
      setImageCount(imageCount - 1);
    }
  };

  const ImageDisplay = () => {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: imagesVisible,
      slidesToScroll: imagesVisible,
      infinite: false,
    };

    // const imagesToShow = imgList.slice(imageCount, imageCount + imagesVisible);
    return (
      <Box>
        <Slider {...settings}>
          {imgList.map((src, index) => (
            <img key={index} src={src} alt={`image-${index}`} />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box>
      <Box width={"100%"}>
        <Button onClick={imageCountDecrement} disabled={imageCount === 0}>
          -
        </Button>
        <ImageDisplay />
        <Button
          onClick={imageCountIncrement}
          disabled={imageCount >= imgList.length - imagesVisible}
        >
          +
        </Button>
      </Box>
    </Box>
  );
}
