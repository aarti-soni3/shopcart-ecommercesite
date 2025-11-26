import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function ProductItemGrid({ products, renderCard, getLinkPath }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 5, sm: 9, md: 12 }}
        >
          {products.map((product, index) => {
              const id = product.id || index;

            return (
              <Grid key={id}>
                <Link key={id} to={getLinkPath(id)}>
                  {renderCard(product)}
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default ProductItemGrid;
