import { child, get, ref, set } from "firebase/database";
import { database } from "../../firebaseConfig";

export const CART_PATH = "carts";

export const getCartRef = () => {
  return ref(database, CART_PATH);
};

export const fetchCartsFromfirebase = async () => {
  const snapshot = await get(getCartRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const saveCartsToFirebase = async (carts) => {
  await set(getCartRef(), carts);
};

export const GetUserCartByID = async (userID) => {
  const dbRef = ref(database);
  const path = CART_PATH + "/" + userID;

  try {
    const snapshot = await get(child(dbRef, path));

    if (snapshot.exists()) {
      console.log("cart data : ", snapshot.val());
      return snapshot.val();
    } else {
      console.log("No Data Available");
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const AddProductToCartData = async (userID, product, quantity) => {
  try {
    const currentCart = await GetUserCartByID(userID);
    const productDetails = getSingleProductCartData(product, quantity);
    let allProductsInCart = {};

    if (currentCart && currentCart.products) {
      allProductsInCart = { ...currentCart.products };

      if (allProductsInCart[product.id]) {
        const existingQuantity = currentCart.product[product.id].quantity;
        const newQuantity = existingQuantity + quantity;
        productDetails.quantity = newQuantity;
        await getSingleProductCartData(productDetails);
      }
    }
    allProductsInCart[product.id] = productDetails;
    const cartdata = getProcessedCartData(userID, allProductsInCart);
    await writeCartDataByID(userID, cartdata);

    return cartdata;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateQuantity = async (userID, productID, quantity) => {
  try {
    const currentCart = await GetUserCartByID(userID);

    if (currentCart) {
      // console.log(currentCart);
      // console.log(currentCart.products);
      // console.log(productID);
      // console.log(currentCart.products[productID]);
      const product = currentCart.products[productID];

      if (product) {
        product.quantity += quantity;

        console.log(product.quantity, quantity);
        if (product.quantity <= 0) {
          console.log("delete prod");
          delete currentCart.products[productID];
        } else {
          const updatedProduct = getSingleProductCartData(
            product,
            product.quantity
          );
          currentCart.products[product.id] = updatedProduct;
        }
        const cartdata = getProcessedCartData(userID, currentCart.products);
        await writeCartDataByID(userID, cartdata);

        return cartdata;
      } else {
        throw new Error("Product was not found : ", productID);
      }
    } else {
      throw new Error("Cart is empty :", userID);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const RemoveProductFromCart = async (userID, productID) => {
  try {
    const currentCart = await GetUserCartByID(userID);

    if (
      currentCart &&
      currentCart.products &&
      currentCart.products[productID]
    ) {
      delete currentCart.products[productID];

      if (Object.keys(currentCart.products).length === 0) {
        await writeCartDataByID(userID, null);
        return null;
      }
    }
    const updatedCartData = getProcessedCartData(userID, currentCart.products);
    await writeCartDataByID(userID, updatedCartData);

    return updatedCartData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const ClearCart = async (userID) => {
  writeCartDataByID(userID, null);
  return null;
};

const writeCartDataByID = (userID, userCart) => {
  const db = database;
  console.log(userCart);
  set(ref(db, "carts/" + userID), userCart);
};

// #endregion

const getAllProductsTotal = (products) => {
  return Object.values(products).reduce((accumulator, product) => {
    return (accumulator += product.total);
  }, 0);
};

const getAllProductsDiscountedTotal = (products) => {
  return Object.values(products).reduce((accumulator, product) => {
    return (accumulator += product.discountedTotal);
  }, 0);
};

const getAllProductsTotalQuantity = (products) => {
  return Object.values(products).reduce((accumulator, product) => {
    return (accumulator += product.quantity);
  }, 0);
};

export const getSingleProductCartData = (product, quantity) => {
  const price = product.price;
  const newQuantity = quantity;
  const discountPercentage = product.discountPercentage;

  const total = price * quantity;
  const discountedTotal = total - (total * discountPercentage) / 100;

  const newProductDetails = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: newQuantity,
    total: total,
    discountPercentage: discountPercentage,
    discountedTotal: discountedTotal,
    thumbnail: product.thumbnail,
  };

  return newProductDetails;
};

const getProcessedCartData = (userId, products) => {
  const updatedCart = {
    userId: userId,
    products: products,
    total: getAllProductsTotal(products),
    discountedTotal: getAllProductsDiscountedTotal(products),
    totalProducts: Object.keys(products).length,
    totalQuantity: getAllProductsTotalQuantity(products),
  };

  return updatedCart;
};
