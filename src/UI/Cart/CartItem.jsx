import Card from "@mui/material/Card";
import { Avatar, Box, Chip, IconButton } from "@mui/material";
import { Rating, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext, useState } from "react";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { trimSentence } from "../../utils/string";
import { twoDecimalValue } from "../../utils/math";
import {
  CartContext,
  FeedbackContext,
} from "../../Context Provider/CreateContext";

export default function CartItem({ product }) {
  const { removeFromCart, updateProductQuantity } = useContext(CartContext);
  const [isAdding, setIsAdding] = useState(false);
  const { showSuccessFeedback } = useContext(FeedbackContext);

  const handleOnAddButtonClick = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      setIsAdding(true);
      await updateProductQuantity(product.id, 1);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsAdding(false);
    }
  };

  const handleOnRemoveButtonClick = async (event) => {
    event.stopPropagation();
    event.preventDefault();

    try {
      setIsAdding(true);
      product.quantity <= 1 ? showSuccessFeedback("Product Removed!") : "";
      await updateProductQuantity(product.id, -1);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <Card sx={{ m: 4, display: "flex" }}>
      <Stack justifyContent={"flex-start"}>
        <CardMedia
          component="img"
          alt="product image"
          image={product?.thumbnail}
          sx={{
            width: 200,
            height: 200,
            objectFit: "contain",
            backgroundColor: "#e8e8e8ff",
          }}
        />
      </Stack>
      <Stack direction={"row"} sx={{ m: 2 }}>
        <Stack>
          <Typography
            variant="h5"
            fontSize={{ xs: 16, sm: 18, md: 22 }}
            fontWeight={600}
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {trimSentence(product?.title, 20)}
          </Typography>

          <Stack
            direction={{ xs: "row", sm: "row" }}
            gap={{ xs: 1, sm: 2 }}
            sx={{ flexWrap: "wrap" }}
          >
            <Typography
              gutterBottom
              variant="h6"
              fontSize={{ xs: 12, sm: 13 }}
              sx={{ textDecoration: "line-through", m: 0 }}
            >
              &#36;{product?.price}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              fontSize={{ xs: 12, sm: 13 }}
              fontWeight={600}
              color="success.main"
              sx={{ m: 0 }}
            >
              &#8722;{product?.discountPercentage}&#37;
            </Typography>
          </Stack>

          <Stack gap={1} direction="row" sx={{ mt: 1 }} alignItems="center">
            <IconButton
              sx={{
                border: 1,
                width: { xs: 32, sm: 28 },
                height: { xs: 32, sm: 28 },
                p: 0,
              }}
              onClick={handleOnRemoveButtonClick}
              disabled={isAdding}
            >
              <RemoveOutlinedIcon fontSize="small" color="primary" />
            </IconButton>
            <Typography
              fontSize={{ xs: 16, sm: 20 }}
              variant="h6"
              component="div"
              sx={{ minWidth: 24, textAlign: "center" }}
            >
              {product.quantity}
            </Typography>
            <IconButton
              sx={{
                border: 1,
                width: { xs: 32, sm: 28 },
                height: { xs: 32, sm: 28 },
                p: 0,
              }}
              onClick={handleOnAddButtonClick}
              disabled={isAdding}
            >
              <AddOutlinedIcon fontSize="small" color="primary" />
            </IconButton>
          </Stack>
        </Stack>

        <Stack
          sx={{
            minWidth: { xs: "100%", sm: 100 },
            textAlign: { xs: "left", sm: "right" },
            alignItems: { xs: "flex-start", sm: "flex-end" },
          }}
        >
          <Typography
            fontSize={{ xs: 18, sm: 19 }}
            variant="h6"
            fontWeight={600}
            component="div"
          >
            &#36; {twoDecimalValue(product.discountedTotal)}
          </Typography>

          <IconButton
            size="large"
            color="primary"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              removeFromCart(product.id);
              showSuccessFeedback("Product Removed !");
            }}
            sx={{ p: 1, mt: 1 }}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Card>
  );
}
