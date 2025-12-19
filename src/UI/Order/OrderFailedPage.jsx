import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
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
      <CancelOutlinedIcon color="error" sx={{ fontSize: 80, mb: 2 }} />
      <Typography variant="h3" gutterBottom>
        Order Failed!
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Try again...
      </Typography>
      <Stack gap={2} display={"flex"} flexDirection={"row"}>
        <Button variant="contained" onClick={() => navigate("/cart")}>
          Retry payment
        </Button>
        <Button variant="outlined" onClick={() => navigate("/product")}>
          Continue shopping
        </Button>
      </Stack>
    </Box>
  );
}
