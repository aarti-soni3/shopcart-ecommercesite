import { get, ref, set } from "firebase/database";
import { database } from "../../firebaseConfig";

// #region Product
const PRODUCT_PATH = "products";

const getProductRef = () => {
  return ref(database, PRODUCT_PATH);
};

export const fetchProductsFromFirebase = async () => {
  const snapshot = await get(getProductRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const saveProductsToFirebase = async (products) => {
  await set(getProductRef(), products);
};

// #endregion
