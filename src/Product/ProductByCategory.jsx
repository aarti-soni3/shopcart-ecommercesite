import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context Provider/CreateContext";
import { useContext } from "react";
import ProductItemGrid from "../UI/ProductItemGrid";
import ProductCard from "./ProductCard";

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
    <>
      <ProductItemGrid
        products={getProductsByCategory(category)}
        renderCard={renderCard}
        getLinkPath={getLinkPath}
      />
    </>
  );
}

export default ProductByCategory;
