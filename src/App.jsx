import "./App.css";
import Navbar from "./UI/Navbar";
import About from "./UI/About";
import Contact from "./UI/Contact";
import LoginPage from "./UI/LoginPage";
import SignUpPage from "./UI/SignUpPage";
import Products from "./Product/Products";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./Product/CategoryList";
import ProductCardDetail from "./Product/ProductCardDetail";
import ProductByCategory from "./Product/ProductByCategory";
import FilterProductProvider from "./Firebase/Database/Product/FilterProductProvider";
import CartPage from "./UI/CartPage";
import ProfilePage from "./UI/ProfilePage";
import PlaceOrderPage from "./UI/PlaceOrderPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />

        <Route
          path="/product"
          element={
            <FilterProductProvider>
              <Products />
            </FilterProductProvider>
          }
        />
        <Route path="/product/:id" element={<ProductCardDetail />} />
        <Route
          path="/product/category/:category"
          element={<ProductByCategory />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
