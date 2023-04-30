import React, { useState, useEffect } from "react";

const CommentList = ({ comment }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(comment);
  }, [comment]);

  const renderedComments = comments.map((comment) => {
    // pending, approved, rejected
    return (
      <li
        style={{
          backgroundColor:
            comment.status === "pending"
              ? "yellow"
              : comment.status === "approved"
              ? "green"
              : "red",
        }}
        key={comment._id}
      >
        {comment.content}
      </li>
    );
  });

  return (
    <>
      <p>Number of comments:{comments.length}</p>
      <ul>{renderedComments}</ul>
    </>
  );
};

export default CommentList;
