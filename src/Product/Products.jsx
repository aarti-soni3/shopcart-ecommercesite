import { useContext } from "react";
import {
  FilterProductContext,
  ProductContext,
} from "../Context Provider/CreateContext";
import ProductCard from "./ProductCard";
import ProductItemGrid from "../UI/ProductItemGrid";
import { Stack } from "@mui/material";
import FilterProductSection from "../UI/FilterProductSection";

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
      <Stack gap={2}>
        <FilterProductSection />
        <ProductItemGrid
          products={filteredProducts}
          renderCard={renderCard}
          getLinkPath={getLinkPath}
        />
      </Stack>
    </>
  );
}
export default Products;
