import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:4000/api/blogs/${id}`);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:4000/api/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-detail">
      {error && <div style={{ color: "red", fontSize: "20px" }}>Error: {error}</div>}
      {isPending && <div>Loading...</div>}

      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p className="createdat">
            {new Date(blog.createdAt).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <div>{blog.body}</div>

          <div className="edit">
            <button onClick={handleDelete}>Delete</button>

            
            <Link
              to="/update"
              state={{ title: blog.title, body: blog.body, id: blog._id || id }}
              className="edit-button"
            >
              Edit
            </Link>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
