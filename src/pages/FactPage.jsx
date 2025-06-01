import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { useState } from "react";

export default function FactPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  let fact = "";

  const [comments, setComments] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
    return saved;
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
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Fact Detail</h2>
      {fact ? <p>{fact}</p> : <p>Not found</p>}

      <div className="comment-section">
        <h3>Comments</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((c, idx) => (
            <p key={idx} className="comment-item">
              • {c}
            </p>
          ))
        )}
        <CommentForm onAdd={addComment} />
      </div>
    </>
  );
}
