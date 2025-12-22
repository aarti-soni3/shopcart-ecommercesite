import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomThemeProvider from "./Context Provider/CustomThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Firebase/Database/Auth/AuthProvider.jsx";
import CartProvider from "./Firebase/Database/Cart/CartProvider.jsx";
import ProductProvider from "./Firebase/Database/Product/ProductProvider.jsx";
import OrderProvider from "./Firebase/Database/Order/OrderProvider.jsx";
import FeedbackProvider from "./Context Provider/FeedbackProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <FeedbackProvider>
          <AuthProvider>
            <CartProvider>
              <OrderProvider>
                <ProductProvider>
                  <App />
                </ProductProvider>
              </OrderProvider>
            </CartProvider>
          </AuthProvider>
        </FeedbackProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
