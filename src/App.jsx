import "./App.css";
import About from "./UI/Other/About.jsx";
import LoginPage from "./UI/User/LoginPage";
import SignUpPage from "./UI/User/SignUpPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./UI/Cart/CartPage";
import ProfilePage from "./UI/User/ProfilePage";
import Navbar from "./UI/Navigation/Navbar.jsx";
import Products from "./UI/Product/Products.jsx";
import ProductCardDetail from "./UI/Product/ProductCardDetail.jsx";
import ProductByCategory from "./UI/Product/ProductByCategory.jsx";
import FilterProductProvider from "./Firebase/Database/Product/FilterProductProvider.jsx";
import PlaceOrderPage from "./UI/Order/PlaceOrderPage.jsx";
import OrderSuccessPage from "./UI/Order/OrderSuccessPage.jsx";
import OrderHistoryPage from "./UI/Order/OrderHistoryPage.jsx";
import OrderFailedPage from "./UI/Order/OrderFailedPage.jsx";
import PageNotFound from "./UI/Other/PageNotFound.jsx";
import Home from "./UI/Other/Home.jsx";
import ProductsByDiscount from "./UI/Product/ProductsByDiscount.jsx";
import Footer from "./UI/Other/Footer.jsx";
import Contact from "./UI/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/product/upto15" element={<ProductsByDiscount />} />
        <Route
          path="/product"
          element={
            <FilterProductProvider>
              <Products />
            </FilterProductProvider>
          }
        />
        <Route path="/product/category/:id" element={<ProductByCategory />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
