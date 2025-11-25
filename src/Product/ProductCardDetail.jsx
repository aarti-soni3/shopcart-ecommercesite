import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { ProductContext } from "../Context Provider/CreateContext";
import { discountPriceFromPercentage } from "../utils/math";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

  if (loading) return <>Loading...</>;

  if (!product) return <>Product is not found...</>;

  return (
    <>
      <Stack gap={4} direction={"row"}>
        <Stack direction={"row"} spacing={2}>
          <ImageList cols={1} sx={{ height: 450, width: 100 }} rowHeight={130}>
            {product?.images?.map((image) => {
              return (
                <ImageListItem
                  key={image}
                  sx={{ backgroundColor: "#e8e8e8ff" }}
                  onClick={() => {
                    setImage(image);
                  }}
                >
                  <img src={image}></img>
                </ImageListItem>
              );
            })}
          </ImageList>
          <ImageList cols={1} sx={{ height: 450, width: 400 }}>
            <ImageListItem key={image} sx={{ backgroundColor: "#e8e8e8ff" }}>
              <img src={image}></img>
            </ImageListItem>
          </ImageList>
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
            <Typography gutterBottom fontSize={15} variant="h6" component="div">
              {product?.rating}
            </Typography>
          </Stack>

          <Stack direction={"column"} gap={4}>
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
              <Box spacing={8} sx={{ margin: 0.8 }} />
              <Divider sx={{ backgroundColor: "lightgray" }} flexItem />
              <br />
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
              <Button color="primary" sx={{ mt: 2, zIndex: 5 }}>
                <ShoppingCartOutlinedIcon /> Add To Cart
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
export default ProductCardDetail;
