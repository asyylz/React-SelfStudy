import { createContext, useState, useReducer } from "react";
import axios from "axios";

export const Context = createContext({
  getRecipe: () => {},
  recipeData: [],
});
//const usersData = [];
export default function ContexProvider({ children }) {
  const [recipeData, setRecipeData] = useState([]);
  const [activeUserCredits, setActiveUserCredits] = useState({
    userName: "",
    userPassword: "",
    authorized: false,
  });
  const [usersData, setUsersData] = useState([]);
  const [favRecipesData, setFavRecipesData] = useState([]);

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
  console.log(recipeData);

  const contextContent = {
    getRecipe: getRecipe,
    recipeData: recipeData,
    activeUserCredits,
    setActiveUserCredits,
    usersData,
    setUsersData,
    favRecipesData,
    setFavRecipesData,
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
