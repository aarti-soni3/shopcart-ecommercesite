import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../Context Provider/CreateContext";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const { loading, error, getCategoryListWithProducts } =
    useContext(ProductContext);

  if (loading) return <>Loading Data...</>;

  if (error) return <>Somthing went wrong...</>;

  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography gutterBottom variant="h4" fontWeight={600}>
            Popular Categories
            <Divider
              variant="middle"
              sx={{
                borderColor: "primary.main",
                borderBottomWidth: 4,
                borderRadius: 1,
                width: "16%",
                justifySelf: "center",
                mt: 0.5,
              }}
            />
          </Typography>
        </Box>
        <Grid container spacing={2} columns={{ xs: 1, sm: 4, md: 12, lg: 16 }}>
          {Object.values(getCategoryListWithProducts()).map((category) => {
            return (
              <Grid key={category.name} size={{ xs: 1, sm: 2, md: 3 }}>
                <CategoryCard key={category.name} category={category} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}
export default CategoryList;
