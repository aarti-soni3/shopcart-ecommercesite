import { Box, Grid, Stack, Typography } from "@mui/material";
import { twoDecimalValue } from "../../utils/math";

export default function OrderDetails({ order }) {
  const createdAt = new Date(order.createdAt).toLocaleDateString();
  const total = twoDecimalValue(order.cart.total);
  const status = order.orderStatus;
  const paymentMethod = order.paymentMethod;
  const orderId = order.orderId;

  const orderDetailsData = [
    { title: "Order Placed", value: createdAt },
    { title: "Total", value: total },
    { title: "Order Status", value: status },
    { title: "Payment Method", value: paymentMethod },
    { title: "Order Id", value: orderId },
  ];

  return (
    <>
      <Grid
        container
        direction={{ xs: "column", sm: "row" }}
        gap={2}
        justifyContent={"space-between"}
        sx={{ m: 2 }}
        textAlign={"left"}
      >
        {orderDetailsData.map((data) => {
          return (
            <Grid key={data.title} size={{ sm: 4, md: 4, lg: 2, xl: 2 }}>
              <Typography color="text.secondary">{data.title}</Typography>
              <Typography fontWeight={600}>{data.value}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
