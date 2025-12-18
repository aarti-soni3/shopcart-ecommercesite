import { CardMedia, Stack, Typography } from "@mui/material";

export default function PageNotFound() {
  return (
    <>
      <Stack sx={{ mb: 10 }}>
        <CardMedia
          component="img"
          alt="product image"
          image={"/404.png"}
          sx={{
            width: 500,
            height: 500,
            objectFit: "contain",
            alignSelf: "center",
          }}
        />
      </Stack>
    </>
  );
}
