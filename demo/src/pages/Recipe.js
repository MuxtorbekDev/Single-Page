import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const [showRecipe, setShowRecipe] = useState(false);
  const { goBack } = useHistory();

  const handleShowRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strYoutube,
    strInstructions,
  } = recipe;
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);
  return (
    <>
      <button className="btn recipe" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={strMealThumb} alt={strMeal} />
          <h1>{strMeal}</h1>
          <h6>
            {" "}
            <b>Category: </b>
            {strCategory}
          </h6>
          {strArea ? (
            <h6>
              <b>Area: </b> {strArea}
            </h6>
          ) : null}
          <p>{strInstructions}</p>
          <button onClick={handleShowRecipe} className="btn">
            Show Recipe
          </button>
          {showRecipe ? (
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          ) : null}
          {strYoutube ? (
            <div className="row">
              <h5>
                <b>Video Recipe:</b>
              </h5>
              <ifRame
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                title={id}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
