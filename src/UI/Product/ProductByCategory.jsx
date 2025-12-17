import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../../Context Provider/CreateContext";
import { useContext, useEffect, useState } from "react";
import ProductItemGrid from "./ProductItemGrid";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

function ProductByCategory() {
  const { id } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { loading, error, getProductsFromMainCategory } =
    useContext(ProductContext);

  useEffect(() => {
    const getCategoryProductData = async () => {
      const productData = await getProductsFromMainCategory(id);
      setCategoryProducts(productData);
      return productData;
    };

    getCategoryProductData();
  }, [getProductsFromMainCategory, id]);

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

export default ProductByCategory;
