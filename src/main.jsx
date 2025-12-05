import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomThemeProvider from "./Context Provider/CustomThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Firebase/Database/Users/UserProvider.jsx";
import { AuthProvider } from "./Firebase/Database/Auth/AuthProvider.jsx";
import CartProvider from "./Firebase/Database/Cart/CartProvider.jsx";
import ProductProvider from "./Firebase/Database/Product/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <UserProvider>
            <CartProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </CartProvider>
          </UserProvider>
        </AuthProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
