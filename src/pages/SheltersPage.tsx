import { useState } from "react";
import AdoptPagesLayout from "../components/PagesTemplateLayout";
import PageOverlay from "../components/PageOverlay";
import SheltersList from "../components/SheltersPage/SheltersList";

const SheltersPage = () => {
  const [page, setPage] = useState(0);

  return (
    <PageOverlay>
      <AdoptPagesLayout
        page={page}
        setPageIncrement={() => setPage(page + 1)}
        setPageDecrement={() => setPage(page - 1)}
        maxPage={10 - 1}
      >
        <SheltersList />
      </AdoptPagesLayout>
    </PageOverlay>
  );
};

export default SheltersPage;
