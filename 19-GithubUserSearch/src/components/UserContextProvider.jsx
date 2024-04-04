import { children, createContext, userContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState("");

  const baseUrl = "https://api.github.com/users/";
  async function fetchUser(user) {
    try {
      const response = await fetch(`${baseUrl}${user}`);
      console.log(baseUrl + user);
      const resData = await response.json();
      console.log(resData);
      setUser(resData);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}
