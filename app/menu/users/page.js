"use client";
import usefetch from "@/app/components/usefetch";
import styles from "./styles.module.css";

function Users() {
  const users_url = "https://jsonplaceholder.typicode.com/users";
  const comments_url = "https://jsonplaceholder.typicode.com/comments";
  const activeURL = users_url;
  const { users, error, loading } = usefetch(activeURL);

  return !loading ? (
    <div className={styles.boxes}>
      { activeURL === comments_url
        ? (users.map((user) => {
            return (
              <div key={user.id} className={styles.box}>
                <h2>{user.title}</h2>
                <h3>{user.body}</h3>
              </div>
            )
          }))
        : users.map((user) => {
            return (
              <div className={styles.box}>
                <h3>name: {user.name}</h3>
                <h3>username: {user.username}</h3>
                <div>email: {user.email}</div>
              </div>
            );
          })}
    </div>
  ) : (
    <h1>loading...</h1>
  );
}

export default Users;
