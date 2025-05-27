import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);

  function removeFavorite(idx) {
    const updated = favorites.filter((_, i) => i !== idx);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((fact, idx) => (
            <li key={idx}>
              {fact}
              <Link to={`/fact/${idx}`}>View</Link>
              <button onClick={() => removeFavorite(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
