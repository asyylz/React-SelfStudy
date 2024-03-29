import React from "react";
import SidebarStyle from "./SidebarStyle.jsx";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../contextAPI/ContextProvider.jsx";

export default function Sidebar() {
  const { favRecipesData, setSelectedFav } = useContext(Context);
  const { favRecipes } = favRecipesData;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (favRecipesData.favRecipes.length > 0) {
      setSelectedFav(favRecipesData.favRecipes[0].recipe);
    }
  }, []);
  

  const handleClick = (recipe, index) => {
    setSelectedFav(recipe);
    setActiveIndex(index);
  };

  return (
    <SidebarStyle>
      <div className="sidebar-menu">
        <h4>Favorite Recipes</h4>
        <ul>
          {favRecipes.map((recipe, index) => (
            <li
              key={index}
              className={`selected-recipe ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleClick(recipe.recipe, index)}
            >
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
