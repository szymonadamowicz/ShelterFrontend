import React from "react";
import { Box } from "@mui/material";
import { PageDisplayProp } from "./types";

const PageOverlay: React.FC<PageDisplayProp> = ({
  children,
}) => {

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
        
        <Box>
          <Box
            sx={{
              backgroundColor: "#E6DCCA",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              border: "2px solid #233728",
              borderTop: "0px",
              borderBottom: "0px",
              padding: 2,
              paddingTop: 0,
              paddingBottom: 0,
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
