import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  CartContext,
} from "../../../Context Provider/CreateContext";
import {
  AddProductToCartData,
  ClearCart,
  GetUserCartByID,
  RemoveProductFromCart,
  updateQuantity,
} from "./cartService";
import { onValue, ref } from "firebase/database";
import { database } from "../../firebaseConfig";

function CartProvider({ children }) {
  const { currentUser } = useContext(AuthContext);

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [userID, setUserID] = useState("");

  useEffect(() => {
    const loadData = async () => {
      if (!currentUser?.uid) {
        setCart(null);
        return;
      }

      setLoading(true);
      const userID = currentUser.uid;
      const cartRef = ref(database, "carts/" + userID);
      const unsubscribe = onValue(
        cartRef,
        (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          setCart(data);
          setLoading(false);
        },
        (error) => {
          console.log(error);
          setError(error);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    };

    loadData();
  }, [currentUser]);

  const addToCart = async (product, newQuantity) => {
    if (!currentUser?.uid) throw new Error("User not authenticated");
    const userID = currentUser.uid;
    try {
      const updatedCart = await AddProductToCartData(
        userID,
        product,
        newQuantity
      );
      // setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.message);
      console.error("Error adding to cart:", err);
      throw err;
    }
  };

  const updateProductQuantity = async (productID, newQuantity) => {
    if (!currentUser?.uid) throw new Error("User not authenticated");
    const userID = currentUser.uid;
    try {
      console.log(newQuantity);
      const updatedCart = await updateQuantity(userID, productID, newQuantity);
      // setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.message);
      console.error("Error adding to cart:", err);
      throw err;
    }
  };

  const removeFromCart = async (productID) => {
    if (!currentUser?.uid) throw new Error("User not authenticated");
    const userID = currentUser.uid;

    try {
      const updatedCart = await RemoveProductFromCart(userID, productID);
      // setCart(updatedCart);
      return updatedCart;
    } catch (err) {
      setError(err.message);
      console.error("Error adding to cart:", err);
      throw err;
    }
  };

  const clearUserCart = async () => {
    if (!currentUser?.uid) throw new Error("User not authenticated");
    const userID = currentUser.uid;

    try {
      const updatedCart = await ClearCart(userID);
      return updatedCart;
      // setCart(updatedCart);
    } catch (err) {
      setError(err.message);
      console.error("Error adding to cart:", err);
      throw err;
    }
  };

  const getCartItemCount = () => {
    return cart ? cart.totalQuantity : 0;
  };

  const isProductInCart = (productID) => {
    // const product = cart?.products?.find((product) => product.id === productID);
    // return !!product;

    if (!cart || !cart.products) return false;
    return !!cart.products[productID];
  };

  const getProductQuantity = (productID) => {
    if (!cart || !cart.products || !cart.products[productID]) return 0;
    return cart.products[productID].quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        updateProductQuantity,
        getCartItemCount,
        isProductInCart,
        getProductQuantity,
        removeFromCart,
        clearUserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
