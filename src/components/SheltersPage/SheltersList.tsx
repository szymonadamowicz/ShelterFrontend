import { Box } from "@mui/material";
import ShelterDisplay from "./ShelterDisplay";

const SheltersList = () => {
  const a = ["a", "b", "c", "d"];

  return (
    <Box>
      {a.map((item, index) => (
        <Box mb={2}>
          <ShelterDisplay>{item}</ShelterDisplay>
        </Box>
      ))}
    </Box>
  );
};

export default SheltersList;
