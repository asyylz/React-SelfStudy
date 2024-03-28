import React from "react";
import SidebarStyle from "./SidebarStyle.jsx";
import { useContext } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";

export default function Sidebar() {
  const {
    activeUserCredits,
    favRecipesData,
    setFavRecipesData,
  } = useContext(Context);
  console.log(favRecipesData)
 const{favRecipes} = favRecipesData

  return (
    <SidebarStyle>
      <div className="sidebar-menu">
        <h4>Favorite Recipes</h4>
        <ul>
        {favRecipes.map((recipe,index)=>(<li key={index}>
            <a href="">{recipe.recipe.label}</a>
          </li>))}    
        </ul>
      </div>
    </SidebarStyle>
  );
}
