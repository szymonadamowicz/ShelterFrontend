import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ imagesToDisplay = 4 }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const imgList = useMemo(
    () => [
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
    ],
    []
  );

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

  const imageWidth = "150px";
  const imageHeight = "130px";

  return (
    <Box
      width="100%"
      maxWidth="95%"
      pt={5}
      ml={"2%"}
      justifyContent="center"
    >
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
                width: imageWidth,
                height: imageHeight,

              }}
            >
              <img
                src={src}
                alt={`${index}-pic`}
                style={{ width: "90%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
}

export default ImageCarousel;
