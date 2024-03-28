import Sidebar from "../../components/Sidebar/Sidebar";
import { RecipeContainerStyle, FavRecipesStyle } from "./FavRecipesStyle.jsx";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function FavRecipes() {
  /* --------------------- API Context -------------------- */
  const {
    activeUserCredits,
    favRecipesData,
    setFavRecipesData,
    recipeData,
    selectedFav,
    setSelectedFav,
  } = useContext(Context);
  const { favRecipes } = favRecipesData;
  console.log(selectedFav);
  /* ----------------------- Return ----------------------- */
  return (
    <FavRecipesStyle>
      <Sidebar />
      <RecipeContainerStyle>
        <div className="recipe-wrapper">
          <section>
            <h1>{selectedFav?.label}</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            
          </section>
        </div>
      </RecipeContainerStyle>
    </FavRecipesStyle>
  );
}
