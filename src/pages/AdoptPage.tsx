import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdoptMasonry from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";
import PagesTemplateLayout from "../components/PagesTemplateLayout";
import useSheltersAndPets from "../components/backend/useSheltersAndPets";

const AdoptPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pets, loading } = useSheltersAndPets();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page") || "0", 10);

  const [page, setPage] = useState<number>(initialPage);
  const [loadedPages, setLoadedPages] = useState<Record<number, any[]>>({});
  const [searchedText, setSearchedText] = useState("");

  const numOfCards = 9;

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  const maxPage = Math.ceil(filteredPets.length / numOfCards);

  useEffect(() => {
    if (!loading) {
      setLoadedPages((prevLoadedPages) => ({
        ...prevLoadedPages,
        [page]: filteredPets.slice(numOfCards * page, numOfCards * (page + 1)),
      }));
    }
  }, [loading, page, filteredPets]);

  useEffect(() => {
    navigate(`?page=${page}`, { replace: true });
  }, [page, navigate]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };

  const currentPageCards = loadedPages[page] || [];

  return (
    <PageOverlay>
      <PagesTemplateLayout
        page={page}
        setPageIncrement={() => setPage((prevPage) => prevPage + 1)}
        setPageDecrement={() => setPage((prevPage) => prevPage - 1)}
        maxPage={maxPage - 1}
        textAreaVisible={true}
        searchedText={searchedText}
        handleSearchChange={handleSearchChange}
        title="Adopt Page"
      >
        <AdoptMasonry
          columnCount={3}
          cards={currentPageCards}
          loading={loading && !loadedPages[page]}
          cardsCount={Array.from({ length: numOfCards })}
          currentPage={page} // Przekazujemy aktualną stronę jako props
        />
      </PagesTemplateLayout>
    </PageOverlay>
  );
};

export default AdoptPage;
