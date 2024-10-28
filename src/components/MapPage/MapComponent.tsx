import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import MapPopup from "./MapPopup";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MapComponent: React.FC = () => {
  const position: LatLngExpression = [54.352001, 18.646642];

  const [searchedText, setSearchedText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedText(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <Button
        sx={{
          position: "absolute",
          zIndex: 9999,
          left: "6%",
          top: 20,
          height: "3.5vh",
          width: "5vh",
          bgcolor: "#658a5f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            bgcolor: "#4a7048",
          },
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <Typography
          fontSize={18}
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          Back
        </Typography>
      </Button>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <TextField
        id="outlined-basic"
        label="Search"
        placeholder="Search a shelte name"
        variant="outlined"
        fullWidth
        size="small"
        value={searchedText}
        onChange={handleSearchChange}
        style={{
          zIndex: 9999,
          position: "absolute",
          top: 20,
          width: "70%",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "white",
          borderRadius: 16,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
      />
      <MapPopup searchedText={searchedText} />
    </MapContainer>
  );
};

export default MapComponent;
