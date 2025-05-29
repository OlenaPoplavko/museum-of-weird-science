import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleView = (index) => {
    navigate(`/fact/${index}`);
  };

  return (
    <div>
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((fact, index) => (
            <li key={index}>
              <span>{fact}</span>
              <button onClick={() => handleView(index)}>View</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
