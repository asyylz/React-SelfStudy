import Sidebar from "../../components/Sidebar/Sidebar";
import FavRecipesStyle from "./FavRecipesStyle";

export default function FavRecipes() {
  return (
    <FavRecipesStyle>
    <Sidebar />
    <div className="recipe">recipe</div>
    </FavRecipesStyle>
  );
}
