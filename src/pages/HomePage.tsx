import { Box, Typography } from "@mui/material";
import ImageCarousel from "../components/HomePage/ImageCarousel";
import AboutUs from "../components/HomePage/AboutUs";
import PageOverlay from "../components/PageOverlay";


export default function HomePage() {
  return (
    <PageOverlay backButton={false}>
        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          width={"100%"}
        >
          <Typography color={"#4b2e2b"} fontSize={20} mt={2}>
            Shelter App
          </Typography>

          <ImageCarousel imagesToDisplay={4} />
        </Box>
        <Box width={"100%"} p={1}>
          <AboutUs
            texts={[
              `Our site is dedicated to rescuing and rehoming animals in need. 
  We provide a safe and loving environment for abandoned and stray animals until they find their forever homes. 
  Our team of caring professionals works tirelessly to ensure the well-being of every animal that comes through our doors. 
  We offer a range of services including medical care, behavioral training, and socialization to prepare our animals for adoption. 
  Our shelter also collaborates with other rescue organizations and volunteers to maximize our impact and help as many animals as possible.`,
              `Our mission is to save lives, one animal at a time. 
  We strive to create a community where every animal is treated with respect and compassion. 
  Through our rescue efforts, educational programs, and community outreach, we aim to make a difference in the lives of both animals and people. 
  We believe in the importance of spaying and neutering to control the pet population and prevent unnecessary suffering. 
  By providing resources and support to pet owners, we work to ensure that all animals receive the care they deserve. 
  Our ultimate goal is to find loving homes for every animal in our care and promote a culture of kindness and responsibility towards all living beings.`,
            ]}
          />
        </Box>
    </PageOverlay>
  );
}
