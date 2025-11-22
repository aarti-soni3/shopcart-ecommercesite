import { CartContext } from "./CreateContext";
import { useCartData } from "../Hooks/useCartData";

function CartProvider({ children }) {
  const {carts,loading,error} = useCartData();

  return (
    <CartContext.Provider value={{ carts,loading,error }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
