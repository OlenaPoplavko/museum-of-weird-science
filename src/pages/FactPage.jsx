import { useParams } from "react-router-dom";

function FactPage() {
  const { id } = useParams();
  let fact = "";

  if (id === "current") {
    fact = localStorage.getItem("currentFact");
  } else {
    const saved = localStorage.getItem("favorites");
    const favorites = saved ? JSON.parse(saved) : [];
    fact = favorites[id];
  }

  return (
    <div>
      <h2>Fact</h2>
      {fact ? <p>{fact}</p> : <p>Not found</p>}
    </div>
  );
}

export default FactPage;
