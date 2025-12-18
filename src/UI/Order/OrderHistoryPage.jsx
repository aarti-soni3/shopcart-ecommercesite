import { useContext } from "react";
import OrderItem from "./OrderItem";
import { Card, Divider, Stack, Typography } from "@mui/material";
import { OrderContext } from "../../Context Provider/CreateContext";
import OrderDetails from "./OrderDetails";
import { NavLink } from "react-router-dom";

export default function OrderHistoryPage() {
  const { orderData, loading, error } = useContext(OrderContext);

  if (loading) return <>Data is loading...</>;

  if (error) return <>Something went wrong...</>;

  if (!orderData) return <>No order is found</>;

  const sortedData = Object.values(orderData)?.sort((a, b) => {
    return new Date(b?.createdAt) - new Date(a?.createdAt);
  });

  return (
    <>
      <br />
      <br />
      <Stack sx={{ m: 6 }}>
        <Typography
          variant="h3"
          fontWeight={800}
          fontSize={30}
          textAlign={"left"}
          sx={{ mb: 4 }}
        >
          Order History
        </Typography>

        {Object.values(sortedData).map((order) => {
          return (
            <Card
              elevation={4}
              key={order.orderId}
              sx={{
                backgroundColor: "primary.contrastText",
                borderRadius: 1,
                maxWidth: 1250,
                mb: 4,
              }}
            >
              <OrderDetails key={order.orderId} order={order} />

              <Divider variant="middle" />

              {Object.values(order?.cart?.products).map((product) => {
                return (
                  <NavLink key={product.id} to={`/product/${product.id}`}>
                    <OrderItem key={product.id} product={product} />
                  </NavLink>
                );
              })}
            </Card>
          );
        })}
      </Stack>
    </>
  );
}
