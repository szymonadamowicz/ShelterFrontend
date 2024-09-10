import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ imagesToDisplay = 4 }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const imgList = useMemo(() => [
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
  ], []);

  useEffect(() => {
    const imgPromises = imgList.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
      });
    });

    Promise.all(imgPromises).then(() => {
      setIsLoading(false);
    });
  }, [imgList]);

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: imagesToDisplay,
    swipeToSlide: true,
  };

  const imageWidth = "200px";
  const imageHeight = "100px";

  return (
    <Box width="100%" margin="10px 0px">
      {isLoading ? (
        <Slider {...settings} ref={sliderRef}>
          {imgList.map((_, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "100%",
                height: imageHeight,
                margin: "25px 0px",
              }}
            >
              <CircularProgress />
            </Box>
          ))}
        </Slider>
      ) : (
        <Slider {...settings} ref={sliderRef}>
          {imgList.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ 
                margin: "0 auto",
                width: imageWidth,
                height: imageHeight,
                bgcolor: index === 1 ? "red" : "blue", 
              }}
            >
              <img
                src={src}
                alt={`${index}-pic`}
                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default ImageCarousel;
