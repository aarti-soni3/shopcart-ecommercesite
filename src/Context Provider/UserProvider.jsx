import { UserContext } from "./CreateContext";
import { useUserData } from "../Hooks/useUserData";

function UserProvider({ children }) {
  const {users,loading,error} = useUserData();

  return (
    <UserContext.Provider value={{ users,loading,error }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
