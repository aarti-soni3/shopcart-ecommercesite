import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContext,
  FeedbackContext,
} from "../../../Context Provider/CreateContext";
import { auth } from "../../firebaseConfig";
import { getUserDataByUID, writeUserDataByUID } from "../Users/userService";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);
  const { showSuccessFeedback, showErrorFeedback, showFeedback } =
    useContext(FeedbackContext);

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
    const getUserDataByID = async () => {
      const uid = currentUser?.uid;

      try {
        const userData = await getUserDataByUID(uid);
        setCurrentUserData(userData);
        return userData;
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        getUserDataByID();
        // showSuccessFeedback("you are logged in !");
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser, showFeedback, showSuccessFeedback]);

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

      showErrorFeedback("Email and password fields are required.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await writeUserDataByUID(user.uid, data);
      showSuccessFeedback("Account Created!");
      navigate("/");
      setSignUpData({
        ...loginData,
        isSignUpError: false,
        signUpErrorMessage: "",
      });
    } catch (error) {
      const errorCode = error.code;
      let errorMsg = getErrorMessage(errorCode);
      showErrorFeedback(errorMsg);

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
      showSuccessFeedback("You're logged in!");
      navigate("/");
      setLoginData({
        ...loginData,
        isLoginError: false,
        loginErrorMessage: "",
      });
      console.log("sign in user : ", user);
    } catch (error) {
      const errorCode = error.code;
      let errorMsg = getErrorMessage(errorCode);
      showErrorFeedback(errorMsg);
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

  const getErrorMessage = (errorCode) => {
    let errorMsg = "";

    if (errorCode === "auth/invalid-credential") {
      errorMsg = "Invalid email or password. Please check your credentials.";
    } else if (errorCode === "auth/invalid-email") {
      errorMsg = "Missing email or password.";
    } else if (errorCode === "auth/missing-password") {
      errorMsg = "Missing email or password.";
    } else if (errorCode === "auth/invalid-password") {
      errorMsg = "Email or Password does not meet minimum requirements.";
    } else if (errorCode === "auth/wrong-password") {
      errorMsg = "Wrong email or password, Please check your credentials.";
    } else if (errorCode === "auth/email-already-in-use") {
      errorMsg = "This email is already registered. Please log in.";
    } else if (errorCode === "auth/weak-password") {
      errorMsg = "Password must be at least 6 characters long.";
    } else {
      errorMsg = "something went wrong... Error Code : " + errorCode;
    }

    return errorMsg;
  };

  // const getUserDataByID = useCallback(async () => {
  //   const uid = currentUser?.uid;

  //   if (!uid) {
  //     throw new Error("User not authenticated.");
  //   }

  //   try {
  //     const userData = await getUserDataByUID(uid);
  //     console.log(userData);
  //     setCurrentUserData(userData);
  //     return userData;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }, [currentUser]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        showFeedback("you are logged out !");
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
        currentUserData,
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
