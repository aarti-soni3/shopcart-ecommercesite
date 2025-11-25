import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./Context Provider/CartProvider.jsx";
import ProductProvider from "./Context Provider/ProductProvider.jsx";
import UserProvider from "./Context Provider/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);
