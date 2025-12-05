import { get, ref, set } from "firebase/database";
import { database } from "../../firebaseConfig";

const USER_PATH = "users";

const getUserRef = () => {
  return ref(database, USER_PATH);
};

export const fetchUsersFromFirebase = async () => {
  const snapshot = await get(getUserRef());
  return snapshot.exists() ? snapshot.val() : null;
};

export const writeInitialUserData = async (users) => {
  await set(getUserRef(), users);
};

export const writeUserDataByUID = (uid, data) => {
  console.log(uid, data);
  set(ref(database, "users/" + uid), {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    email: data.email,
    password: data.password,
  });
};
