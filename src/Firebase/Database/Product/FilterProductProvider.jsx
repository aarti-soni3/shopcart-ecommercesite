import { useContext, useMemo, useState } from "react";
import {
  FilterProductContext,
  ProductContext,
} from "../../../Context Provider/CreateContext";

function FilterProductProvider({ children }) {
  const { products, getCategoryListWithFormattedText } =
    useContext(ProductContext);

  const [filterState, setFilterState] = useState({
    sortOrder: "Relavent",
    category: "All",
  });

  const updateSortOrder = (sortOrder) => {
    setFilterState((prevState) => ({ ...prevState, sortOrder }));
  };

  const updateCategory = (category) => {
    setFilterState((prevState) => ({ ...prevState, category }));
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filterState?.category !== "All")
      result = result.filter(
        (product) => product.category === filterState.category
      );

    if (filterState?.sortOrder === "LTH")
      return [...result].sort((a, b) => a.price - b.price);
    else if (filterState?.sortOrder === "HTL")
      return [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [filterState, products]);

  return (
    <>
      <FilterProductContext.Provider
        value={{
          getCategoryListWithFormattedText,
          filterState,
          filteredProducts,
          updateCategory,
          updateSortOrder,
        }}
      >
        {children}
      </FilterProductContext.Provider>
    </>
  );
}

export default FilterProductProvider;
