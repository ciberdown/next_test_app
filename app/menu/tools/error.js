"use client";
function ErrorPage({ error, reset }) {
  console.log(error, reset);
  return (
    <>
      <div>{error.message}</div>
      <button onClick={() => reset()}>click to reset</button>
    </>
  );
}

export default ErrorPage;
