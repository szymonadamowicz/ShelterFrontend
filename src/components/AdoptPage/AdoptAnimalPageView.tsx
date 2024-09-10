import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../types";
import PageOverlay from "../PageOverlay";
import { Box } from "@mui/material";
import useSheltersAndPets from "../../backend/useSheltersAndPets";

const AdoptAnimalPageView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { pets, loading } = useSheltersAndPets();
  const [animalData, setAnimalData] = useState<Animal | null>(null);

  useEffect(() => {
    if (!loading && pets.length > 0) {
      const animal = pets.find((pet) => String(pet.id) === id);
      setAnimalData(animal);
    }
  }, [id, pets, loading]);

  return (
    <PageOverlay>
      {/* <Box
          display={"flex"}
          justifyContent={"center"}
          height={"5vh"}
          alignItems={"center"}
          alignContent={"center"}
        >
          {animalData ? animalData.name : "loading..."}
        </Box> */}
      <Box>
        {animalData != null && (
          <Box flexDirection={"column"}>
            <Box display={"flex"} justifyContent={"center"} pt={4}>
              <img
                src={animalData.image_data}
                alt="pet_image"
                style={{ height: 250, width: "auto" }}
              />
            </Box>
            <Box>{animalData?.name}</Box>
            <Box>{animalData?.description}</Box>
            <Box>{animalData?.shelter}</Box>
          </Box>
        )}
      </Box>
    </PageOverlay>
  );
};

export default AdoptAnimalPageView;
