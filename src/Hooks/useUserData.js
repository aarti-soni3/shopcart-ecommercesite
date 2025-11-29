import { useContext, useEffect, useState } from "react";
import { useFirebaseService } from "../Firebase/useFirebaseService";
import { fetchUsersFromAPI } from "../services/apiService";
import { FirebaseContext } from "../Context Provider/CreateContext";
import { addAPIUsersToAuth } from "../Firebase/addAPIUsersToAuth";

export const useUserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const { fetchUsersFromfirebase, saveUsersToFirebase } = useFirebaseService();
  const { SignupUserWithEmailAndPassword } = useContext(FirebaseContext);
  
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
          await addAPIUsersToAuth(apiData);
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
