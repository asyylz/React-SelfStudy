import React from "react";
import SidebarStyle from "./SidebarStyle.jsx";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";

export default function Sidebar() {
  const {
    //favRecipesData,
    activeUserCredits,
    storedUsers,
    activeUserDataLS,
    selectedFav,
    setSelectedFav,
  } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeUserDataLS);
  const {favRecipes} =useContext(Context).activeUserDataLS


  /* ---------------- without Localstroage ---------------- */
  // useEffect(() => {
  //   const userRecipe = favRecipesData.find(
  //     (recipe) => recipe.user === activeUserCredits.userName
  //   );
  //   if (userRecipe && userRecipe?.favRecipes.length > 0) {
  //     setSelectedFav(userRecipe.favRecipes[0].recipe);
  //   }
  // }, []);

  /* ------------------ with localStorage ----------------- */
  useEffect(() => {
    //const storedUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];

    // const userFirstFavRecipe = storedUsers.find(
    //   (user) => user.userName === activeUserCredits.userName
    // ).favRecipes[0];
    if (favRecipes.length > 0) {
      setSelectedFav(favRecipes[0].recipe);
    }
  }, []);

  /* ------------- localStorage user fav list ------------- */
  //const storedUsers = JSON.parse(localStorage.getItem("storedUsers")) || [];
  // const favRecipeList = storedUsers.find(
  //   (user) => user.userName === activeUserCredits.userName
  // ).favRecipes;

  /* ------------------- handlefavclick ------------------- */
  const handleClick = (recipe, index) => {
    setSelectedFav(recipe);
    setActiveIndex(index);
  };

  /* ----------------------- Return ----------------------- */
  return (
    <SidebarStyle>
      <div className="sidebar-menu">
        <h4>Favorite Recipes</h4>
        <ul>
          {favRecipes.map((recipe, index) => (
            <li
              key={index}
              className={`selected-recipe ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(recipe.recipe, index)}
            >
              <a>
                <i>{recipe.recipe.label}</i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      /* ---------------- without localStorage ---------------- */
      {/* <div className="sidebar-menu">
        <h4>Favorite Recipes</h4>
        <ul>
          {favRecipesData.map(
            (userRecipe) =>
              userRecipe.user === activeUserCredits.userName &&
              userRecipe.favRecipes.map((recipe, index) => (
                <li
                  key={index}
                  className={`selected-recipe ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handleClick(recipe.recipe, index)}
                >
                  <a>
                    <i>{recipe.recipe.label}</i>
                  </a>
                </li>
              ))
          )}
        </ul>
      </div> */}
    </SidebarStyle>
  );
}
