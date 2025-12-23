import { Box, Grid, Stack, Typography, Zoom } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { trimSentence } from "../../utils/string";
import { animations } from "../../utils/animations";

function CategoryCard({ category }) {
  return (
    <>
      <Link key={category.name} to={`/product/category/${category.id}`}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "column" },
            Height: { xs: 100, sm: 210 },
            Width: { xs: 250, sm: 150 },
          }}
        >
          <CardMedia
            component="img"
            image={category.image}
            alt="Category Image"
            sx={{
              ...animations.zoomOut,
              objectFit: "contain",
              height: { xs: 110, sm: 125 },
              width: { xs: "50%", sm: "100%" },
              "&:hover": {
                ...animations.zoomIn,
              },
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", textAlign: "start" }}>
              <Typography
                component="div"
                variant="h6"
                fontSize={{ xs: 15, sm: 18, md: 20 }}
              >
                {trimSentence(category.name, 15)}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{ color: "text.secondary" }}
                fontSize={{ xs: 12, sm: 14, md: 16 }}
              >
                {category?.products?.length + " Items"}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Link>
    </>
  );
}
export default CategoryCard;
