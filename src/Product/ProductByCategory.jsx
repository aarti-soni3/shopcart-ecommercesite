import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context Provider/CreateContext";
import { useContext } from "react";
import ProductItemGrid from "./ProductItemGrid";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

function ProductByCategory() {
  const { category } = useParams();

  const { loading, error, getProductsByCategory } = useContext(ProductContext);

  if (loading) return <>Loading Data...</>;
  if (error) return <> Something went wrong...</>;

  const renderCard = (product) => {
    return <ProductCard product={product} />;
  };

  const getLinkPath = (id) => {
    return `/product/${id}`;
  };

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh", p: 2 }}>
      <ProductItemGrid
        products={getProductsByCategory(category)}
        renderCard={renderCard}
        getLinkPath={getLinkPath}
      />
    </Box>
  );
}

export default ProductByCategory;
