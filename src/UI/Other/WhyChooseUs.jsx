import { Card, CardContent, CardMedia, Divider, Stack, Typography } from "@mui/material";

export default function WhyChooseUs() {
  const data = [
    {
      id: 1,
      imageUrl: "/fast delivery.png",
      title: "Fast Delivery",
      detail: "Get your orders delivered quickly to your doorstep",
    },
    {
      id: 2,
      imageUrl: "/secure payment.png",
      title: "Secure Payment",
      detail: "Safe and encrypted payment processing",
    },
    {
      id: 3,
      imageUrl: "/easy return.png",
      title: "Easy Returns",
      detail: "Hassle-free returns within 30 days",
    },
  ];
  console.log(data);

  return (
    <>
      <Stack
        sx={{
          m: "50px 0px",
          p: "10px 0px",
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h2" fontWeight={800} sx={{ mt: 5 }}>
          Why Choose Us ?
            <Divider
                        variant="middle"
                        sx={{
                          borderColor: "primary.main",
                          borderBottomWidth: 4,
                          borderRadius: 1,
                          width: { xs: "35%", sm: "15%", md: "10%", lg: "10%" ,xl:'10%'},
                          justifySelf: "center",
                          mt: 0.5,
                        }}
                      />
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          gap={4}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          sx={{ mt: 4 }}
        >
          {data.map((card) => {
            return (
              <Card
                key={card.id}
                sx={{
                  minWidth: 300,
                  maxWidth: 300,
                  minHeight: 230,
                  maxHeight: 230,
                  border: "none",
                  boxShadow: 0,
                  backgroundColor: "transparent",
                }}
              >
                <CardMedia
                  component="img"
                  image={card.imageUrl}
                  alt="image"
                  sx={{
                    width: 100,
                    height: 100,
                    m: 2,
                    justifySelf: "center",
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography variant="h2"> {card.title}</Typography>
                  <Typography fontSize={14} variant="subtitle2">
                    {card.detail}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
