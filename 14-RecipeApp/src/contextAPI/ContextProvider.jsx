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
  const [favRecipesData, setFavRecipesData] = useState({
    user: "",
    favRecipes: [],
  });
  const [selectedFav, setSelectedFav] = useState(null);
  // const [selectedFav, setSelectedFav] = useState(
  //   favRecipesData.favRecipes.length > 0
  //     ? favRecipesData.favRecipes[0].recipe
  //     : null
  // );

  //console.log(favRecipesData.favRecipes[0].recipe)

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
    selectedFav,
    setSelectedFav,
  };

  return <Context.Provider value={contextContent}>{children}</Context.Provider>;
}
