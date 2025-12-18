import {
  alpha,
  AppBar,
  Box,
  InputBase,
  ListItem,
  Stack,
  IconButton,
  Badge,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import UserProfile from "../User/UserProfile";
import { useContext } from "react";
import { CartContext } from "../../Context Provider/CreateContext";
import NavigationLink from "./NavigationLink";
import HamburgerMenuButton from "./HamBurgerMenuButton";
import Logo from "../Logo";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.8, 0.8, 0.8, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const { getCartItemCount } = useContext(CartContext);

  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "background.default", p: 1 }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack gap={2} direction={"row"}>
            {isMdDown && <HamburgerMenuButton />}
            <Logo/>
          </Stack>

          {isMdUp && (
            <Stack
              gap={2}
              spacing={1}
              direction={"row"}
              fontSize={20}
              sx={{ mt: 0.8 }}
            >
              <NavigationLink to="/" label="Home" />
              <NavigationLink to="/product" label="Products" />
              <NavigationLink to="/about" label="About" />
              <NavigationLink to="/contact" label="Contact" />
            </Stack>
          )}

          <Stack direction={"row"}>
            {isMdUp && (
              <ListItem sx={{ p: "0px 16px" }}>
                <UserProfile />
              </ListItem>
            )}
            <ListItem sx={{ p: "0px 16px" }}>
              <NavLink to="/cart">
                <IconButton>
                  <Badge badgeContent={getCartItemCount()} color="primary">
                    <ShoppingCartOutlinedIcon
                      fontSize="small"
                      sx={{ color: "text.primary" }}
                    />
                  </Badge>
                </IconButton>
              </NavLink>
            </ListItem>
          </Stack>
        </Stack>
      </AppBar>
      <Box sx={{ mb: 5 }} />
    </>
  );
}

export default Navbar;
