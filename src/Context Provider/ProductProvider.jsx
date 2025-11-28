import { useProductData } from "../Hooks/useProductData";
import { replaceHypensToWhiteSpace } from "../utils/string";
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
          image: currentProduct?.thumbnail,
          products: [],
        };
      }
      accummulator[categoryName].products.push(currentProduct);
      return accummulator;
    }, {});
  };

  const getCategoryListWithFormattedText = () => {
    return products.reduce((accummulator, product) => {
      const category = product.category;

      if (!accummulator[category]) {
        accummulator[category] = {
          name: category,
          formattedCategoryText: replaceHypensToWhiteSpace(category),
        };
      }
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
        getCategoryListWithFormattedText,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
