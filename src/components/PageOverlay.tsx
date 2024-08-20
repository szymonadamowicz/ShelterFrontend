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
    <Box bgcolor="blue" width="100%" height={"100%"} minHeight={"100vh"}>
      <Box width="55%" mx="auto">
        {backButton && (
          <Button
            sx={{ position: "absolute" }}
            onClick={() => {
              navigate(-1);
            }}
          >
            a
          </Button>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default PageOverlay;
