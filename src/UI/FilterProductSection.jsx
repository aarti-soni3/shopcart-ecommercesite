import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { FilterProductContext } from "../Context Provider/CreateContext";

function FilterProductSection() {
  const {
    getCategoryListWithFormattedText,
    filterState,
    // filteredProducts,
    updateCategory,
    updateSortOrder,
  } = useContext(FilterProductContext);

  return (
    <>
      <Stack gap={2}>
        <Box>
          <Select
            labelId="price-filter-label"
            id="price-filter"
            value={filterState.sortOrder}
            label="Price"
            onChange={(event) => updateSortOrder(event.target.value)}
          >
            <MenuItem value="Relavent">Sort By: Relavent</MenuItem>
            <MenuItem value="LTH">Sort By: Low To High</MenuItem>
            <MenuItem value="HTL">Sort By: High To Low</MenuItem>
          </Select>
        </Box>
        <Box>
          <Select
            labelId="category-filter-label"
            id="category-filter"
            value={filterState.category}
            label="Cateogry"
            size="medium"
            onChange={(event) => updateCategory(event.target.value)}
          >
            <MenuItem key="All" value="All" > All </MenuItem>
            {Object.values(getCategoryListWithFormattedText()).map(
              (category) => (
                <MenuItem key={category.name} value={category.name}>
                  {category.formattedCategoryText}
                </MenuItem>
              )
            )}
          </Select>
        </Box>
      </Stack>
    </>
  );
}

export default FilterProductSection;
