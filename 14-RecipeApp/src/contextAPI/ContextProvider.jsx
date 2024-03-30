import { createContext, useState, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Context = createContext({
  getRecipe: () => {},
  recipeData: [],
});

export default function ContexProvider({ children }) {
  /* ----------------------- States ----------------------- */
  const [recipeData, setRecipeData] = useState([]);
  const [activeUserCredits, setActiveUserCredits] = useState({
    userName: "",
    userPassword: "",
    authorized: false,
  });
  const [selectedFav, setSelectedFav] = useState(null);
  //const [usersData, setUsersData] = useState([]);  // without LocalStorage
  //const [favRecipesData, setFavRecipesData] = useState([]); // without LocalStorage

  /* ----------------- Localstorage states ---------------- */
  const [storedUsers, setStoredUsers] = useState([]);

  useEffect(() => {
    localStorage.setItem("storedUsers", JSON.stringify(storedUsers));
  }, [storedUsers]);

  const activeUserDataLS = storedUsers?.find(
    (user) => user.userName === activeUserCredits.userName
  );

  /* ------------------ fetching recipes ------------------ */
  const getRecipe = async (URL) => {
    try {
      const response = await axios.get(`${URL}`);
      setRecipeData(response.data.hits);
      return response.data.hits;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const contextContent = {
    getRecipe: getRecipe,
    activeUserCredits,
    setActiveUserCredits,
    //usersData, // without localStorage
    // setUsersData,
    //favRecipesData, // without localStorage
    //setFavRecipesData,
    recipeData,
    setRecipeData,
    storedUsers,
    setStoredUsers,
    activeUserDataLS,
    selectedFav,
    setSelectedFav,
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
