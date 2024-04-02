import ContainerHomeStyle from "./ContainerHomeStyle.jsx";
import RecipeCardHomeSSS from "./RecipeCardHomeSSS.jsx";
import { useContext, useState, useEffect, useCallback } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import ConfigureInput from "./ConfigureInput.jsx";

export default function Home() {
  /* --------------------- Context API -------------------- */
  const {
    recipeData,
    activeUserCredits,
    //favRecipesData, // for without localstorage
    //setFavRecipesData, // for without localstorage
    storedUsers,
    setStoredUsers,
    activeUserDataLS,
  } = useContext(Context);

  const navigate = useNavigate();

  /* --------------------- Handle Favs Add?Remove withStates-------------------- */
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

  /* ------------------ Handle Favs with LocalStorage ----------------- */

  function handleFavClick(e, selectedRecipe) {
    e.preventDefault();
    if (activeUserDataLS) {
      const existingRecipe = activeUserDataLS.favRecipes.find(
        (recipe) => recipe.recipe.calories === selectedRecipe.recipe.calories
      );
      if (existingRecipe) {
        // Recipe already exists in favorites, remove it
        const updatedFavRecipesRemovedVersion = [
          ...activeUserDataLS.favRecipes.filter(
            (r) => r.recipe.calories !== selectedRecipe.recipe.calories
          ),
        ];
        const updatedUser = {
          ...activeUserDataLS,
          favRecipes: updatedFavRecipesRemovedVersion,
        };
        const updatedUsers = storedUsers.map((user) =>
          user.userName === activeUserDataLS.userName ? updatedUser : user
        );
        setStoredUsers(updatedUsers);
        alert("This recipe is removed from your favorite list.");
      } else {
        const updatedUser = {
          ...activeUserDataLS,
          favRecipes: [...activeUserDataLS.favRecipes, selectedRecipe],
        };
        const updatedUsers = storedUsers.map((user) =>
          user.userName === activeUserDataLS.userName ? updatedUser : user
        );
        setStoredUsers(updatedUsers);
        alert("Recipe is added to your fav list....");
      }
    }
  }

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

  /* ----------------------- RETURN ----------------------- */

  return (
    <ContainerHomeStyle isfilled={recipeData.length > 0 ? "true" : "false"}>
      <div className="wrapper">
        <ConfigureInput />
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
    </ContainerHomeStyle>
  );
}
