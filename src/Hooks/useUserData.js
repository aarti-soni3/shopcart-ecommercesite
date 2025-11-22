import { useEffect, useState } from "react";
import {
  fetchUsersFromfirebase,
  saveUsersToFirebase,
} from "../services/firebaseService";
import { fetchUsersFromAPI } from "../services/apiService";

export const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setError(null);
        setLoading(true);
        const firebaseData = await fetchUsersFromfirebase();

        if (firebaseData) {
          setData(firebaseData);
          console.log("firebase data : ", firebaseData);
        } else {
          const apiData = await fetchUsersFromAPI();
          await saveUsersToFirebase(apiData);
          setData(apiData);
          console.log("api data : ", apiData);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    loadUsers();
  }, []);

  return { users: data, loading, error };
};
