import { useForm } from "react-hook-form";
import "./CommentForm.css"; // обязательно создать этот файл!

function CommentForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ comment }) => {
    onAdd(comment);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
      <label htmlFor="comment">Add your comment</label>
      <textarea
        id="comment"
        className="comment-textarea"
        {...register("comment", {
          required: "Comment is required",
          maxLength: { value: 200, message: "Max 200 characters" },
        })}
      />
      {errors.comment && (
        <p className="error-message">{errors.comment.message}</p>
      )}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
