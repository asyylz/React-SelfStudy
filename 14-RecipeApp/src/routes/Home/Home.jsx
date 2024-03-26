import ButtonHomeSSS from "./ButtonHomeSSS.jsx";
import SelectHomeSSS from "./SelectHomeSSS.jsx";
import ContainerHomeSSS from "./ContainerHomeSSS.jsx";
import InputHomeSSS from "./InputHomeSSS.jsx";
import RecipeCardHomeSSS from "./RecipeCardHomeSSS.jsx";
import { useContext, useState } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const {
    getRecipe,
    mealType,
    setMealType,
    setRecipeSearch,
    recipeSearch,
    recipeData,
    userCredits,
    setSelectedRecipe,
  } = useContext(Context);


  const navigate = useNavigate();

  function handleClick(recipe, e) {
    e.preventDefault();
    navigate("/recipe");
    setSelectedRecipe(recipe);
  }

  return (
    <ContainerHomeSSS isEmpty={recipeData.length === 0 ? true : false}>
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
          <ButtonHomeSSS role="button" onClick={() => getRecipe()}>
            Search
          </ButtonHomeSSS>
        </div>
        <div className="result-wrapper">
          {recipeData.map((recipe) => (
            <RecipeCardHomeSSS>
              <div className="minip">
                <div className="mg">
                  <div className="clr"></div>
                  <div className="group">
                    <span>{recipe.recipe.mealType}</span>
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
                  onClick={(e) => handleClick(recipe.recipe,e)}
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
