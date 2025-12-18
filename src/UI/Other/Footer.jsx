import { Box, Divider, Stack, Typography } from "@mui/material";
import Logo from "../Logo";
import NavigationLink from "../Navigation/NavigationLink";
import { socialmediaSVGIcons } from "../../utils/SocialMediaSVGIcons";

export default function Footer() {
  return (
    <>
      <Stack
        sx={{
          mt: 4,
          p: 4,
          backgroundColor: "primary.contrastText",
        }}
      >
        <Stack
          gap={5}
          direction={{ xs: "column", sm: "row" }}
          sx={{ textAlign: "left", justifyContent: "space-evenly" }}
        >
          <Stack gap={2} sx={{ textAlign: "left" }} flex={1.3}>
            <Box>
              <Logo />
              <Typography sx={{ mt: 0.6 }}>
                Your trusted online shopping destination
              </Typography>
            </Box>

            <Typography variant="body2" width={"60%"}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor.
            </Typography>
          </Stack>

          <Stack direction={"column"} gap={2} flex={0.8}>
            <Typography variant="h3" fontWeight={600}>
              {" "}
              Quick Links
            </Typography>
            <Box>
              <NavigationLink to="/" label={"Home"} />
              <NavigationLink to="/about" label={"About"} />
              <NavigationLink to="/privancy-policy" label={"Privancy Policy"} />
              <NavigationLink
                to="/terms-condition"
                label={"Terms & Condition"}
              />
            </Box>
          </Stack>

          <Stack direction={"column"} gap={2} flex={0.8}>
            <Typography variant="h3" fontWeight={600}>
              {" "}
              Get In Touch
            </Typography>
            <Box>
              <Stack display={"flex"} flexDirection={"row"} gap={1}>
                <Typography> Phone: </Typography>
                <Typography> (+12) 34567-89101 </Typography>
              </Stack>
              <Stack display={"flex"} flexDirection={"row"} gap={1}>
                <Typography> Email: </Typography>
                <Typography> contact@shopcart.com </Typography>
              </Stack>
            </Box>
            <Stack
              gap={1}
              direction={"row"}
              justifyContent={"flex-start"}
              height={30}
            >
              {socialmediaSVGIcons.map((icon) => {
                return (
                  <Box
                    key={icon.id}
                    width={icon.size.width}
                    height={icon.size.height}
                  >
                    <a
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon.icon}
                    </a>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
        <Stack sx={{ mt: 5 }} gap={3}>
          <Divider />
          <Typography>© 2025 ShopCart. All rights reserved.</Typography>
        </Stack>
      </Stack>
    </>
  );
}
