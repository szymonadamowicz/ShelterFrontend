import { Box, Typography } from "@mui/material";
import { useState } from "react";
import HomeTags from "./HomeTags";

interface ExpandableTextProps {
  title: string;
  text: string;
  maxChar: number;
}

interface AboutUsProps {
  texts: string[];
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ title, text, maxChar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

    
      const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };
    
      return (
        <>
          <Typography color={"white"} fontWeight={"600"} fontSize={24}>
            {title}
          </Typography>
          <Typography color={"white"} fontSize={20}>
            <Box>
              {isExpanded ? text : `${text.substring(0, maxChar)}...`}
              <Typography
                onClick={toggleExpand}
                color={"pink"}
                style={{ cursor: "pointer" }}
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
      <ExpandableText title={"About Us"} text={texts[0]} maxChar={200} />
      <HomeTags />
      <ExpandableText title={"Our Mission"} text={texts[1]} maxChar={150} />
    </Box>
  );
};

export default AboutUs;
