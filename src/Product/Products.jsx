import { useContext } from "react";
import {
  FilterProductContext,
  ProductContext,
} from "../Context Provider/CreateContext";
import ProductCard from "./ProductCard";
import ProductItemGrid from "./ProductItemGrid";
import { Box, Stack } from "@mui/material";
import FilterProductSection from "./FilterProductSection";

function Products() {
  const { loading, error } = useContext(ProductContext);
  const { filteredProducts } = useContext(FilterProductContext);

  if (loading) return <>Loading Data...</>;
  if (error) return <> Something went wrong...</>;

  const renderCard = (product) => {
    return <ProductCard product={product} />;
  };

  const getLinkPath = (id) => {
    return `/product/${id}`;
  };

  return (
    <>
      <Stack
        gap={4}
        sx={{ display: "flex", width: "100%  ", height: "100vh", p: 2 }}
      >
        <FilterProductSection />
        <Box sx={{ flexGrow: 1, width: "100%", minHeight: 0 }}>
          <ProductItemGrid
            products={filteredProducts}
            renderCard={renderCard}
            getLinkPath={getLinkPath}
          />
        </Box>
      </Stack>
    </>
  );
}
export default Products;
