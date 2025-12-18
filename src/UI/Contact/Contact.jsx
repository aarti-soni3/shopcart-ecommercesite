import { Box, Stack, Typography } from "@mui/material";
import { ContactForm } from "./ContactForm";
import ContactInformation from "./ContactInformation";
import MapLocation from "./MapLocation";
import CommonHeroSection from "../Other/CommonHeroSection";


export default function Contact() {
  return (
    <>
      <CommonHeroSection imageUrl={"/contact.jpg"} />
      <Stack gap={2} justifySelf={"center"}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h2" fontWeight={800}>
            {" "}
            Contact Us
          </Typography>
        </Box>
        <Stack direction={{ sm: "column", md: "row" }} gap={6}>
          <ContactForm />
          <ContactInformation />
        </Stack>
          <MapLocation />
      </Stack>
    </>
  );
}
