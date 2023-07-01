"use client";

import { useQuery } from "react-query";
import styles from '../users/styles.module.css'

function CommentsComponent() {
  const comments_url = "https://jsonplaceholder.typicode.com/comments";
  const fetchComments = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const {
    data: comments,
    isLoading,
    isError,
    error,
    status,
  } = useQuery("comments", () => fetchComments(comments_url));

  if (isLoading) {
    return <h1>loading ...</h1>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className={styles.boxes}>
      {comments.map((comment) => {
        return (
          <div key={comment.id} className={styles.box}>
            <h2>{comment.name}</h2>
            <h3>{comment.body}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsComponent;
