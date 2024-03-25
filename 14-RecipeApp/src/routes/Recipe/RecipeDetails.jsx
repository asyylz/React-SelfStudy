import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
export default function RecipeDetails() {
  const { recipeData, userCredits,selectedRecipe  } = useContext(Context);
console.log(userCredits)
 console.log(selectedRecipe)
  return <div style={{ marginTop: "10rem" }}>recipe</div>;
}
