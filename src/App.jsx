import "./App.css";
import Navbar from "./UI/Navbar";
import About from "./UI/About";
import Contact from "./UI/Contact";
import LoginPage from "./UI/User/LoginPage";
import SignUpPage from "./UI/User/SignUpPage";
import Products from "./Product/Products";
import { Route, Routes } from "react-router-dom";
import CategoryList from "./Product/CategoryList";
import ProductCardDetail from "./Product/ProductCardDetail";
import ProductByCategory from "./Product/ProductByCategory";
import FilterProductProvider from "./Firebase/Database/Product/FilterProductProvider";
import PlaceOrderPage from "./UI/PlaceOrderPage";
import CartPage from "./UI/Cart/CartPage";
import ProfilePage from "./UI/User/ProfilePage";
import OrderSuccessPage from "./UI/OrderSuccessPage";
import OrderFailedPage from "./UI/OrderFailedPage";
import OrderHistoryPage from "./UI/OrderHistoryPage";
import PageNotFound from "./UI/PageNotFound";

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
        <Route path="/ordersuccess" element={<OrderSuccessPage />} />
        <Route path="/orderfailed" element={<OrderFailedPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductCardDetail />} />
        <Route
          path="/product"
          element={
            <FilterProductProvider>
              <Products />
            </FilterProductProvider>
          }
        />
        <Route
          path="/product/category/:category"
          element={<ProductByCategory />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
