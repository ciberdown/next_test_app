"use client";

function ErrorPage({ error, reset }) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={() => reset()}>click to reset</button>
    </>
  );
}

export default ErrorPage;
