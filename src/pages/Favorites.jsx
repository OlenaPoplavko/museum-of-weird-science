import { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((fact, idx) => (
            <li key={idx}>{fact}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
