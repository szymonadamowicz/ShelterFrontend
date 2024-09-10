import { Box, Button } from "@mui/material";
import ShelterDisplay from "./ShelterDisplay";
import { SheltersProps } from "../types";

const SheltersList: React.FC<SheltersProps> = ({ shelters }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {shelters.map((item, index) => (
        <Box
          key={index}
          display={"flex"}
          justifyContent={"center"}
        >
          <ShelterDisplay>
            <Box>
              <Box>{item.name}</Box>
              <Button>avaliable pets</Button>
              <Button>Page website</Button>
            </Box>
          </ShelterDisplay>
        </Box>
      ))}
    </Box>
  );
};

export default SheltersList;
