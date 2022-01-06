import { useParams, useHistory } from "react-router-dom";

export default function Movies() {
  const { id } = useParams();
  const { goBack } = useHistory();
  // console.log(value);
  return (
    <>
      <h1>Some Movie id {id}</h1>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
}
