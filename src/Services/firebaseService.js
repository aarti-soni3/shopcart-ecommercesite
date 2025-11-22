import { get, getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase/firebaseApp";

const db = getDatabase(app);

// #region Product
const PRODUCT_PATH = "products";

const getProductRef = () => {
  return ref(db, PRODUCT_PATH);
};

export const fetchProductsFromFirebase = async () => {
  const snapshot = await get(getProductRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const saveProductsToFirebase = async (products) => {
  await set(getProductRef(), products);
};

// #endregion

// #region Cart

const CART_PATH = "carts";

const getCartRef = () => {
  return ref(db, CART_PATH);
};

export const fetchCartsFromfirebase = async () => {
  const snapshot = await get(getCartRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const saveCartsToFirebase = async (carts) => {
  await set(getCartRef(), carts);
};

// #endregion

// #region User

const USER_PATH = "users";

const getUserRef = () => {
  return ref(db, USER_PATH);
};

export const fetchUsersFromfirebase = async () => {
  const snapshot = await get(getUserRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const saveUsersToFirebase = async (carts) => {
  await set(getUserRef(), carts);
};

// #endregion