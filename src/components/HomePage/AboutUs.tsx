import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ExpandableTextProps, AboutUsProps } from "../types";

const ExpandableText: React.FC<ExpandableTextProps> = ({
  title,
  text,
  maxChar,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Typography color={"#4b2e2b"} fontWeight={"600"} fontSize={26} mt={5} mb={2}>
        {title}
      </Typography>
      <Typography color={"#4b2e2b"} fontSize={22}>
        <Box >
          {isExpanded ? text : `${text.substring(0, maxChar)}...`}
          <Typography
            onClick={toggleExpand}
            color={"#4b2e2b"}
            style={{ cursor: "pointer" }}
            width={90}
            sx={{ textDecoration: "underline" }}
          >
            {isExpanded ? " Show less" : " Show more"}
          </Typography>
        </Box>
      </Typography>
    </>
  );
};

const AboutUs: React.FC<AboutUsProps> = ({ texts }) => {
  return (
    <Box>
      <ExpandableText title={"About Us"} text={texts[0]} maxChar={350} />
      <ExpandableText title={"Our Mission"} text={texts[1]} maxChar={350} />
    </Box>
  );
};

export default AboutUs;
