import { Box } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ imagesToDisplay = 4 }) => {
  const sliderRef = useRef<Slider | null>(null);
  let visiableImages = imagesToDisplay;
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

  const ImageDisplay = () => {
    const settings = {
      infinite: true,
      arrow: true,
      slidesToShow: visiableImages,
      swipeToSlide: true,
    };

    return (
      <Box width="100%" margin="10px 0px">
        <Slider {...settings} ref={sliderRef}>
          {imgList.map((src, index) => (
            <Box key={index} sx={{ margin: "25px 1px" }}>
              <img src={src} alt={`image-${index}`} />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

  return <ImageDisplay />;
};

export default ImageCarousel;
