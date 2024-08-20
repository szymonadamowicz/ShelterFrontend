import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Animal } from "../types";
import PageOverlay from "../PageOverlay";
import { Box } from "@mui/material";

const AdoptAnimalPageView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animalData, setAnimalData] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimal = async (animalId: string) => {
      const data = await mockFetchAnimal(animalId);
      console.log(data);
      setAnimalData(data);
      setLoading(false);
    };

    fetchAnimal(id ? id : "");
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageOverlay>
      <Box bgcolor={"red"} height={"100%"} minHeight={"100vh"}>
        <Box display={"flex"} justifyContent={"center"} height={"5vh"} alignItems={"center"} alignContent={"center"}>
          {animalData?.name}
        </Box>
      </Box>
    </PageOverlay>
  );
};

const mockFetchAnimal = async (id: string): Promise<Animal> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Animal ${id}`, description: "Some description" });
    }, 500);
  });
};

export default AdoptAnimalPageView;
