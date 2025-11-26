import { useContext } from "react";
import { ProductContext } from "../Context Provider/CreateContext";
import ProductCard from "./ProductCard";
import ProductItemGrid from "../UI/ProductItemGrid";

function Products() {
  const { products, loading, error } = useContext(ProductContext);

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
        products={products}
        renderCard={renderCard}
        getLinkPath={getLinkPath}
      />
    </>
  );
}
export default Products;
