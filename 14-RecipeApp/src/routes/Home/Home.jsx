import ButtonHomeSSS from "./ButtonHomeSSS.jsx";
import SelectHomeSSS from "./SelectHomeSSS.jsx";
import ContainerHomeSSS from "./ContainerHomeSSS.jsx";
import InputHomeSSS from "./InputHomeSSS.jsx";
import RecipeCardHomeSSS from "./RecipeCardHomeSSS.jsx";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

export default function Home() {
  /* --------------------- Context API -------------------- */
  const {
    getRecipe,
    recipeData,
    activeUserCredits,
    //favRecipesData, // for without localstorage
    //setFavRecipesData, // for without localstorage
    storedUsers,
    activeUserDataLS
  } = useContext(Context);
  /* ----------------------- States ----------------------- */
  const [mealType, setMealType] = useState("");
  const [recipeSearch, setRecipeSearch] = useState("");

  /* --------------------- API-------------------- */
  const APP_ID = "b87d8a95";
  const APP_KEY = "82c0d750c0fd26d9f8501630f794e019";
  const baseURL = `https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const navigate = useNavigate();

  /* --------------------- Handle Favs Add?Remove-------------------- */
  // function handleFavClick(e, selectedRecipe) {
  //   e.preventDefault();
  //   setFavRecipesData((prevState) => {
  //     const userIndex = prevState.findIndex(
  //       (rec) => rec.user === activeUserCredits.userName
  //     );
  //     if (userIndex !== -1) {
  //       // User already exists, update their favRecipes array
  //       const recipeExists = prevState[userIndex].favRecipes.some(
  //         (recipe) => recipe.recipe.calories === selectedRecipe.recipe.calories
  //       );
  //       if (recipeExists) {
  //         const updatedFavRecipesRemove = [
  //           ...prevState[userIndex].favRecipes.filter(
  //             (r) => r.recipe.calories !== selectedRecipe.recipe.calories
  //           ),
  //         ];
  //         alert("Recipe is removed from your fav list successfully!");
  //         return [
  //           ...prevState.slice(0, userIndex), // Previous users before the updated one
  //           { ...prevState[userIndex], favRecipes: updatedFavRecipesRemove }, // Updated user
  //           ...prevState.slice(userIndex + 1), // Following users after the updated one
  //         ];
  //       } else {
  //         const updatedFavRecipesAdd = [
  //           ...prevState[userIndex].favRecipes,
  //           selectedRecipe,
  //         ];
  //         alert("Recipe added to your fav list successfully!");
  //         return [
  //           ...prevState.slice(0, userIndex), // Previous users before the updated one
  //           { ...prevState[userIndex], favRecipes: updatedFavRecipesAdd }, // Updated user
  //           ...prevState.slice(userIndex + 1), // Following users after the updated one
  //         ];
  //       }
  //     } else {
  //       // User doesn't exist, add them with the selected recipe
  //       return [
  //         ...prevState,
  //         {
  //           user: activeUserCredits.userName,
  //           favRecipes: [selectedRecipe],
  //         },
  //       ];
  //     }
  //   });
  // }

  /* ------------------ with LocalStorage ----------------- */

  const handleFavClick = (e, selectedRecipe) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];

    const foundUser = storedUsers.find(
      (user) => user.userName === activeUserCredits.userName
    );

    if (foundUser) {
      const existingRecipe = foundUser.favRecipes.find(
        (recipe) => recipe.recipe.calories === selectedRecipe.recipe.calories
      );
      if (existingRecipe) {
        // Recipe already exists in the user's favorites
        alert("This recipe is already in your favorite list.");
        return;
      } else {
        const updatedUser = {
          ...foundUser,
          favRecipes: [selectedRecipe, ...foundUser.favRecipes],
        };
        const updatedUsers = storedUsers.map((user) =>
          user.userName === foundUser.userName ? updatedUser : user
        );
        localStorage.setItem("storedUsers", JSON.stringify(updatedUsers));
        alert("Recipe is added to your fav list....");
      }
    }
  };

  /* --------------- Favs with LocalStorage Boolean Value--------------- */
  const favList = recipeData.map((recipe) =>
    storedUsers.some(
      (user) =>
        user.userName === activeUserCredits.userName &&
        user.favRecipes.some(
          (r) => r.recipe.calories === recipe.recipe.calories
        )
    )
  );

  /* ----------------Favs Without localStorage ---------------- */
  // const isFavorited = recipeData.map((recipe) =>
  //   favRecipesData.some(
  //     (rec) =>
  //       rec.user === activeUserCredits.userName &&
  //       rec.favRecipes.some((r) => r.recipe.calories === recipe.recipe.calories)
  //   )
  // );

  
  /* -------------------- Handle Search ------------------- */
  function handleClick(recipe, e) {
    e.preventDefault();
    navigate("/recipe", { state: { recipe } });
  }

  /* ---------------- Handle Enter Key Pess --------------- */
  const handleKeyPess = (e) => {
    if (e.key === "Enter") {
      getRecipe(baseURL);
    }
  };

  /* ----------------------- RETURN ----------------------- */

  return (
    <ContainerHomeSSS isfilled={recipeData.length > 0 ? "true" : "false"}>
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
            onKeyDown={handleKeyPess}
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
                    <div
                      className="icon"
                      onClick={(e) => handleFavClick(e, recipe)}
                    >
                      {/* Toggle between the filled and outlined heart icons based on the isFavorited flag */}
                      {favList[index] ? <AiFillHeart /> : <MdFavoriteBorder />}
                    </div>
                  </div>
                  <div className="group">
                    <span>{recipe.recipe.cuisineType}</span>
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
