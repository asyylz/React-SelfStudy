import { Children, createContext, useState } from "react";
// create context
const AuthContext = createContext();
import { auth } from "../auth/firebase";

// context provider
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const register = async (email, password) => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
  };
  return (
    <AuthContext.Provider value={{ currentUser, register }}>
      {children}
    </AuthContext.Provider>
  );
};

//consumer with custom hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
