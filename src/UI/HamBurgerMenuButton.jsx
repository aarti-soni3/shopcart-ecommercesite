import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useContext, useState } from "react";
import NavigationLink from "./NavigationLink";
import AccountMenu from "./User/UserProfileButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Context Provider/CreateContext";

export default function HamburgerMenuButton() {
  const { currentUser, currentUserData, signOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuStyle = (path) => ({
    "&:hover": { color: theme.palette.warning.main },
    color: isActive(path) ? "primary.main" : "text.primary",
    mt: 0.5,
  });

  const boxStyle = () => ({
    ml: 2,
    "&:hover": {
      color: `${theme.palette.warning.main} !important`,
      "& *": { color: `${theme.palette.warning.main} !important` },
    },
  });

  const onHamburgerMenuClick = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleOnLogoutButtonClick = () => {
    signOutUser();
  };

  return (
    <>
      <IconButton sx={{ p: 0 }} onClick={onHamburgerMenuClick(true)}>
        <MenuRoundedIcon fontSize="large" sx={{ color: "primary.main" }} />
      </IconButton>

      <Drawer open={open} onClose={onHamburgerMenuClick(false)}>
        <Stack
          gap={2}
          justifyContent={"space-between"}
          flexGrow={1}
          sx={{ minWidth: "225px" }}
        >
          <Stack gap={1} spacing={1} fontSize={20} sx={{ ml: 3, mt: 4 }}>
            <Box display={"flex"} flexDirection={"row"} gap={1} sx={boxStyle}>
              <HomeOutlinedIcon sx={menuStyle("/")} />
              <NavigationLink to="/" label="Home"/>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1} sx={boxStyle}>
              <StorefrontOutlinedIcon sx={menuStyle("/product")} />
              <NavigationLink to="/product" label="Products" />
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1} sx={boxStyle}>
              <GroupsOutlinedIcon sx={menuStyle("/about")} />
              <NavigationLink to="/about" label="About" />
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={1} sx={boxStyle}>
              <MailOutlinedIcon sx={menuStyle("/contact")} />
              <NavigationLink to="/contact" label="Contact" />
            </Box>
          </Stack>

          {currentUser && currentUserData ? (
            <Stack gap={1} sx={{ mb: 5 }}>
              <AccountMenu />
              <Divider sx={{ borderBottomWidth: 1 }} />
              <Box
                sx={boxStyle}
                fontWeight={600}
                fontSize={18}
                gap={1}
                display={"flex"}
                flexDirection={"row"}
              >
                <ShoppingBagOutlinedIcon sx={menuStyle("/orderhistory")} />
                <NavigationLink to="/orderhistory" label={"Order History"} />
              </Box>
              <Button
                onClick={handleOnLogoutButtonClick}
                sx={{ justifyContent: "flex-start" }}
              >
                <Box
                  fontWeight={600}
                  fontSize={18}
                  color={"primary.main"}
                  gap={1}
                  display={"flex"}
                  flexDirection={"row"}
                  sx={{ color: "info.dark" }}
                >
                  <LogoutOutlinedIcon />
                  <Typography variant="subtitle1">Logout</Typography>
                </Box>
              </Button>
            </Stack>
          ) : (
            <></>
          )}
        </Stack>
      </Drawer>
    </>
  );
}
