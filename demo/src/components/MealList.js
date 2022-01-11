import MealItem from "./MealItem";
import { useHistory } from "react-router-dom";

export default function MealList({ meals }) {
  const { goBack } = useHistory();

  return (
    <div className="mealList">
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      <div className="list">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
    </div>
  );
}
