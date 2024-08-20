import React, { useState } from "react";
import AdoptMasnory from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";
import PagesTemplateLayout from "../components/PagesTemplateLayout";

const AdoptPage = () => {
  const [page, setPage] = useState(0);
  const numOfCards = 9;
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
    "Oliver",
  ].map((name, index) => ({ name, originalIndex: index }));

  const maxPage = Math.ceil(cards.length / numOfCards);

  const [searchedText, setSearchedText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };

  return (
    <PageOverlay>
      <PagesTemplateLayout
        page={page}
        setPageIncrement={() => setPage(page + 1)}
        setPageDecrement={() => setPage(page - 1)}
        maxPage={maxPage - 1}
        textAreaVisible={true}
        searchedText={searchedText}
        handleSearchChange={handleSearchChange}
        title="Adopt Page"
      >
        <AdoptMasnory
          columnCount={3}
          cards={cards
            .filter((card) =>
              card.name.toLowerCase().includes(searchedText.toLowerCase())
            )
            .slice(numOfCards * page, numOfCards * (page + 1))}
        />
      </PagesTemplateLayout>
    </PageOverlay>
  );
};

export default AdoptPage;
