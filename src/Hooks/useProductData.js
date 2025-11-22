import { useEffect, useState } from "react";
import {
  fetchProductsFromFirebase,
  saveProductsToFirebase,
} from "../services/firebaseService";
import { fetchProductsFromAPI } from "../services/apiService";

export const useProductData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setError(null);
        setLoading(true);
        const firebaseData = await fetchProductsFromFirebase();

        if (firebaseData) {
          setData(firebaseData);
          console.log("firebase data : ", firebaseData);
        } else {
          const apiData = await fetchProductsFromAPI();
          await saveProductsToFirebase(apiData);
          setData(apiData);
          console.log("api data : ", apiData);
        }
        setLoading(false);
      } catch (e) {
        setError(e);
        console.log("Error:", e);
      }
    };

    loadProducts();
  }, []);

  return { products: data, loading, error };
};
