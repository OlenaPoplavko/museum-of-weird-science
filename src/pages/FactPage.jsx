import { useParams, useNavigate } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { useState } from "react";

function FactPage() {
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
    const saved = localStorage.getItem("favorites");
    const favorites = saved ? JSON.parse(saved) : [];
    fact = favorites[id];
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>Fact Detail</h2>
      {fact ? <p>{fact}</p> : <p>Not found</p>}

      <h3>Comments</h3>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        comments.map((c, index) => <p key={index}>• {c}</p>)
      )}

      <CommentForm onAdd={addComment} />
    </div>
  );
}

export default FactPage;
