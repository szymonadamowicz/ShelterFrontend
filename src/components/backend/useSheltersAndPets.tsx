import { useEffect, useState } from 'react';
import axios from 'axios';
import { openDB, loadData, saveData } from './indexedDBUtils';

const useSheltersAndPets = () => {
  const [pets, setPets] = useState<any[]>([]);
  const [shelters, setShelters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const token = "f94df8d71fdba8197f12f8937264986d99b81687";
  const petsURL = 'https://respectable-sharlene-foodie-5c103fae.koyeb.app/api/pets/';
  const sheltersURL = 'https://respectable-sharlene-foodie-5c103fae.koyeb.app/api/shelters/';

  useEffect(() => {
    const initDBAndFetchData = async () => {
      try {
        const db = await openDB();

        const loadedPets = await loadData(db, 'pets');
        if (loadedPets.length > 0) {
          setPets(loadedPets);
        } else {
          const petsResponse = await axios.get(petsURL, {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'application/json',
            },
          });

          const petsData = petsResponse.data;
          await saveData(db, 'pets', petsData);
          setPets(petsData);
        }

        const loadedShelters = await loadData(db, 'shelters');
        if (loadedShelters.length > 0) {
          setShelters(loadedShelters);
        } else {
          const sheltersResponse = await axios.get(sheltersURL, {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'application/json',
            },
          });

          const sheltersData = sheltersResponse.data;
          await saveData(db, 'shelters', sheltersData);
          setShelters(sheltersData);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error loading or saving data:', error);
        setError('Failed to load data');
        setLoading(false);
      }
    };

    initDBAndFetchData();
  }, []);

  return { pets, shelters, loading, error };
};

export default useSheltersAndPets;
