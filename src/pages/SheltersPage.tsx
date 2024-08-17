import { useState } from "react";
import AdoptPagesLayout from "../components/PagesTemplateLayout";
import PageOverlay from "../components/PageOverlay";
import SheltersList from "../components/SheltersPage/SheltersList";

const SheltersPage = () => {
  const [page, setPage] = useState(0);

  const shelters = ["a", "b", "c", "d", "e", "f", "g"].map((name, index) => ({
    name,
    originalIndex: index,
  }));

  const [searchedText, setSearchedText] = useState("");
  const numOfShelters = 4;

  const maxPage = Math.ceil(shelters.length / numOfShelters) - 1;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };

  return (
    <PageOverlay>
      <AdoptPagesLayout
        page={page}
        setPageIncrement={() => setPage(page + 1)}
        setPageDecrement={() => setPage(page - 1)}
        maxPage={maxPage}
        textAreaVisible={true}
        searchedText={searchedText}
        handleSearchChange={handleSearchChange}
      >
        <SheltersList
          shelters={shelters
            .filter((shelters) =>
              shelters.name.toLowerCase().includes(searchedText.toLowerCase())
            )
            .slice(numOfShelters * page, numOfShelters * (page + 1))}
          numOfShelters={numOfShelters}
          page={page}
        />
      </AdoptPagesLayout>
    </PageOverlay>
  );
};

export default SheltersPage;
