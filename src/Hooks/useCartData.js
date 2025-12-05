import { useEffect, useState } from "react";
import { fetchCartsFromAPI } from "../services/apiService";
import {
  fetchCartsFromfirebase,
  saveCartsToFirebase,
} from "../Firebase/Database/Cart/cartService";

export const useCartData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCarts = async () => {
      try {
        setError(null);
        setLoading(true);

        const firebaseData = await fetchCartsFromfirebase();
        if (firebaseData) {
          setData(firebaseData);
          console.log("firebase data : ", firebaseData);
        } else {
          const apiData = await fetchCartsFromAPI();
          await saveCartsToFirebase(apiData);
          setData(apiData);
          console.log("api data : ", apiData);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    loadCarts();
  }, []);

  return { carts: data, loading, error };
};
