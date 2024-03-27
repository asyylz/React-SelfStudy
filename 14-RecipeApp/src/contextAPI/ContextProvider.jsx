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
  const [selectedRecipe, setSelectedRecipe] = useState(null); //navigate ile yolla
  const [usersData, setUsersData] = useState([]);

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
    recipeData: recipeData,
    activeUserCredits,
    setActiveUserCredits,
    selectedRecipe,
    setSelectedRecipe,
    usersData,
    setUsersData,
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
