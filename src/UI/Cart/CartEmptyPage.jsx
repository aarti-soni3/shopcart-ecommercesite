import { Typography, Button, Stack, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const CartEmptyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack sx={{ mb: 10 }}>
        <CardMedia
          component="img"
          alt="product image"
          image={"/cartempty.png"}
          sx={{
            width: 500,
            height: 500,
            objectFit: "contain",
            alignSelf: "center",
          }}
        />
        <Typography fontWeight={600} variant="h2">
          Cart is empty...
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/product");
          }}
          sx={{ width: 300, mt: 4, alignSelf: "center" }}
        >
          {" "}
          Continue Shopping
        </Button>
      </Stack>
    </>
  );
};
