import {
  alpha,
  AppBar,
  Box,
  InputBase,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "@emotion/styled";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Products from "../Product/Products";
import ProductCardDetail from "../Product/ProductCardDetail";

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
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "gray", p: 1 }}>
        <Stack gap={2} direction={"row"} justifyContent={"space-between"}>
          <NavLink to="/">
            <Stack gap={2} direction={"row"}>
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 40,
                }}
                alt="Logo"
                src="public/shopcart logo.png"
              />
              <Typography variant="h5" fontSize={30} color="orange">
                ShopCart
              </Typography>
            </Stack>
          </NavLink>

          <Stack
            gap={2}
            spacing={1}
            direction={"row"}
            fontSize={20}
            sx={{ mt: 0.8 }}
          >
            {/* <nav> */}
            <NavLink to="/">
              <Box sx={{ color: "white" }}> Home</Box>
            </NavLink>
            <NavLink to="/product">
              <Box sx={{ color: "white" }}>Products</Box>
            </NavLink>
            <NavLink to="/about">
              <Box sx={{ color: "white" }}>About</Box>
            </NavLink>
            <NavLink to="/contact">
              <Box sx={{ color: "white" }}>Contact</Box>
            </NavLink>
            {/* <NavLink to="/product/:id"> Products</NavLink> */}
            {/* </nav> */}
          </Stack>

          <Stack direction={"row"}>
            <ListItem>
              <Search>
                <SearchIconWrapper>
                  <SearchOutlinedIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </ListItem>
            <ListItem>
              <PersonOutlineOutlinedIcon
                onClick={() => {
                  console.log("123");
                }}
              />
            </ListItem>
            <ListItem>
              <ShoppingCartOutlinedIcon />
            </ListItem>
          </Stack>
        </Stack>
      </AppBar>
      <Box sx={{ mb: 5 }} />
    </>
  );
}

export default Navbar;
