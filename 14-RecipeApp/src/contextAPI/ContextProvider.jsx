import { createContext, useState, useReducer } from "react";
import axios from "axios";

export const Context = createContext({
  getRecipe: () => {},
  recipeData: [],
});
const usersData = [];
export default function ContexProvider({ children }) {
  const APP_ID = "b87d8a95";
  const APP_KEY = "82c0d750c0fd26d9f8501630f794e019";
  const [mealType, setMealType] = useState("");
  const [recipeSearch, setRecipeSearch] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [userCredits, setUserCredits] = useState({
    userName: "",
    userPassword: "",
    authorized: false,
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [newUser, setNewUser] = useState({});
  const [userData, setUserData] = useState([]);
 

  const baseURL = `https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const getRecipe = async () => {
    try {
      const response = await axios.get(`${baseURL}`);
      setRecipeData(response.data.hits);
      return response.data.hits;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const contextContent = {
    getRecipe: getRecipe,
    mealType: mealType,
    setMealType: setMealType,
    setRecipeSearch: setRecipeSearch,
    recipeSearch: recipeSearch,
    recipeData: recipeData,
    userCredits,
    setUserCredits,
    selectedRecipe,
    setSelectedRecipe,
    setNewUser,
    newUser,
    userData,
    setUserData,
    usersData,
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
