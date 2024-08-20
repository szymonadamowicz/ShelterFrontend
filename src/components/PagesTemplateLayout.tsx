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
  title
}) => {
  return (
    <Box
      width="100%"
      height="100%"
      minHeight={"100vh"}
      bgcolor="red"
      display="flex"
      flexDirection="column"
    >
      <Typography fontSize={20} color={"white"} textAlign={"center"}>
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
          />
        </Box>
      )}
      <Box flexGrow={1}>{children}</Box>
      <Box justifyContent={"space-between"} display={"flex"}>
        <Button
          style={{ height: 50, width: 100, backgroundColor: "yellow" }}
          onClick={() => {
            setPageDecrement();
          }}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          style={{ height: 50, width: 100, backgroundColor: "yellow" }}
          onClick={() => {
            setPageIncrement();
          }}
          disabled={page === maxPage}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PagesTemplateLayout;
