import React from "react";
import { Box, Grid } from "@mui/material";
import AdoptMasnory from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";

const AdoptPage = () => {
  return (
    <PageOverlay>
      <AdoptMasnory columnCount={3} />
    </PageOverlay>
  );
};

export default AdoptPage;
