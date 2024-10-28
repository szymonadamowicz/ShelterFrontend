import { Box, Button } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { styled } from "styled-components";
import L, { LatLngTuple } from "leaflet";
import useSheltersAndPets from "../../backend/useSheltersAndPets";

interface PopupProps {
  searchedText: string;
}

const MapPopup: React.FC<PopupProps> = ({ searchedText }) => {
  const { shelters } = useSheltersAndPets();

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const customIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const StyledPop = styled(Popup)`
    .leaflet-popup-content-wrapper {
      padding: 0 !important;
      margin: 0 !important;
      padding-right: 20px !important; /* Add padding to ensure the "x" is visible */
    }

    .leaflet-popup-content {
      margin: 0 !important;
      padding: 0 !important;
    }
  `;

  return (
    <div>
      {shelters.length > 0 && shelters
        .filter((wo) =>
          wo.name.toLowerCase().includes(searchedText.toLowerCase())
        )
        .map((item) => (
          <Marker
            key={item.id}
            position={[item.x_coordinate, item.y_coordinate] as LatLngTuple}
            icon={customIcon}
          >
            <StyledPop>
              <Box display={"flex"} flexDirection={"row"}>
                <img
                  src={"https://picsum.photos/200/300"}
                  alt="shelter-pic"
                  style={{
                    height: 150,
                    width: "auto",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                />
                <div style={{ marginTop: 4, marginLeft: 4, width: 200 }}>
                  {item.name}
                </div>
                <div>
                  <Button
                    onClick={() => {
                      window.location.href = item.news_link;
                    }}
                  >
                    Shelter {item.id}
                  </Button>
                </div>
              </Box>
            </StyledPop>
          </Marker>
        ))}
    </div>
  );
}
  export default MapPopup