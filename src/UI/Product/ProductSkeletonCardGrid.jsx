import { Grid } from "@mui/material";
import ProductSkeletonCard from "./ProductSkeletonCard";

export default function ProductSkeletonCardGrid() {
  return (
    <>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 2.5, md: 2, lg: 2, xl: 2 }}
        sx={{ m: 1.3, ml: { xs: 10, sm: 5.8, md: 7.5, lg: 5, xl: 9 } }}
        columns={{ xs: 1.5, sm: 6.2, md: 12.5, lg: 18, xl: 18 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
          return (
            <Grid key={num} size={{ xs: 1, sm: 2, md: 3 }}>
              <ProductSkeletonCard />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
