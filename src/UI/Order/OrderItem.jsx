import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { twoDecimalValue } from "../../utils/math";
import { trimSentence } from "../../utils/string";

export default function OrderItem({ product }) {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          display: "flex",
          m: 2,
        }}
      >
        <Stack direction={{ xs: "column", sm: "row" }} sx={{ width: "100%" }}>
          <CardMedia
            component="img"
            alt="product image"
            image={product?.thumbnail}
            sx={{
              width: { xs: "100%", sm: 120 },
              height: { xs: 120, sm: 120 },
              objectFit: "contain",
              backgroundColor: "#e8e8e8ff",
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                pb: 0,
                placeItems: "flex-start",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <Stack>
                <Typography
                  variant="h5"
                  fontSize={{ xs: 18, sm: 22 }}
                  fontWeight={600}
                  component="div"
                >
                  {trimSentence(product?.title, 20)}
                </Typography>

                <Stack direction={"row"} sx={{ color: "text.secondary" }}>
                  <Typography
                    gutterBottom
                    fontSize={15}
                    variant="h6"
                    component="div"
                  >
                    Quantity:
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize={15}
                    variant="h6"
                    component="div"
                  >
                    {product?.quantity}
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ minWidth: 100, textAlign: "right" }}>
                <Typography
                  fontSize={19}
                  fontWeight={600}
                  variant="h6"
                  component="div"
                >
                  &#36;
                  {twoDecimalValue(product.discountedTotal)}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Stack>
      </Card>
    </>
  );
}
