import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./ContextAPI/CartProvider";
import ProductProvider from "./ContextAPI/ProductProvider";
import UserProvider from "./ContextAPI/UserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </ProductProvider>
  </StrictMode>
);
