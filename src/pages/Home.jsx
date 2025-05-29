import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const { fact, loading, error, getFact } = useContext(ApiContext);
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const navigate = useNavigate();

  function addToFavorites() {
    if (fact && !favorites.includes(fact)) {
      setFavorites([...favorites, fact]);
    }
  }

  function viewCurrentFact() {
    localStorage.setItem("currentFact", fact);
    navigate("/fact/current");
  }

  return (
    <div>
      <h2>Weird Science Fact</h2>
      <p>Did you know?</p>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>{fact}</p>
      )}

      <button onClick={getFact}>Get Random Fact</button>
      <button onClick={viewCurrentFact}>View</button>
      {fact && !favorites.includes(fact) && (
        <button onClick={addToFavorites}>Save to Favorites</button>
      )}
    </div>
  );
}

export default Home;
