import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <>
      <Grid key={category.name} size={3}>
        <Link key={category.name} to={`/products/category/${category}`}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 100 }}
              image={category.image}
              alt="Category Image"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto", textAlign: "start" }}>
                <Typography
                  component="div"
                  variant="h6"
                  fontSize={{ xs: 12, sm: 15, md: 18 }}
                >
                  {category.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{ color: "text.secondary" }}
                >
                  {"1233" + " Items Available"}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </Grid>
    </>
  );
}
export default CategoryCard;
