import React from "react";
import { Box, Button } from "@mui/material";
import { PageDisplayProp } from "./types";
import { useNavigate } from "react-router-dom";

const PageOverlay: React.FC<PageDisplayProp> = ({
  children,
  backButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box width="55%" mx="auto" position="relative">
        {backButton && (
          <Box
            sx={{ position: "absolute" }}
            height="5vh"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            zIndex={1}
          >
            <Button
              sx={{ position: "absolute" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </Button>
          </Box>
        )}
        <Box>
          <Box
            sx={{
              backgroundImage: "url('/background_front.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              minHeight: "100vh",
              overflow: "hidden",
              
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PageOverlay;
