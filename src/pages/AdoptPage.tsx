import React, { useState } from "react";
import AdoptMasnory from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";
import AdoptPagesLayout from "../components/PagesTemplateLayout";

const AdoptPage = () => {

  const [page, setPage]= useState(0)
  const numOfCards = 9
  const cards = [
    "Bella",
    "Max",
    "Luna",
    "Simba",
    "Coco",
    "Rocky",
    "Nala",
    "Milo",
    "Daisy",
    "Oliver"
  ];
    
  const maxPage = Math.ceil(cards.length / numOfCards)

  return (
    <PageOverlay>
      <AdoptPagesLayout page={page} setPageIncrement={()=>setPage(page+1)} setPageDecrement={()=>setPage(page-1)} maxPage={maxPage-1}>
        <AdoptMasnory columnCount={3} page={page} numOfCards={9} cards={cards}/>
      </AdoptPagesLayout>
    </PageOverlay>
  );
};

export default AdoptPage;
