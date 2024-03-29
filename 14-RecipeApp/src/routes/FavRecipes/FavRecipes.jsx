import Sidebar from "../../components/Sidebar/Sidebar";
import { RecipeContainerStyle, FavRecipesStyle } from "./FavRecipesStyle.jsx";
import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BsArrowBarLeft } from "react-icons/bs";
export default function FavRecipes() {
  /* --------------------- API Context -------------------- */
  const { favRecipesData, selectedFav } = useContext(Context);
  const { favRecipes } = favRecipesData;
  const navigate = useNavigate();

  /* ----------------------- Return ----------------------- */
  return (
    <FavRecipesStyle>
      <Sidebar />
      <RecipeContainerStyle>
      <BsArrowBarLeft
              className="navigate-back"
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer", fontSize: "2rem" }}
            />
        {favRecipes.length > 0 ? (
          <>
            <div className="recipe-wrapper">
              <section>
                <div className="image">
                  <img src={selectedFav?.image} alt="" />
                </div>

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
                  The table below shows nutritional values without the
                  additional fillings.
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
                <div className="ingridients">
                  <h2>Ingredients</h2>
                  <ul>
                    {selectedFav?.ingredientLines.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="instructions">
                  <h2>Instructions</h2>
                  <ol>
                    <li>
                      <span>Beat the eggs: </span>In a bowl, beat the eggs with
                      a pinch of salt and pepper until they are well mixed. You
                      can add a tablespoon of water or milk for a fluffier
                      texture.
                    </li>
                    <li>
                      <span>Heat the pan: </span>Place a non-stick frying pan
                      over medium heat and add butter or oil.
                    </li>
                    <li>
                      <span>Cook the omelette: </span>Once the butter is melted
                      and bubbling, pour in the eggs. Tilt the pan to ensure the
                      eggs evenly coat the surface.
                    </li>
                    <li>
                      <span>Add fillings (optional): </span>When the eggs begin
                      to set at the edges but are still slightly runny in the
                      middle, sprinkle your chosen fillings over one half of the
                      omelette.
                    </li>
                    <li>
                      <span>Fold and serve: </span>As the omelette continues to
                      cook, carefully lift one edge and fold it over the
                      fillings. Let it cook for another minute, then slide it
                      onto a plate.
                    </li>
                    <li>
                      <span>Enjoy: </span>Serve hot, with additional salt and
                      pepper if needed.
                    </li>
                  </ol>
                </div>
              </section>
            </div>
          </>
        ) : (
          <h2> You haven't added anything yet...</h2>
        )}
      </RecipeContainerStyle>
    </FavRecipesStyle>
  );
}
