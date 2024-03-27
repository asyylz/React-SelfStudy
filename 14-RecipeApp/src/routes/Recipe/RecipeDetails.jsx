//import { useContext } from "react";
//import { Context } from "../../contextAPI/ContextProvider.jsx";
import { useParams, useLocation } from "react-router-dom";
import RecipeDetailsStyle from "./RecipeDetailsStyle.jsx";
export default function RecipeDetails() {
  //const { selectedRecipe } = useContext(Context);
  const {
    state: { recipe },
  } = useLocation();

  console.log(recipe);
  return (
    <RecipeDetailsStyle>
      <div className="container">
        <div className="div1">
          <div>
            <div>
              <img src={recipe.image} alt="omelette" />
            </div>
            <section>
              <div>
                <h1>{recipe.label}</h1>
                <p>
                  An easy and quick dish, perfect for any meal. This classic
                  omelette combines beaten eggs cooked to perfection, optionally
                  filled with your choice of cheese, vegetables, or meats.
                </p>
              </div>
              <div className="preparation-time">
                <h2>Preparation time</h2>
                <ul>
                  <li>
                    <span>Total: </span>
                    {`${recipe.totalTime} min`}
                  </li>
                </ul>
              </div>
              <hr />
              <section>
                <h2>Nutrition</h2>
                <p>
                  The table below shows nutritional values without the
                  additional fillings.
                </p>
                <table>
                  <tr>
                    <th>Total Weigth</th>
                    <td>{`${recipe.totalWeight.toFixed(2)} gr`}</td>
                  </tr>
                  <tr>
                    <th>Calories</th>
                    <td>{`${recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(
                      2
                    )} kCal`}</td>
                  </tr>
                  <tr>
                    <th>Carbs</th>
                    <td>{`${recipe.totalNutrients.CHOCDF.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                  <tr>
                    <th>Protein</th>
                    <td>{`${recipe.totalNutrients.PROCNT.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                  <tr>
                    <th>Fat</th>
                    <td>{`${recipe.totalNutrients.FAT.quantity.toFixed(
                      2
                    )} gr`}</td>
                  </tr>
                </table>
              </section>
            </section>
          </div>
        </div>
        <div className="div2">
          <section>
            <h2>Ingredients</h2>
            <ul>
              {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>
          <hr />
          <section>
            <h2>Instructions</h2>
            <ol>
              <li>
                <span>Beat the eggs: </span>In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <span>Heat the pan: </span>Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <span>Cook the omelette: </span>Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <span>Add fillings (optional): </span>When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <span>Fold and serve: </span>As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <span>Enjoy: </span>Serve hot, with additional salt and pepper
                if needed.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </RecipeDetailsStyle>
  );
}
