import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../DB";

function Blog() {
  const { id } = useParams();
  const post = posts.find((entry) => entry.id === parseInt(id));

  if (!post) {
    return <p>Статья не найдена</p>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <img src={post.src} alt={post.title} />
      <p>{post.Text}</p>
      <Link to="/">Вернуться на главную</Link>
    </>
  );
}

export default Blog;