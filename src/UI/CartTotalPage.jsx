import { Box, Button, List, ListItem, Typography } from "@mui/material";

export default function CartTotalPage({ discountedTotal }) {
  const shippingFees = discountedTotal > 1000 ? 0 : 50;

  return (
    <>
      <Typography variant="h4"> Cart total </Typography>
      <List>
        <ListItem>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Sub total :{" "}
            </Typography>
            <Typography variant="subtitle1">
              &#8377; {discountedTotal}
            </Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Shipping Fee :{" "}
            </Typography>
            <Typography variant="subtitle1">&#8377; {shippingFees}</Typography>
          </Box>
        </ListItem>
        <ListItem>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={2}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              Grand Total :{" "}
            </Typography>
            <Typography variant="subtitle1">&#8377; 54045</Typography>
          </Box>
        </ListItem>
        <Button variant="contained" sx={{ width: 370 }}>
          Checkout
        </Button>
      </List>
    </>
  );
}
