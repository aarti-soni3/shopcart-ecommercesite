import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  CartContext,
  ProductContext,
} from "../../Context Provider/CreateContext";
import { discountPriceFromPercentage } from "../../utils/math";

function ProductCardDetail() {
  const { id } = useParams();
  const { getProductByID, loading } = useContext(ProductContext);
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const newProduct = await getProductByID(id);
      setProduct(newProduct);
      setImage(newProduct?.images[0]);
      setRating(newProduct?.rating);
    };

    fetchProduct();
  }, [id, getProductByID]);

  const { addToCart, updateProductQuantity, isProductInCart } =
    useContext(CartContext);

  const [isAdding, setIsAdding] = useState(false);
  const inCart = isProductInCart(product?.id);

  const handleOnCartClick = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      setIsAdding(true);

      if (inCart) {
        await updateProductQuantity(id, 1);
      } else {
        await addToCart(product, 1);
      }
    } catch (error) {
      console.log("can't add product to cart", error);
      throw new Error(error);
    } finally {
      setIsAdding(false);
    }
  };

  if (loading) return <>Loading...</>;

  if (!product) return <>Product is not found...</>;

  return (
    <>
      <Paper
        elevation={4}
        sx={{ m: { xs: 2, sm: 4, md: 8 }, p: 4, mt: 15, maxWidth: 1000 }}
      >
        <Stack gap={4} direction={{ sm: "column", md: "row" }}>
          <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={2}>
            {/* <Stack  gap={2} direction={{ xs: "row", sm: "column" }} > */}
            <Stack
              gap={2}
              cols={{ xs: 3, sm: 1 }}
              direction={{ xs: "row", sm: "column" }}
              sx={{
                p: 0.2,
                height: { xs: "auto", sm: 500 },
                width: { xs: "100%", sm: 100 },
                objectFit: "contain",
                overflowX: { xs: "auto", sm: "visible" },
                overflowY: { xs: "hidden", sm: "auto" },
                flexWrap: "nowrap",
              }}
            >
              {product?.images?.map((image) => {
                return (
                  <Card
                    key={image}
                    sx={{
                      backgroundColor: "#e8e8e8ff",
                      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: 0.8,
                      minWidth: { xs: 100, sm: 100 },
                      width: { xs: 100, sm: 100 },
                      height: { xs: 120, sm: 140 },
                      flexShrink: 0,
                    }}
                    onClick={() => {
                      setImage(image);
                    }}
                  >
                    <CardMedia
                      image={image}
                      alt="image"
                      component="img"
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover", // Ensures image fits nicely
                      }}
                    />
                  </Card>
                );
              })}
            </Stack>
            {/* </Stack> */}

            <CardMedia
              image={image}
              alt="image"
              component="img"
              sx={{
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: 0.8,
                height: { xs: "100%", sm: "100%" },
                width: { xs: "100%", sm: 440 },
                objectFit: "contain",
                backgroundColor: "#e8e8e8ff",
              }}
            />
          </Stack>
          <Stack>
            <Typography
              gutterBottom
              variant="h4"
              fontWeight={600}
              textAlign={"start"}
              component="div"
            >
              {product?.title}
            </Typography>

            <Stack direction={"row"} gap={1}>
              <Rating
                name="half-ratings"
                value={rating}
                precision={0.5}
                readOnly
              />
              <Typography
                gutterBottom
                fontSize={15}
                variant="h6"
                component="div"
              >
                {product?.rating}
              </Typography>
            </Stack>

            <Stack direction={"row"} gap={4}>
              <Stack sx={{ placeItems: "flex-start" }} gap={1}>
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                  <Typography
                    fontSize={25}
                    fontWeight={700}
                    variant="h6"
                    component="div"
                  >
                    &#36;{" "}
                    {discountPriceFromPercentage(
                      product?.price,
                      product?.discountPercentage
                    )}
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize={13}
                    variant="h6"
                    component="div"
                    color="text.secondary"
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
                    color="success.main"
                  >
                    &#8722;{product?.discountPercentage}&#37;
                  </Typography>
                </Stack>
                 <Button
                  variant="contained"
                  sx={{ mt: 2, zIndex: 5 }}
                  onClick={handleOnCartClick}
                  disabled={isAdding}
                >
                  <ShoppingCartOutlinedIcon /> Add To Cart
                </Button>
                <Box sx={{ margin: 0.2 }} />
                <Divider
                  sx={{ backgroundColor: "lightgray", mb: 1.5 }}
                  flexItem
                />
                <Typography gutterBottom variant="body1" component="div">
                  <b>Brand :</b> {product?.brand}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  <b>Category :</b> {product?.category}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  <b>Stock :</b> {product?.stock}
                </Typography>
                <Typography
                  gutterBottom
                  textAlign={"start"}
                  variant="body1"
                  component="div"
                >
                  <b>About the product :</b> <br /> {product?.description}
                </Typography>
               
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
}
export default ProductCardDetail;
