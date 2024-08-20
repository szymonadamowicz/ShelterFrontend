import { Box } from "@mui/material";
import ShelterDisplay from "./ShelterDisplay";
import { SheltersProps } from "../types";

const SheltersList: React.FC<SheltersProps> = ({
  shelters
}) => {
 
  return (
    <Box display="flex" flexDirection="column" gap={2} bgcolor={"grey"}>
      {shelters.map((item, index) => (
        <Box
          key={index}
          bgcolor={"blue"}
          display={"flex"}
          justifyContent={"center"}
        >
          <ShelterDisplay>{item.name}</ShelterDisplay>
        </Box>
      ))}
    </Box>
  );
};

export default SheltersList;
