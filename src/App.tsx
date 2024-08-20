import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import { Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import SheltersPage from "./pages/SheltersPage";
import AdoptAnimalPageView from "./components/AdoptPage/AdoptAnimalPageView";
import ShelterPageView from "./components/SheltersPage/ShelterPageView";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/adopt/adoptanimalpage/:id" element={<AdoptAnimalPageView />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="/shelters/shelterpage/:id" element={<ShelterPageView />} />

          </Routes>
    </div>
  );
}

export default App;
