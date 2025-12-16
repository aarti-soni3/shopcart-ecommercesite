import { child, get, ref, set } from "firebase/database";
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

export const getUserDataByUID = async (uid) => {
  const dbRef = ref(database);
  const path = USER_PATH + "/" + uid;

  const snapshot = await get(child(dbRef, path));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    return null;
  }
};
