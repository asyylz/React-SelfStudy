import { createContext, useState, useReducer } from "react";
import axios from "axios";
export const Context = createContext({
  getRecipe: () => {},
  recipeData: [],
});

export default function ContexProvider({ children }) {
  const [recipeData, setRecipeData] = useState([]);
  const [activeUserCredits, setActiveUserCredits] = useState({
    userName: "",
    userPassword: "",
    authorized: false,
  });
  const [usersData, setUsersData] = useState([]);
  const [favRecipesData, setFavRecipesData] = useState([]);
  const [selectedFav, setSelectedFav] = useState(null);
  const storedUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];
  const activeUserDataLS= storedUsers.find(
    (user) => user.userName === activeUserCredits.userName
  )

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
    selectedFav,
    setSelectedFav,
    recipeData,
    setRecipeData,
    storedUsers,
    activeUserDataLS
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
