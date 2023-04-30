import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <br />
          <label htmlFor="content">Content</label>
          <input
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
