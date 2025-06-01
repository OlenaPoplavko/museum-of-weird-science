import useLocalStorage from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Eye, Trash } from "lucide-react";
import "./Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updated = favorites.filter((_, i) => i !== index);
    setFavorites(updated);
  };

  const handleView = (index) => {
    const fact = favorites[index];
    localStorage.setItem("currentFact", fact);
    navigate("/fact/current");
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="favorites-empty">No favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((fact, index) => (
            <div className="favorite-card" key={index}>
              <p className="favorite-text">{fact}</p>
              <div className="favorite-buttons">
                <button
                  onClick={() => handleView(index)}
                  className="icon-button view"
                  title="View"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="icon-button delete"
                  title="Delete"
                >
                  <Trash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
