import "./App.css";
import Navbar from "./UI/Navbar";
import CustomThemeProvider from "./Context Provider/CustomThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Product/Products";
import ProductCardDetail from "./Product/ProductCardDetail";
import About from "./UI/About";
import Contact from "./UI/Contact";
import ProductByCategory from "./Product/ProductByCategory";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductByCategory />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<ProductCardDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </>
  );
}

export default App;
