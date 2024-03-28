import React from "react";
import SidebarStyle from "./SidebarStyle.jsx";
import { useContext, useState } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";

export default function Sidebar() {
  const {
    activeUserCredits,
    favRecipesData,
    setSelectedFav,
  } = useContext(Context);
  const { favRecipes } = favRecipesData;

  return (
    <SidebarStyle>
      <div className="sidebar-menu">
        <h4>Favorite Recipes</h4>
        <ul>
          {favRecipes.map((recipe, index) => (
            <li key={index} onClick={() => setSelectedFav(recipe.recipe)}>
              <a href="#">
                <i>{recipe.recipe.label}</i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SidebarStyle>
  );
}
