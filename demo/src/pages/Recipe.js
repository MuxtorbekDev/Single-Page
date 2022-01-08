import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, []);
  return (
    <>
      <button className="btn" onclick={goBack}>
        Go Back
      </button>
    </>
  );
}
