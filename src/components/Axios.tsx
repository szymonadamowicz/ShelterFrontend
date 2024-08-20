import axios from "axios";
import { useState, useEffect } from "react";
import { Shelters } from "./types";


const [data, setData] = useState<Shelters[]>([]);

const token = "f94df8d71fdba8197f12f8937264986d99b81687";

const config = {
  headers: {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  },
};

const apiUrl =
  "https://respectable-sharlene-foodie-5c103fae.koyeb.app/api/shelters/";

useEffect(() => {
  axios
    .get<Shelters[]>(apiUrl, config)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error("Błąd przy pobieraniu danych:", error);
      if (error.response) {
        console.error("Odpowiedź serwera:", error.response.data);
      }
    });
}, []); 

// data.length > 0 && data[1]?.pets.length > 0
// ? data[1].pets[1].image_data
// : ""
// }