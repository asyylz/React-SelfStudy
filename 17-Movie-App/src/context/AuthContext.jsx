import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../helpers/toastNotify";

//create context
const AuthContext = createContext();

// context provider
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  const register = async (email, password, displayName) => {
    // new user firebase method
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //update firebase method
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered !");
      console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toastSuccessNotify("Logged in successfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  const logout = () => {
    //*https://firebase.google.com/docs/auth/web/password-auth#next_steps
    signOut(auth); //! just calling signOut method is efficient
    toastSuccessNotify("Loged out ");
  };

  const signGoogleProvider = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const userObserver = () => {
    //? A Firebase method that tracks whether the user is signed in and returns the new user as a response when the user changes.
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log(user);
        const { email, displayName, photoURL } = user;
        console.log(user.displayName);
        setCurrentUser({ email, displayName, photoURL });
      } else {
        // User is signed out
        // ...
        setCurrentUser(false);
      }
    });
  };
  console.log(currentUser);
  
  useEffect(() => {
    userObserver(); //* We trigger the userObserver to track user logins and logouts.
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, register, login, logout, signGoogleProvider }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//* consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
