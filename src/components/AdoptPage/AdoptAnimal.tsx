import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Animal {
    id: string;
    name: string;
    description: string;
  }  

const AdoptAnimal: React.FC = () => {
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
    <div>
        {animalData?.name}
    </div>
  );
};

const mockFetchAnimal = async (id: string): Promise<Animal> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `Animal ${id}`, description: "Some description" });
    }, 500);
  });
};

export default AdoptAnimal;
