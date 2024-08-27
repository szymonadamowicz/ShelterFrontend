import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../types";
import PageOverlay from "../PageOverlay";
import { Box } from "@mui/material";
import useSheltersAndPets from "../backend/useSheltersAndPets";

const AdoptAnimalPageView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pets, loading } = useSheltersAndPets();
  const [animalData, setAnimalData] = useState<Animal | null>(null);

  useEffect(() => {
    if (!loading && pets.length > 0) {
      const animal = pets.find(pet => String(pet.id) === id);
      setAnimalData(animal);
    }
  }, [id, pets, loading]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!animalData) {
  //   return <div>No animal found with ID {id}</div>;
  // }

  return (
    <PageOverlay>
      <Box bgcolor={"red"} height={"100%"} minHeight={"100vh"}>
        <Box display={"flex"} justifyContent={"center"} height={"5vh"} alignItems={"center"} alignContent={"center"}>
          {animalData ? animalData.name: "loading..."}
        </Box>
      </Box>
    </PageOverlay>
  );
};

export default AdoptAnimalPageView;
