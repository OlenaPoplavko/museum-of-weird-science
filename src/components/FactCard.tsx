import "./FactCard.css";
import { BookOpen, Eye, Heart, Bookmark } from "lucide-react";

type FactCardProps = {
  title: string;
  description: string;
  onGetRandomFact: () => void;
  onView: () => void;
  onSaveToFavorites: () => void;
  isFavorite?: boolean;
};

function FactCard({
  title,
  description,
  onGetRandomFact,
  onView,
  onSaveToFavorites,
  isFavorite,
}: FactCardProps) {
  return (
    <div className="fact-card">
      <h2>{title}</h2>
      <p className="fact-subtitle">
        <strong>Did you know?</strong>
      </p>
      <p className="fact-description">{description}</p>

      <div className="button-row">
        <button
          onClick={onGetRandomFact}
          className="icon-button refresh"
          title="Show another fact"
        >
          <BookOpen size={18} />
        </button>

        <button onClick={onView} className="icon-button view" title="View">
          <Eye size={18} />
        </button>

        {isFavorite ? (
          <button className="icon-button saved" title="Already saved" disabled>
            <Bookmark size={18} />
          </button>
        ) : (
          <button
            onClick={onSaveToFavorites}
            className="icon-button favorite"
            title="Save to favorites"
          >
            <Heart size={18} />
          </button>
        )}
      </div>
    </div>
  );
}

export default FactCard;
