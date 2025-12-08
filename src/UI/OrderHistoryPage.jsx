import { useContext } from "react";
import { OrderContext } from "../Context Provider/CreateContext";
import OrderItem from "./OrderItem";
import { Box, Card, Stack, Typography } from "@mui/material";
import { twoDecimalValue } from "../utils/math";

export default function OrderHistoryPage() {
  const { orderData, loading, error } = useContext(OrderContext);

  console.log(orderData);

  if (loading) return <>Data is loading...</>;

  if (error) return <>Something went wrong...</>;

  if (!orderData) return <>No order is found</>;

  return (
    <>
      <br />
      <br />
      {Object.values(orderData).map((order) => {
        return (
          <>
            <Card sx={{ backgroundColor: "lightgray" }}>
              <Stack
                direction={"row"}
                gap={2}
                justifyContent={"space-between"}
                sx={{ mr: 2, ml: 2 }}
                textAlign={"left"}
              >
                <Box>
                  <Typography fontWeight={600}>Order Placed</Typography>
                  <Typography>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>

                <Box>
                  <Typography fontWeight={600}> Total</Typography>
                  <Typography> {twoDecimalValue(order.cart.total)}</Typography>
                </Box>

                <Box>
                  <Typography fontWeight={600}> Order Status</Typography>
                  <Typography> {order.orderStatus}</Typography>
                </Box>

                <Box>
                  <Typography fontWeight={600}> Payment Method</Typography>
                  <Typography> {order.paymentMethod}</Typography>
                </Box>

                <Box>
                  <Typography fontWeight={600}>Order Id </Typography>
                  <Typography>{order.orderId}</Typography>
                </Box>
              </Stack>

              {Object.values(order?.cart?.products).map((product) => {
                return <OrderItem product={product} />;
              })}
            </Card>
            <br />
            <br />
          </>
        );
      })}
    </>
  );
}
