import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import "./FactPage.css";

export default function FactPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  let fact = "";

  const [comments, setComments] = useState(() => {
    return JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
  });

  const addComment = (text) => {
    const updated = [...comments, text];
    setComments(updated);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updated));
  };

  if (id === "current") {
    fact = localStorage.getItem("currentFact");
  } else {
    const savedFavorites = localStorage.getItem("favorites");
    const favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
    fact = favorites[id];
  }

  return (
    <div className="fact-page-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <ArrowLeft size={18} />
      </button>
      <div className="fact-box">
        <div className="fact-content">
          <h2>Weird Science Fact</h2>
          <p className="fact-subtitle">Did you know?</p>
          <p className="fact-text">{fact || "Not found"}</p>
        </div>
        <div className="comment-section">
          <h3>Comments</h3>
          {comments.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            comments.map((c, i) => (
              <p key={i} className="comment-item">
                💬 {c}
              </p>
            ))
          )}
          <CommentForm onAdd={addComment} />
        </div>
      </div>
    </div>
  );
}
