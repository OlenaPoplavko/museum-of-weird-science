import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import useLocalStorage from "../hooks/useLocalStorage";
import FactCard from "../components/FactCard";

function Home() {
  const { fact, loading, error, getFact } = useContext(ApiContext);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const navigate = useNavigate();

  const isFavorite = favorites?.includes(fact) ?? false;

  function addToFavorites() {
    if (fact && !favorites?.some((f) => f === fact)) {
      setFavorites([...favorites, fact]);
      console.log("Saved to favorites:", fact);
    } else {
      console.log("Already in favorites:", fact);
    }
  }

  function viewCurrentFact() {
    localStorage.setItem("currentFact", fact);
    navigate("/fact/current");
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <FactCard
          title="Weird Science Fact"
          description={fact}
          onGetRandomFact={getFact}
          onView={viewCurrentFact}
          onSaveToFavorites={addToFavorites}
          isFavorite={isFavorite}
        />
      )}
    </div>
  );
}

export default Home;
