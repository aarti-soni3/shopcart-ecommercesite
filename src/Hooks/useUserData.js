import { useEffect, useState } from "react";
import { fetchUsersFromAPI } from "../services/apiService";
import { addAPIUsersToAuth } from "../Firebase/addAPIUsersToAuth";
import { UserContext } from "../Context Provider/CreateContext";
import {
  fetchUsersFromFirebase,
  writeInitialUserData,
} from "../Firebase/Database/Users/userService";

export const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setError(null);
      setLoading(true);

      const firebaseData = await fetchUsersFromFirebase();

      if (firebaseData) {
        setData(firebaseData);
        console.log("firebase data : ", firebaseData);
      } else {
        const apiData = await fetchUsersFromAPI();
        await writeInitialUserData(apiData);
        await addAPIUsersToAuth(apiData);
        setData(apiData);
        console.log("api data : ", apiData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { users: data, loading, error };
};
