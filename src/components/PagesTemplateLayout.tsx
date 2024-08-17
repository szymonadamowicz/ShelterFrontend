import { Box, Button } from "@mui/material";
import { ReactNode } from "react";

interface PageOverlayType {
  children: ReactNode;
  page:number;
  setPageIncrement: ()=>void;
  setPageDecrement: ()=>void;
  maxPage: number;
}

const AdoptPagesLayout: React.FC<PageOverlayType> = ({ children,page, setPageIncrement, setPageDecrement, maxPage }) => {

  return (
    <Box
      width="100%"
      height="100%"
      minHeight={"100vh"}
      bgcolor="red"
      display="flex"
      flexDirection="column"
    >
      <Box flexGrow={1}>{children}</Box>
      <Box justifyContent={"space-between"} display={"flex"}>
        <Button style={{height: 50, width: 100, backgroundColor:"yellow"}} onClick={()=>{setPageDecrement()}} disabled={page === 0 && true}>
          asd
        </Button>
        <Button style={{height: 50, width: 100, backgroundColor:"yellow"}}onClick={()=>{setPageIncrement()}} disabled={page === maxPage && true}>
          asd
        </Button>
      </Box>
    </Box>
  );
};

export default AdoptPagesLayout;
