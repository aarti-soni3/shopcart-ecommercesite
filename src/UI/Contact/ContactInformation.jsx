import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Paper, Stack, Typography } from "@mui/material";

export default function ContactInformation(){

    return(
        <>
         <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h3" fontWeight={800}>
              Contact Information
            </Typography>

            <Stack gap={4} sx={{ textAlign: "left", mt: 3 }}>
              <Box>
                <Stack gap={1.5} display={"flex"} flexDirection={"row"}>
                  <EmailOutlinedIcon sx={{ color: "primary.main" }} />
                  <Typography color="text.secondary">Email </Typography>
                </Stack>
                <Typography sx={{ mt: 1 }}>support@shopcart.com</Typography>
              </Box>
              <Box>
                <Stack gap={1.5} display={"flex"} flexDirection={"row"}>
                  <PhoneOutlinedIcon sx={{ color: "primary.main" }} />
                  <Typography color="text.secondary">Phone</Typography>
                </Stack>
                <Typography sx={{ mt: 1 }}>+91 1234567890</Typography>
              </Box>
              <Box>
                <Stack gap={1.5} display={"flex"} flexDirection={"row"}>
                  <LocationOnOutlinedIcon sx={{ color: "primary.main" }} />
                  <Typography color="text.secondary">Address</Typography>
                </Stack>
                <Typography sx={{ mt: 1 }}>Rajkot, Gujarat, India</Typography>
              </Box>
            </Stack>
          </Paper>
        </>
    )
}