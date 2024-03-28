import ButtonHomeSSS from "./ButtonHomeSSS.jsx";
import SelectHomeSSS from "./SelectHomeSSS.jsx";
import ContainerHomeSSS from "./ContainerHomeSSS.jsx";
import InputHomeSSS from "./InputHomeSSS.jsx";
import RecipeCardHomeSSS from "./RecipeCardHomeSSS.jsx";
import { useContext, useState } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";

export default function Home() {
  /* --------------------- Context API -------------------- */
  const {
    getRecipe,
    recipeData,
    activeUserCredits,
    favRecipesData,
    setFavRecipesData,
  } = useContext(Context);
  /* ----------------------- States ----------------------- */
  const [mealType, setMealType] = useState("");
  const [recipeSearch, setRecipeSearch] = useState("");

  /* --------------------- API-------------------- */
  const APP_ID = "b87d8a95";
  const APP_KEY = "82c0d750c0fd26d9f8501630f794e019";
  const baseURL = `https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const navigate = useNavigate();

  /* --------------------- Handle Favs -------------------- */
  function handleFavClick(e, selectedRecipe) {
    e.preventDefault();
    const isExist = favRecipesData.some(
      (recipe) => recipe.calories === selectedRecipe.calories
    );
    if (!isExist) {
      setFavRecipesData((prevState) => [...prevState, selectedRecipe]);
      alert("Recipe added to your fav list successfully!");
    } else {
      alert("This recipe already exists in your fav list...");
    }
  }
  /* -------------------- Handle Search ------------------- */
  function handleClick(recipe, e) {
    e.preventDefault();
    navigate("/recipe", { state: { recipe } });
  }

  /* ----------------------- RETURN ----------------------- */

  return (
    <ContainerHomeSSS isempty={recipeData.length === 0 ? "true" : "false"}>
      <div className="wrapper">
        <h1>Recipe Search</h1>
        <div className="search-wrapper">
          <SelectHomeSSS
            name="foodType"
            id=""
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="">Food Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="tea">Tea Time</option>
          </SelectHomeSSS>
          <InputHomeSSS
            placeholder="Write here..."
            type="text"
            name="text"
            className="input"
            onChange={(e) => setRecipeSearch(e.target.value)}
          />
          <ButtonHomeSSS role="button" onClick={() => getRecipe(baseURL)}>
            Search
          </ButtonHomeSSS>
        </div>
        <div className="result-wrapper">
          {recipeData.map((recipe, index) => (
            <RecipeCardHomeSSS key={index}>
              <div className="minip">
                <div className="mg">
                  <div className="clr">
                    <MdFavoriteBorder
                      className="icon fav"
                      onClick={(e) => handleFavClick(e, recipe)}
                    />
                  </div>
                  <div className="group">
                    <span>{mealType}</span>
                  </div>
                </div>
                <div
                  className="av"
                  style={{
                    backgroundImage: `url(${recipe.recipe.image})`,
                  }}
                ></div>
                <div className="info">
                  <h3>{recipe.recipe.label}</h3>
                </div>
                <a
                  className="plot"
                  title="plot with recipe"
                  href=""
                  onClick={(e) => handleClick(recipe.recipe, e)}
                >
                  view recipe →
                </a>
              </div>
            </RecipeCardHomeSSS>
          ))}
        </div>
      </div>
    </ContainerHomeSSS>
  );
}
