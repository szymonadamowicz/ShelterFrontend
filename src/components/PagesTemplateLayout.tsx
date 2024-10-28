import { Box, Button, TextField, Typography } from "@mui/material";
import { PageOverlayType } from "./types";
import { useNavigate } from "react-router-dom";

const PagesTemplateLayout: React.FC<PageOverlayType> = ({
  children,
  page,
  setPageIncrement,
  setPageDecrement,
  maxPage,
  textAreaVisible = false,
  searchedText = "",
  handleSearchChange,
  title,
  backButton,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      width="100%"
      height="100%"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="auto"
        px={2}
        py={1}
      >
        {backButton && (
          <Button
            sx={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
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
            <Typography color="white" fontSize={18} fontWeight="bold">
              Back
            </Typography>
          </Button>
        )}
        <Typography
          fontSize={25}
          fontWeight="bold"
          color="#4b2e2b"
          textAlign="center"
        >
          {title}
        </Typography>
      </Box>
      {textAreaVisible && (
        <Box p={1}>
          <TextField
            id="outlined-basic"
            label="Search"
            placeholder="Search a pet's name"
            variant="outlined"
            fullWidth
            size="small"
            value={searchedText}
            onChange={handleSearchChange}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black",
                },
                "&:hover fieldset": {
                  borderColor: "black",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black",
                },
              },
            }}
          />
        </Box>
      )}
      <Box flexGrow={1}>{children}</Box>
      <Box justifyContent="space-between" display="flex" mb={1}>
        <Button
          style={{
            height: 50,
            width: 120,
            backgroundColor: page === 1 ? "#233728" : "#658a5f",
          }}
          onClick={() => {
            setPageDecrement();
          }}
          disabled={page === 1}
        >
          <Typography color={page === 1 ? "#726b70" : "white"} fontSize={20}>
            Previous
          </Typography>
        </Button>
        <Typography alignSelf="center" fontSize={22} fontWeight="bold">
          {page}/{maxPage}
        </Typography>
        <Button
          style={{
            height: 50,
            width: 120,
            backgroundColor: page === maxPage ? "#233728" : "#658a5f",
          }}
          onClick={() => {
            setPageIncrement();
          }}
          disabled={page === maxPage}
        >
          <Typography color={page === maxPage ? "#726b70" : "white"}>
            Next
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PagesTemplateLayout;
