import {
  Box,
  IconButton,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";
import { CartContext } from "../../Context Provider/CreateContext";

export default function CartPage() {
  const { cart, loading, error, clearUserCart } = useContext(CartContext);

  if (loading) {
    return <>Loading...</>;
  }

  if (!cart) {
    return <> Cart is Empty....</>;
  }

  if (error) {
    return <>Something Went Wrong... {console.log(error)}</>;
  }

  return (
    <>
      <Box
        sx={{ margin: 2 }}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Shopping Cart</Typography>
        <IconButton
          onClick={() => {
            clearUserCart();
          }}
        >
          <Typography
            variant="h5"
            sx={{ textDecoration: "underline", color: "blue" }}
          >
            Clear All
          </Typography>
        </IconButton>
      </Box>
      <List>
        {Object.values(cart.products).map((product) => {
          return (
            <ListItem key={product.id}>
              <NavLink key={product.id} to={`/product/${product.id}`}>
                <CartItem key={product.id} product={product} />
              </NavLink>
            </ListItem>
          );
        })}
      </List>

      <br />
      <br />
      <CartSummary discountedTotal={cart.discountedTotal} />

      <br />
      <NavLink to="/placeorder">
        <Button variant="contained" sx={{ width: 370 }}>
          Checkout
        </Button>
      </NavLink>
    </>
  );
}
