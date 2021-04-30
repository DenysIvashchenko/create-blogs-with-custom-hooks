import { useState } from "react";
import { useHistory } from "react-router";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("den");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const hendelSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Create new Blog</h2>
      <form onSubmit={hendelSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Blog text:</label>
        <textarea
          required
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="den">Den</option>
          <option value="alex">Alex</option>
        </select>
        {!isPending ? <button>Add Blog</button> : <button>Adding...</button>}
      </form>
    </div>
  );
}

export default Create;
