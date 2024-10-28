import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdoptMasonry from "../components/AdoptPage/Masnory";
import PageOverlay from "../components/PageOverlay";
import PagesTemplateLayout from "../components/PagesTemplateLayout";
import useSheltersAndPets from "../backend/useSheltersAndPets";

const AdoptPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pets, loading } = useSheltersAndPets();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page") || "1", 10);

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
        [page]: filteredPets.slice(numOfCards * (page - 1), numOfCards * page),
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
        maxPage={maxPage}
        textAreaVisible={true}
        searchedText={searchedText}
        handleSearchChange={handleSearchChange}
        title="Adopt Page"
        backButton={true}
      >
        <AdoptMasonry
          columnCount={3}
          cards={currentPageCards}
          loading={loading && !loadedPages[page]}
          cardsCount={Array.from({ length: numOfCards })}
          currentPage={page}
        />
      </PagesTemplateLayout>
    </PageOverlay>
  );
};

export default AdoptPage;
