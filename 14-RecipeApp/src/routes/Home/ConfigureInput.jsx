import SelectHomeSSS from "./SelectHomeSSS";
import InputHomeStyle from "./InputHomeStyle";
import ButtonHomeSSS from "./ButtonHomeSSS";
import { useState,useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../../contextAPI/ContextProvider.jsx";

export default function ConfigureInput() {
  const { getRecipe } = useContext(Context);

  const [mealType, setMealType] = useState("");
  const [recipeSearch, setRecipeSearch] = useState("");

  /* --------------------- API-------------------- */
  const APP_ID = "b87d8a95";
  const APP_KEY = "82c0d750c0fd26d9f8501630f794e019";
  const baseURL = `https://api.edamam.com/search?q=${recipeSearch}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;

  const navigate = useNavigate();

  /* ---------------- Handle Enter Key Pess --------------- */
  const handleKeyPess = (e) => {
    if (e.key === "Enter") {
      getRecipe(baseURL);
    }
  };

  return (
    <>
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
        <InputHomeStyle
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
    </>
  );
}
