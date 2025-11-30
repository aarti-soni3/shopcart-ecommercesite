import axios from "axios";

const PRODUCT_URL = "https://dummyjson.com/products?limit=194&skip=0";
export const fetchProductsFromAPI = async () => {
  const response = await axios.get(PRODUCT_URL);
  return response.data.products;
};

const CART_URL = "https://dummyjson.com/carts?limit=50&skip=0";

export const fetchCartsFromAPI = async () => {
  const response = await axios.get(CART_URL);
  return response.data.carts;
};

const USER_URL =
  "https://dummyjson.com/users?limit=5&select=firstName,lastName,age,phone,email,password";

export const fetchUsersFromAPI = async () => {
  const response = await axios.get(USER_URL);
  return response.data.users;
};
