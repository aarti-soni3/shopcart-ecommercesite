import { replaceHypensToWhiteSpace } from "../../../utils/string";
import { ProductContext } from "../../../Context Provider/CreateContext";
import { useProductData } from "../../../Hooks/useProductData";
import { useCallback } from "react";
import {
  getMainCategoryDisplayName,
  getMainCategoryKey,
} from "../../../utils/categoryMappingConfig";

function ProductProvider({ children }) {
  //TODO: need to extract here...dont pass as single var to provider
  const { products, loading, error } = useProductData();

  const getProductByID = (id) => {
    return products.find((product) => String(product.id) === String(id));
  };

  const getCategoryListWithProducts = useCallback(() => {
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
  }, [products]);

  const getMainCategoryListWithProducts = useCallback(() => {
    return products.reduce((accummulator, currentProduct) => {
      const categoryName = currentProduct.category;
      const mainCategoryKey = getMainCategoryKey(categoryName);
      const mainCateogryName = getMainCategoryDisplayName(mainCategoryKey);

      if (!accummulator[mainCategoryKey]) {
        accummulator[mainCategoryKey] = {
          id: mainCategoryKey,
          name: mainCateogryName,
          image: currentProduct?.thumbnail,
          subCategories: {},
          products: [],
        };
      }

      if (!accummulator[mainCategoryKey].subCategories[categoryName]) {
        accummulator[mainCategoryKey].subCategories[categoryName] = {
          id: categoryName,
          name: replaceHypensToWhiteSpace(categoryName),
          image: currentProduct?.thumbnail,
          products: [],
        };
      }

      accummulator[mainCategoryKey].products.push(currentProduct);
      accummulator[mainCategoryKey].subCategories[categoryName].products.push(
        currentProduct
      );
      return accummulator;
    }, {});
  }, [products]);

  const getProductsFromMainCategory = async (mainCategoryKey) => {
    const mainCategoryData = await getMainCategoryListWithProducts();
    return mainCategoryData[mainCategoryKey].products;
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

  const getProductsByDiscountedPercentage = (discountPercentage) => {
    return products.filter((product) => {
      return product.discountPercentage >= discountPercentage;
    });
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
        getMainCategoryListWithProducts,
        getProductsFromMainCategory,
        getProductsByDiscountedPercentage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
