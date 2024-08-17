import { Box } from "@mui/material";
import ShelterDisplay from "./ShelterDisplay";

interface SheltersProps {
    shelters: { name: string; originalIndex: number }[];
    numOfShelters: number;
  page: number;
}

const SheltersList: React.FC<SheltersProps> = ({
  shelters,
  numOfShelters,
  page,
}) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} bgcolor={"grey"}>
      {shelters
        .map((item, index) => (
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
