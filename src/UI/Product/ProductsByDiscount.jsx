import { ProductContext } from "../../Context Provider/CreateContext";
import { useContext, useEffect, useState } from "react";
import ProductItemGrid from "./ProductItemGrid";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

export default function ProductsByDiscount() {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { loading, error, getProductsByDiscountedPercentage } =
    useContext(ProductContext);

  useEffect(() => {
    const getCategoryProductData = async () => {
      const productData = await getProductsByDiscountedPercentage(15);
      setCategoryProducts(productData);
      return productData;
    };

    getCategoryProductData();
  }, [getProductsByDiscountedPercentage]);

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
        products={categoryProducts}
        renderCard={renderCard}
        getLinkPath={getLinkPath}
      />
    </Box>
  );
}
