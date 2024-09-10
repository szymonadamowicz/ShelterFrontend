import { Box, Button, TextField, Typography } from "@mui/material";
import { PageOverlayType } from "./types";

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
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      minHeight={"100vh"}
      display="flex"
      flexDirection="column"
    >
      <Typography fontSize={20} color={"#4b2e2b"} textAlign={"center"}>
        {title}
      </Typography>
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
      <Box justifyContent={"space-between"} display={"flex"}>
        <Button
          style={{
            height: 50,
            width: 100,
            backgroundColor: page === 1 ? " #c3ab93" : "#D4A373",
          }}
          onClick={() => {
            setPageDecrement();
          }}
          disabled={page === 1}
        >
          <Typography color={page === 1 ? "#726b70" : "#3A4E3E"}>
            Previous
          </Typography>
        </Button>
        <Typography alignSelf={"center"}>
          {page}/{maxPage}
        </Typography>
        <Button
          style={{
            height: 50,
            width: 100,
            backgroundColor: page === maxPage ? " #c3ab93" : "#D4A373",
          }}
          onClick={() => {
            setPageIncrement();
          }}
          disabled={page === maxPage}
        >
          <Typography color={page === maxPage ? "#726b70" : "#3A4E3E"}>
            Next
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PagesTemplateLayout;
