import { Box, Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CategorySkeletonCard() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          Height: { xs: 100, sm: 210 },
          Width: { xs: 250, sm: 150 },
        }}
      >
        <Skeleton
          sx={{
            height: { xs: 110, sm: 125 },
            width: { xs: "50%", sm: "100%" },
          }}
          animation="wave"
          variant="rectangular"
        />
        <Box sx={{ display: "flex", flexDirection: "column" ,width:'100%'}}>
          <CardContent sx={{ flex: "1 0 auto", textAlign: "start" }}>
            <Skeleton
              animation="wave"
              height={10}
              width="100%" 
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
            {/* <Skeleton
              animation="wave"
              height={10}
              width="50%"
              style={{ marginBottom: 6 }} */}
            {/* /> */}
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
