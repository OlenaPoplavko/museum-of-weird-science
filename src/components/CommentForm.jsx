import { useForm } from "react-hook-form";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="comment">Add your comment</label>
        <textarea
          id="comment"
          {...register("comment", {
            required: "Comment is required",
            maxLength: { value: 200, message: "Max 200 characters" },
          })}
        />
        {errors.comment && <p>{errors.comment.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
