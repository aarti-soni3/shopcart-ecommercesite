import { useContext } from "react";
import {
  FilterProductContext,
  ProductContext,
} from "../../Context Provider/CreateContext";
import ProductCard from "./ProductCard";
import ProductItemGrid from "./ProductItemGrid";
import { Box, Stack } from "@mui/material";
import FilterProductSection from "./FilterProductSection";
import ProductSkeletonCardGrid from "./ProductSkeletonCardGrid";

function Products() {
  const { loading, error } = useContext(ProductContext);
  const { filteredProducts } = useContext(FilterProductContext);

  // if (loading) return <>Loading Data...</>;
  if (error) return <> Something went wrong...</>;

  const renderCard = (product) => {
    return <ProductCard product={product} />;
  };

  const getLinkPath = (id) => {
    return `/product/${id}`;
  };

  return (
    <>
      <Stack gap={4} sx={{ width: "100%  ", height: "100vh", mt: 10 }}>
        <FilterProductSection />
        <Box sx={{ flexGrow: 1, width: "100%", minHeight: 0 }}>
          {loading ? (
            <ProductSkeletonCardGrid />
          ) : (
            <ProductItemGrid
              key={filteredProducts}
              loading={loading}
              products={filteredProducts}
              renderCard={renderCard}
              getLinkPath={getLinkPath}
            />
          )}
        </Box>
      </Stack>
    </>
  );
}
export default Products;
