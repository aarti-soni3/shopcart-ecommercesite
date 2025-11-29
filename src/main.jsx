import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./Context Provider/CartProvider.jsx";
import ProductProvider from "./Context Provider/ProductProvider.jsx";
import UserProvider from "./Context Provider/UserProvider.jsx";
import { FirebaseProvider } from "./Firebase/FirebaseProvider.jsx";
import CustomThemeProvider from "./Context Provider/CustomThemeProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <FirebaseProvider>
          <UserProvider>
            <CartProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </CartProvider>
          </UserProvider>
        </FirebaseProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
