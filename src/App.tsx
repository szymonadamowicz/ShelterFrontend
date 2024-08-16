import React from "react";
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import { Routes, Route } from "react-router-dom";
import AdoptAnimalPage from "./pages/AdoptAnimalPage";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/adoptanimalpage/:id" element={<AdoptAnimalPage />} />
          </Routes>
    </div>
  );
}

export default App;
