import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(async () => {
    const res = await axios.get("http://localhost:4003/posts");
    setPosts(res.data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post._id}
      >
        <div className="card-body">
          <h3>Title: {post.title}</h3>
          <p>Content: {post.content}</p>
          <CommentList comment={post.comment} />
          <CommentCreate postId={post.postId} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
