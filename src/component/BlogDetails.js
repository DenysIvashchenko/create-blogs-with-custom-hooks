import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();
  const hendelDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>
            {blog.title}-{id}
          </h2>
          <p>Written by {blog.author}</p>
          <section>{blog.body}</section>
          <button onClick={hendelDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
