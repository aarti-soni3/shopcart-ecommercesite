import { get, ref, set } from "firebase/database";
import { useCallback } from "react";
import { database } from "./firebaseConfig";

export const useFirebaseService = () => {
  // #region Product
  const PRODUCT_PATH = "products";

  const getProductRef = useCallback(() => {
    return ref(database, PRODUCT_PATH);
  }, [database]);

  const fetchProductsFromFirebase = useCallback(async () => {
    const snapshot = await get(getProductRef());
    return snapshot.exists() ? snapshot.val() : null;
  }, [getProductRef]);

  const saveProductsToFirebase = async (products) => {
    await set(getProductRef(), products);
  };

  // #endregion

  // #region Cart

  const CART_PATH = "carts";

  const getCartRef = useCallback(() => {
    return ref(database, CART_PATH);
  }, [database]);

  const fetchCartsFromfirebase = useCallback(async () => {
    const snapshot = await get(getCartRef());
    return snapshot.exists() ? snapshot.val() : null;
  }, [getCartRef]);

  const saveCartsToFirebase = async (carts) => {
    await set(getCartRef(), carts);
  };

  // #endregion

  return {
    fetchProductsFromFirebase,
    fetchCartsFromfirebase,
    saveProductsToFirebase,
    saveCartsToFirebase,
  };
};
