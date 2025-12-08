import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function OrderFailedPage() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
      textAlign="center"
      p={3}
    >
      <CheckCircleIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h3" gutterBottom>
        Order Failed!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Try again...
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </Box>
  );
}
