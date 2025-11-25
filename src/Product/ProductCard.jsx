import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { TrimSentence } from "../utils/string";
import { Rating, Stack } from "@mui/material";
import { discountPriceFromPercentage } from "../utils/math";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

function ProductCard({ product }) {
  const handleOnCartClick = () => {};

  return (
    <>
      <Card
        sx={{ minWidth: 210, maxWidth: 210, minHeight: 350, maxHeight: 350 }}
      >
        <CardMedia
          component="img"
          alt="product image"
          height="190"
          image={product?.images[0]}
          sx={{ objectFit: "contain", backgroundColor: "#e8e8e8ff" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            pb: 0,
            placeItems: "flex-start",
          }}
        >
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {product?.brand}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            fontWeight={600}
            fontSize={13}
            component="div"
          >
            {TrimSentence(product?.title)}
          </Typography>
          <Stack direction={"row"} gap={1}>
            <Rating
              name="half-rating"
              value={product?.rating}
              precision={0.5}
              readOnly
            />
            <Typography gutterBottom fontSize={15} variant="h6" component="div">
              {product?.rating}
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={4}>
            <Stack sx={{ placeItems: "flex-start" }}>
              <Typography fontSize={19} variant="h6" component="div">
                &#36;{" "}
                {discountPriceFromPercentage(
                  product?.price,
                  product?.discountPercentage
                )}
              </Typography>
              <Stack direction={"row"} gap={1}>
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
            </Stack>
            <IconButton
              size="large"
              color="primary"
              onClick={handleOnCartClick}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
