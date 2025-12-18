import styled from "@emotion/styled";
import { Box, Typography, Button, CardMedia, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroBox = styled(Box)(() => ({
  // backgroundImage: theme.palette.custom.gradients.heroSection,
  backgroundImage: `url('/ecommerce.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "650px",
  width: "100%",
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "center",
    lg: "left",
    xl: "left",
  },
  alignItems: "center",
  color: "white",
  p: 8,
  m: 8,
}));

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <HeroBox className="full-width-no-padding">
        <Box
          sx={{
            textAlign: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            },
            m: { sm: 20, md: 8, lg: 15 },
            mt: { xs: 10, sm: 25 },
            ml: { xs: 2},
          }}
        >
          <Typography
            variant="h1"
            fontSize={{ xs: 40, sm: 50, md: 70, lg: 80 }}
            width={{ xs: 300, sm: 500, md: 450, lg: 500 }}
            fontWeight={800}
            sx={{
              textTransform: "capitalize",
              color: "primary.contrastText",
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
              color: "primary.contrastText",
              mt: 1,
            }}
          >
            Up to 15% Off...
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 5 }}
            onClick={() => {
              navigate("/product/upto15");
            }}
          >
            Shop Now
          </Button>
        </Box>
      </HeroBox>
    </>
  );
}
