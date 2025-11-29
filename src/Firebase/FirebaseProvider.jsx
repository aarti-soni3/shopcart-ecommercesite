import { app, auth, database, firebaseConfig } from "./firebaseConfig";
import { FirebaseContext } from "../Context Provider/CreateContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FirebaseProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("you are logged in !");
      } else {
        setCurrentUser(null);
        console.log("you are logged out !");
      }
    });
  }, []);

  const SignupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign in user : ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error : ", errorCode, " ", errorMessage);
      });
  };

  const LoginUserWithEmailAndPassword = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log("sign in user : ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("error : ", errorCode, " ", errorMessage);
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("user logged out !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseConfig,
        app,
        database,
        auth,
        currentUser,
        signOutUser,
        SignupUserWithEmailAndPassword,
        LoginUserWithEmailAndPassword,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
