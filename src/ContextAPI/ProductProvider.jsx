import { useProductData } from "../Hooks/useProductData";
import { ProductContext } from "./CreateContext";

function ProductProvider({ children }) {
  //TODO: need to extract here...dont pass as single var to provider
  const {products,loading,error} = useProductData();

  return (
    <ProductContext.Provider value={{ products,loading,error }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
