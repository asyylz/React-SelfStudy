import Sidebar from "../../components/Sidebar/Sidebar";
import { RecipeContainerStyle,FavRecipesStyle } from "./FavRecipesStyle.jsx";

export default function FavRecipes() {
  return (
    <FavRecipesStyle>
      <Sidebar />
      <RecipeContainerStyle>
        <div>asiye</div>
      </RecipeContainerStyle>
    </FavRecipesStyle>
  );
}
