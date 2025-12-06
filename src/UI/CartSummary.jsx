import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { twoDecimalValue } from "../utils/math";

export default function CartSummary({ discountedTotal }) {
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
              &#8377; {twoDecimalValue(discountedTotal)}
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
            <Typography variant="subtitle1">
              &#8377; {twoDecimalValue(shippingFees)}
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
              Grand Total :{" "}
            </Typography>
            <Typography variant="subtitle1">
              &#8377; {twoDecimalValue(discountedTotal + shippingFees)}
            </Typography>
          </Box>
        </ListItem>
      </List>
    </>
  );
}
