import styled from "@emotion/styled";
import { Box, Typography, Button, CardMedia, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroBox = styled(Box)(({ theme }) => ({
  backgroundImage: theme.palette.custom.gradients.heroSection,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "650px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
}));

export default function HeroSection() {

  const navigate = useNavigate()

  return (
    <>
      <HeroBox className="full-width-no-padding">
        <Stack
          direction={{ md: "row" }}
          flexGrow={"0.75 0.25"}
          gap={{ xs: 5, sm: 8, md: 5, lg: 15 }}
          sx={{
            alignSelf: {
              xs: "end",
              sm: "end",
              md: "center",
              lg: "center",
              xl: "center",
            },
          }}
        >
          <Box
            sx={{
              textAlign: { sm: "center", md: "left" },
            }}
          >
            <Typography
              variant="h1"
              fontSize={{ xs: 30, sm: 40, md: 70, lg: 80 }}
              width={{ xs: 300, sm: 380, md: 450, lg: 500 }}
              fontWeight={800}
              sx={{
                textTransform: "capitalize",
                color: "text.primary",
                marginRight: { xs: 0, sm: 0, md: 10, lg: 15 },
                mt: { lg: 8 },
              }}
            >
              Mega sale special offer
            </Typography>
            <Typography
              variant="h3"
              fontSize={{ xs: 15, sm: 18, md: 25, lg: 30 }}
              sx={{
                color: "text.primary",
                mt: 1,
              }}
            >
              Up to 15% Off...
            </Typography>

            <Button variant="contained" sx={{ mt: 5 }} onClick={()=>{navigate('/product/upto15')}}>
              Shop Now
            </Button>
          </Box>
          <Stack sx={{ alignItems: "flex-end" }}>
            <CardMedia
              component="img"
              image="/girl.png"
              alt="Flipped image"
              sx={{
                transform: "scaleX(-1)",
                width: { xs: 250, sm: 250, md: 310, lg: 380, xl: 400 },
                height: { xs: 320, sm: 320, md: 400, lg: 480, xl: 500 },
              }}
            />
          </Stack>
        </Stack>
      </HeroBox>
    </>
  );
}
