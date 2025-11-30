import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context Provider/CreateContext";
import { auth } from "../../firebaseConfig";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const [signUpData, setSignUpData] = useState({
    isSignupLoading: false,
    isSignUpError: false,
    signUpErrorMessage: "",
  });
  const [loginData, setLoginData] = useState({
    isLoginLoading: false,
    isLoginError: false,
    loginErrorMessage: "",
  });
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

  const SignupUserWithEmailAndPassword = async (data) => {
    const email = data.email;
    const password = data.password;

    setSignUpData({
      isSignupLoading: true,
      isSignUpError: false,
      signUpErrorMessage: "",
    });

    if (!email || !password) {
      setSignUpData({
        isSignupLoading: false,
        isSignUpError: true,
        signUpErrorMessage: "Email and password fields are required.",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/");
      console.log("sign up user : ", user);
      //   writeUserDataByID(data);
    } catch (error) {
      const errorCode = error.code;
      let errorMsg = "";

      if (errorCode === "auth/email-already-in-use") {
        errorMsg = "This email is already registered. Please log in.";
      } else if (errorCode === "auth/invalid-email") {
        errorMsg = "Missing email or password.";
      } else if (errorCode === "auth/missing-password") {
        errorMsg = "Missing email or password.";
      } else if (errorCode === "auth/invalid-password") {
        errorMsg = "Email or Password does not meet minimum requirements.";
      } else if (errorCode === "auth/weak-password") {
        errorMsg = "Password must be at least 6 characters long.";
      }

      setSignUpData((prevData) => ({
        ...prevData,
        isSignUpError: true,
        signUpErrorMessage: errorMsg,
      }));
    } finally {
      setSignUpData((prevData) => ({
        ...prevData,
        isSignupLoading: false,
      }));
    }
  };

  const LoginUserWithEmailAndPassword = async (email, password) => {
    setLoginData({
      isLoginError: false,
      isLoginLoading: true,
      loginErrorMessage: "",
    });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      navigate("/");
      console.log("sign in user : ", user);
    } catch (error) {
      let errorMsg = "";

      const errorCode = error.code;
      if (errorCode === "auth/invalid-credential") {
        errorMsg = "Invalid email or password. Please check your credentials.";
      } else if (errorCode === "auth/invalid-email") {
        errorMsg = "Missing email or password.";
      } else if (errorCode === "auth/missing-password") {
        errorMsg = "Missing email or password.";
      } else if (errorCode === "auth/invalid-password") {
        errorMsg = "Email or Password does not meet minimum requirements.";
      } else if (error.code === "auth/wrong-password") {
        errorMsg = "Wrong email or password, Please check your credentials.";
      }
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        isLoginError: true,
        loginErrorMessage: errorMsg,
      }));
    } finally {
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        isLoginLoading: false,
      }));
    }
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
    <AuthContext.Provider
      value={{
        currentUser,
        signUpData,
        SignupUserWithEmailAndPassword,
        signOutUser,
        loginData,
        LoginUserWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
