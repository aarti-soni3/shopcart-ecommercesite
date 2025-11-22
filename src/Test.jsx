import { useContext } from "react";
import { ProductContext } from "./ContextAPI/CreateContext";

function Test() {
  const { products, loading, error } = useContext(ProductContext);

  console.log(products);
  console.log(loading);
  console.log(error);
  return <></>;
}

export default Test;
