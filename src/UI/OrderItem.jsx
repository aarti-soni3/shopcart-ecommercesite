import { twoDecimalValue } from "../utils/math";
import { trimSentence } from "../utils/string";
import Card from "@mui/material/Card";
import { Box, IconButton } from "@mui/material";
import { Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function OrderItem({ product }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          minWidth: {
            sm: 450,
            md: 850,
            lg: 1050,
          },
          minHeight: {
            xs: 140,
            sm: 140,
            md: 160,
            lg: 180,
          },
          maxWidth: {
            sm: 650,
            md: 1050,
            lg: 1250,
          },
          maxHeight: {
            xs: 140,
            sm: 140,
            md: 160,
            lg: 180,
          },
        }}
      >
        <CardMedia
          component="img"
          alt="product image"
          image={product?.thumbnail}
          sx={{
            width: 220,
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
            }}
          >
            <Stack sx={{ minWidth: 250, maxWidth: 750 }}>
              <Typography variant="h5" fontWeight={600} component="div">
                {trimSentence(product?.title, 30)}
              </Typography>

              <Stack direction={"row"} gap={2}>
                <Typography
                  gutterBottom
                  fontSize={13}
                  variant="h6"
                  component="div"
                  sx={{ textDecoration: "line-through" }}
                >
                  &#36;{product?.price}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={13}
                  fontWeight={600}
                  variant="h6"
                  component="div"
                >
                  &#8722;{product?.discountPercentage}&#37;
                </Typography>
              </Stack>
              <Stack direction={'row'}>
                <Typography
                  gutterBottom
                  fontSize={13}
                  fontWeight={600}
                  variant="h6"
                  component="div"
                >
                  Quantity :
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={13}
                  variant="h6"
                  component="div"
                >
                  {product?.quantity}
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ minWidth: 100, textAlign: "right" }}>
              <Typography fontSize={19} variant="h6" component="div">
                &#36;
                {twoDecimalValue(product.discountedTotal)}
              </Typography>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
