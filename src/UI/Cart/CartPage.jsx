import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Divider,
  CardMedia,
} from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../../Context Provider/CreateContext";
import { twoDecimalValue } from "../../utils/math";
import { CartEmptyPage } from "./CartEmptyPage";
export default function CartPage() {
  const { cart, loading, error, clearUserCart, getCartItemCount } =
    useContext(CartContext);

  if (loading) {
    return <>Loading...</>;
  }

  if (!cart || !cart.products) {
    return <CartEmptyPage />;
  }

  if (error) {
    return <>Something Went Wrong... {console.log(error)}</>;
  }

  return (
    <>
      <Paper
        sx={{ margin: 6, mt: 15, p: 5, textAlign: "left" }}
        display={"flex"}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h1" fontWeight={700}>
            Shopping Cart
          </Typography>
          <Button
            onClick={() => {
              clearUserCart();
            }}
            variant="large"
            sx={{ color: "primary.main", fontWeight: 700, fontSize: 20 }}
          >
            Clear All
          </Button>
        </Stack>
        <Divider variant="middle" />
        {Object.values(cart?.products).map((product) => {
          return (
            <NavLink key={product.id} to={`/product/${product.id}`}>
              <CartItem key={product.id} product={product} />
            </NavLink>
          );
        })}

        <Stack
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Box display={"flex"} flexDirection={"row"}>
            <Typography variant="subtitle1" fontWeight={600}>
              Grand Total {"(" + getCartItemCount() + " items)"}:{" "}
            </Typography>
            <Typography variant="subtitle1" sx={{ ml: 2 }}>
              &#8377; {twoDecimalValue(cart.discountedTotal)}
            </Typography>
          </Box>
          <NavLink to="/placeorder">
            <Button variant="contained" sx={{ width: 370 }}>
              Checkout
            </Button>
          </NavLink>
        </Stack>
      </Paper>
    </>
  );
}
