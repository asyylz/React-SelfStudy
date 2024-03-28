import Sidebar from "../../components/Sidebar/Sidebar";
import { RecipeContainerStyle, FavRecipesStyle } from "./FavRecipesStyle.jsx";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function FavRecipes() {
  /* --------------------- API Context -------------------- */
  const {
    activeUserCredits,
    favRecipesData,
    setFavRecipesData,
    recipeData,
    selectedFav,
    setSelectedFav,
  } = useContext(Context);
  const { favRecipes } = favRecipesData;
  console.log(selectedFav);
  /* ----------------------- Return ----------------------- */
  return (
    <FavRecipesStyle>
      <Sidebar />
      <RecipeContainerStyle>
        <div className="recipe-wrapper">
          <section>
            <img src={selectedFav?.image} alt="" />
            <h1>{selectedFav?.label}</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <h3>
              Total time: <span>{`${selectedFav?.totalTime} min`}</span>
            </h3>
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values without the additional
              fillings.
            </p>
            <div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>Total Weigth</th>
                    <td>{`${selectedFav?.totalWeight.toFixed(2)} gr`}</td>
                  </tr>
                  <tr>
                    <th>Calories</th>
                    <td>{`${selectedFav?.totalNutrients.ENERC_KCAL.quantity.toFixed(
                      2
                    )} kCal`}</td>
                  </tr>
                  <tr>
                    <th>Carbs</th>
                    <td>{`${selectedFav?.totalNutrients.CHOCDF.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                  <tr>
                    <th>Protein</th>
                    <td>{`${selectedFav?.totalNutrients.PROCNT.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                  <tr>
                    <th>Fat</th>
                    <td>{`${selectedFav?.totalNutrients.FAT.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2>Ingredients</h2>
            <ul>
              {selectedFav?.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>
        </div>
      </RecipeContainerStyle>
    </FavRecipesStyle>
  );
}
