import { get, ref, set } from "firebase/database";
import { FirebaseContext } from "../Context Provider/CreateContext";
import { useContext } from "react";

export const useFirebaseService = () => {
  const { database } = useContext(FirebaseContext);

  // #region Product
  const PRODUCT_PATH = "products";

  const getProductRef = () => {
    return ref(database, PRODUCT_PATH);
  };

  const fetchProductsFromFirebase = async () => {
    const snapshot = await get(getProductRef());
    return snapshot.exists() ? snapshot.val() : null;
  };

  const saveProductsToFirebase = async (products) => {
    await set(getProductRef(), products);
  };

  // #endregion

  // #region Cart

  const CART_PATH = "carts";

  const getCartRef = () => {
    return ref(database, CART_PATH);
  };

  const fetchCartsFromfirebase = async () => {
    const snapshot = await get(getCartRef());
    return snapshot.exists() ? snapshot.val() : null;
  };

  const saveCartsToFirebase = async (carts) => {
    await set(getCartRef(), carts);
  };

  // #endregion

  // #region User

  const USER_PATH = "users";

  const getUserRef = () => {
    return ref(database, USER_PATH);
  };

  const fetchUsersFromfirebase = async () => {
    const snapshot = await get(getUserRef());
    return snapshot.exists() ? snapshot.val() : null;
  };

  const saveUsersToFirebase = async (carts) => {
    await set(getUserRef(), carts);
  };

  return {
    fetchProductsFromFirebase,
    fetchCartsFromfirebase,
    fetchUsersFromfirebase,
    saveProductsToFirebase,
    saveCartsToFirebase,
    saveUsersToFirebase,
  };
};
// #endregion
