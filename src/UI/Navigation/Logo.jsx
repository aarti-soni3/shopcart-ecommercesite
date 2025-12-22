import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Logo() {
  return (
    <>
      <NavLink to="/">
        <Stack gap={0.5} direction={"row"}>
          <ShoppingCartOutlinedIcon
            sx={{ color: "primary.main", fontSize: 40 }}
          />
          <Typography
            variant="h5"
            fontSize={30}
            fontWeight={600}
            color="primary.main"
          >
            ShopCart
          </Typography>
        </Stack>
      </NavLink>
    </>
  );
}
