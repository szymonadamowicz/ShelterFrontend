import { useState } from "react";
import PagesTemplateLayout from "../components/PagesTemplateLayout";
import PageOverlay from "../components/PageOverlay";
import SheltersList from "../components/SheltersPage/SheltersList";
import useSheltersAndPets from "../backend/useSheltersAndPets";

const SheltersPage = () => {
  const [page, setPage] = useState(1);

  const { shelters } = useSheltersAndPets();

  const [searchedText, setSearchedText] = useState("");
  const numOfShelters = 4;

  const maxPage = Math.ceil(shelters.length / numOfShelters);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };

  return (
    <PageOverlay>
      <PagesTemplateLayout
        page={page}
        setPageIncrement={() => {
          if (page < maxPage) {
            setPage(page + 1);
          }
        } }
        setPageDecrement={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        } }
        maxPage={maxPage}
        textAreaVisible={true}
        searchedText={searchedText}
        handleSearchChange={handleSearchChange}
        title="Shelters"
        backButton={true}     
        >
        <SheltersList
          shelters={shelters
            .filter((shelter) =>
              shelter.name.toLowerCase().includes(searchedText.toLowerCase())
            )
            .slice(numOfShelters * (page - 1), numOfShelters * page)}
        />
      </PagesTemplateLayout>
    </PageOverlay>
  );
};

export default SheltersPage;
