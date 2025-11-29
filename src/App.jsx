import "./App.css";
import Navbar from "./UI/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./Product/Products";
import ProductCardDetail from "./Product/ProductCardDetail";
import About from "./UI/About";
import Contact from "./UI/Contact";
import CategoryList from "./Product/CategoryList";
import ProductByCategory from "./Product/ProductByCategory";
import FilterProductProvider from "./Context Provider/FilterProductProvider";
import LoginPage from "./UI/LoginPage";
import SignUpPage from "./UI/SignUpPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

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
