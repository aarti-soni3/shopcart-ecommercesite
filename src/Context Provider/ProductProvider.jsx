import { useProductData } from "../Hooks/useProductData";
import { ProductContext } from "./CreateContext";

function ProductProvider({ children }) {
  //TODO: need to extract here...dont pass as single var to provider
  const { products, loading, error } = useProductData();

  const getProductByID = (id) => {
    return products.find((product) => String(product.id) === String(id));
  };

  const getCategoryListWithProducts = () => {
    return products.reduce((accummulator, currentProduct) => {
      const categoryName = currentProduct.category;

      // if (!accummulator[categoryName]) // if not exists
      // if (accummulator[categoryName]) OR  if (categoryName in accummulator) // if  exists
      if (!accummulator[categoryName]) {
        accummulator[categoryName] = {
          name: categoryName,
          image: currentProduct?.images?.[0],
          products: [],
        };
      }
      accummulator[categoryName].products.push(currentProduct);
      return accummulator;
    }, {});
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        getProductByID,
        getCategoryListWithProducts,
        getProductsByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
