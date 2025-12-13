import Box from "@mui/material/Box";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Grid, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";

function ProductItemGrid({ products, renderCard, getLinkPath }) {
  console.log(products);
  const productsArray = useMemo(() => {
    return Array.isArray(products) ? products : Object.values(products);
  }, [products]);

  if (!productsArray || productsArray.length === 0) {
    return <Box>No products available</Box>;
  }

  const cardWidth = 230;
  const cardHeight = 370;

  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    // Get current window width to calculate columns
    const containerWidth = window.innerWidth - 40;
    const columnCount = Math.max(1, Math.floor(containerWidth / cardWidth));

    // Calculate the actual product index
    const index = rowIndex * columnCount + columnIndex;

    // Return empty cell if index exceeds products length
    if (index >= productsArray.length) {
      return <div key={key} style={style} />;
    }

    const product = productsArray[index];
    const id = product.id || index;

    console.log(
      containerWidth,
      columnCount,
      index,
      rowIndex,
      columnIndex,
      key,
      style
    );

    return (
      // <div key={key} style={style}>
      <div key={key} style={{ ...style, padding: "8px" }}>
        <NavLink to={getLinkPath(id)}>{renderCard(product)}</NavLink>
      </div>
      // </div>
    );
  };

  return (
    <Box sx={{ flexGrow: 1, width: "100%", height: "100%", display: "flex" }}>
      <AutoSizer>
        {({ width, height }) => {
          console.log(width);
          // Calculate how many columns can fit
          const columnCount = Math.max(1, Math.floor(width / cardWidth));
          console.log(columnCount);
          // Calculate how many rows we need
          const rowCount = Math.ceil(productsArray.length / columnCount);
          console.log(rowCount);

          return (
            <Grid
              cellRenderer={cellRenderer}
              columnCount={columnCount}
              columnWidth={cardWidth}
              height={height}
              rowCount={rowCount}
              rowHeight={cardHeight}
              width={width}
              overscanRowCount={3}
            />
          );
        }}
      </AutoSizer>
    </Box>
  );
}

export default ProductItemGrid;
