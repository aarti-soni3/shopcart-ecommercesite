import { UserContext } from "../../../Context Provider/CreateContext";
import { useUserData } from "../../../Hooks/useUserData";

export const UserProvider = ({ children }) => {
  const { users, loading, error } = useUserData();
  console.log(users, loading, error);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
