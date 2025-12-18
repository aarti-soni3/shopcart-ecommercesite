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
            justifyContent: "",
            width: "90%",
            height: "200px",
            m: 6,
            ml: 7.5,
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
              sx={{ color: "primary.contrastText", mt: 1 }}
            >
              Your one-stop destination for quality products
            </Typography>
          </Stack>
        </Paper>

        <Stack gap={10} direction={"row"} sx={{ m: 8, mt: 0 }}>
          <Card
            sx={{ display: "flex", textAlign: "left", width: 600, height: 600 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
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
                    Our commitment to customer satisfaction drives every aspect
                    of our business. We continually monitor the latest market
                    trends to ensure that only the best items make it into our
                    catalog, which spans diverse categories including Kitchen
                    Households, Phone Accessories, Home Appliances, Lifestyle &
                    Gadgets, and Beauty & Health. To enhance the shopping
                    experience, we leverage innovative technologies and seamless
                    online integration, focusing on a user-friendly platform and
                    quick, reliable delivery services. By prioritizing an
                    effortless shopping journey and reliable support, ShopCart
                    aims to build lasting customer loyalty and help businesses
                    and consumers discover new opportunities in the e-commerce
                    landscape.
                  </Typography>
                </Stack>
              </CardContent>
            </Box>
          </Card>
          <CardMedia
            component="img"
            sx={{
              width: "350px",
              height: "600px",
              backgroundSize: "cover",
              borderRadius: 0.8,
            }}
            image="/teamwork2.jpg"
            alt="Live from space album cover"
          />
        </Stack>
      </Stack>
    </>
  );
}
