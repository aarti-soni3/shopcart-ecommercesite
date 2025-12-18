import axios from "axios";

const PRODUCT_URL = "https://dummyjson.com/products?limit=194&skip=0";
export const fetchProductsFromAPI = async () => {
  const response = await axios.get(PRODUCT_URL);
  return response.data.products;
};
