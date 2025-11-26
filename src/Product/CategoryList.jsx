import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../Context Provider/CreateContext";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const { loading, error, getCategoryListWithProducts } = useContext(ProductContext);

  if (loading) return <>Loading Data...</>;

  if (error) return <>Somthing went wrong...</>;

  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography gutterBottom variant="h4">
            Popular Categories
          </Typography>
          <Divider sx={{ backgroundColor: "lightgray" }} />
        </Box>
        <Grid container spacing={2}>
          {Object.values(getCategoryListWithProducts()).map((category) => {
            return <CategoryCard key={category.name} category={category} />;
          })}
        </Grid>
      </Stack>
    </>
  );
}
export default CategoryList;
