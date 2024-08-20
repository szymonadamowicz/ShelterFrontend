import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shelter } from "../types";
import { Box } from "@mui/material";
import PageOverlay from "../PageOverlay";


const ShelterPageView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ShelterData, setShelterData] = useState<Shelter | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShelter = async (shelterId: string) => {
      const data = await mockFetchShelter(shelterId);
      console.log(data);
      setShelterData(data);
      setLoading(false); 
    };

    fetchShelter(id ? id : "");
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <PageOverlay>
      <Box bgcolor={"red"} height={"100%"} minHeight={"100vh"}>
        <Box display={"flex"} justifyContent={"center"} height={"5vh"} alignItems={"center"} alignContent={"center"}>
          {ShelterData?.name}
        </Box>
      </Box>
    </PageOverlay>
  );
};

const mockFetchShelter = async (id: string): Promise<Shelter> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `shelter ${id}`, description: "Some description" });
    }, 500);
  });
};

export default ShelterPageView;
