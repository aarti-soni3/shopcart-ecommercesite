import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../Context Provider/CreateContext";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const { loading, error, getMainCategoryListWithProducts } =
    useContext(ProductContext);

  if (loading) return <>Loading Data...</>;

  if (error) return <>Somthing went wrong...</>;

  return (
    <>
      <Stack spacing={2} sx={{ m: "0rem 4rem", mt: 6 }}>
        <Box>
          <Typography gutterBottom variant="h4" fontWeight={600}>
            Popular Categories
            <Divider
              variant="middle"
              sx={{
                borderColor: "primary.main",
                borderBottomWidth: 4,
                borderRadius: 1,
                width: { xs: "40%", sm: "20%", md: "16%", lg: "16%" },
                justifySelf: "center",
                mt: 0.5,
              }}
            />
          </Typography>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={1} columns={{ xs: 1, sm: 4, md: 12, lg: 16 }}>
          {Object.values(getMainCategoryListWithProducts()).map((category) => {
            return (
              <Grid key={category.id} size={{ xs: 1, sm: 2, md: 3 }}>
                <CategoryCard key={category.id} category={category} />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}
export default CategoryList;
