import { Box } from "@mui/material";
import { DisplayProp } from "../types";

const ShelterDisplay: React.FC<DisplayProp> = ({ children }) => {
  return (
    <Box
      width={"100%"}
      height={"auto"}
      minHeight={130}
      bgcolor={"rgba(255, 255, 255, 0.1)"}
      sx={{
        backdropFilter: "blur(5px)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        border: "1px solid rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </Box>
  );
};

export default ShelterDisplay;
