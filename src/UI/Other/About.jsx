import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CommonHeroSection from "./CommonHeroSection";

export default function About() {
  return (
    <>
      <CommonHeroSection imageUrl={"/teamwork.jpg"} />
      <Stack sx={{ justifySelf: "center" }}>
        <Paper
          elevation={4}
          sx={(theme) => ({
            backgroundImage: theme.palette.custom.gradients.aboutPageCard,
            borderRadius: 0.8,
            alignContent: "center",
            justifySelf: "center",
            width: { xs: "60%", sm: "80%" },
            height: "200px",
            m: { xs: 2, sm: 4, md: 6 },
            ml: { xs: 10, sm: 4, md: 8, lg: 15, xl: 15 },
          })}
        >
          <Stack>
            <Typography
              variant="h1"
              fontWeight={800}
              sx={{ color: "primary.contrastText" }}
            >
              About ShopCart
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize={14}
              sx={{ color: "primary.contrastText", mt: 1 }}
            >
              Your one-stop destination for quality products
            </Typography>
          </Stack>
        </Paper>

        <Stack
          gap={10}
          direction={{ xs: "column", md: "row" }}
          sx={{ m: 4, mt: 0 }}
        >
          <Paper
            elevation={4}
            sx={{ display: "flex", textAlign: "left", p: 2, maxWidth: 600 }}
          >
            <CardContent>
              <Typography variant="h2" fontWeight={600}>
                Our Story
              </Typography>
              <Stack direction={"column"} gap={2} sx={{ mt: 3 }}>
                <Typography variant="subtitle1">
                  Founded in 2020, ShopCart has rapidly grown to become a
                  trusted e-commerce platform dedicated to providing quality
                  products at affordable prices with exceptional customer
                  service. Our core mission is rooted in the belief that
                  shopping is a right, not a luxury, and we strive to make the
                  best products accessible to everyone, regardless of their
                  location.
                </Typography>

                <Typography variant="subtitle1">
                  Our commitment to customer satisfaction drives every aspect of
                  our business. We continually monitor the latest market trends
                  to ensure that only the best items make it into our catalog,
                  which spans diverse categories including Kitchen Households,
                  Phone Accessories, Home Appliances, Lifestyle & Gadgets, and
                  Beauty & Health.
                </Typography>
              </Stack>
            </CardContent>
          </Paper>
          <CardMedia
            component="img"
            sx={{
              width: { xs: "250px", sm: "90%",md:"350px" },
              height: { xs: "300px", sm: "600px" },
              backgroundSize: "cover",
              borderRadius: 0.8,
              boxShadow: "1px 1px 4px 1px rgba(0,0,0,0.6)",
            }}
            image="/teamwork2.jpg"
            alt="Live from space album cover"
          />
        </Stack>
      </Stack>
    </>
  );
}
