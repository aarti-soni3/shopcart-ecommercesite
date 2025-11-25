import { useContext } from "react";
import { ProductContext } from "../Context Provider/CreateContext";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Products() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <>Loading Data...</>;
  return (
    <>
      {error && <> Something went wrong...</>}

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 5, sm: 9, md: 12 }}
        >
          {products.map((product) => {
            return (
              <Grid key={product.id}>
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard key={product.id} product={product} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
export default Products;
