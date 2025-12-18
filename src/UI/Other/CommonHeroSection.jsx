import { Box } from "@mui/material";

export default function CommonHeroSection({ imageUrl }) {
  return (
    <>
      <Box
        className="full-width-no-padding"
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "650px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        
      </Box>
    </>
  );
}
