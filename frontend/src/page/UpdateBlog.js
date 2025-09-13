import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Destructure blog data from route state
  const { title: preTitle, body: preBody, id: blogId } = location.state || {};

  const [title, setTitle] = useState(preTitle || "");
  const [body, setBody] = useState(preBody || "");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    // Only send updated fields — for PATCH
    const updatedFields = { title, body };

    fetch(`http://localhost:4000/api/blogs/${blogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update the blog");
        }
        setIsPending(false);
        navigate("/");
      })
      .catch((err) => {
        console.error("Error updating blog:", err);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
      <h2>Update Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        {!isPending && <button>Update Blog</button>}
        {isPending && <button disabled>Updating...</button>}
      </form>
    </div>
  );
};

export default UpdateBlog;
