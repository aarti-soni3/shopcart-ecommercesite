import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function OrderSuccessPage() {
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
      <CheckCircleIcon color="success" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h3" gutterBottom>
        Order Placed Successfully!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Thank you for your order. We'll send you a confirmation email shortly.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Continue Shopping
      </Button>
    </Box>
  );
}
