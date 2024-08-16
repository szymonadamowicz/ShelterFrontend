import React, { useState } from "react";
import AdoptMasnory from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";
import AdoptPagesLayout from "../components/AdoptPage/AdoptPagesLayout";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const AdoptPage = () => {

  const [page, setPage]= useState(0)
  const numOfCards = 9
  const cards = Array.from({ length: 10 }, () => null);
  const maxPage = Math.ceil(cards.length / numOfCards)

  return (
    <PageOverlay>
      <Link to={"/"}><Typography  color="red">Home</Typography></Link>
      <AdoptPagesLayout page={page} setPageIncrement={()=>setPage(page+1)} setPageDecrement={()=>setPage(page-1)} maxPage={maxPage-1}>
        <AdoptMasnory columnCount={3} page={page} numOfCards={9} cards={cards}/>
      </AdoptPagesLayout>
    </PageOverlay>
  );
};

export default AdoptPage;
