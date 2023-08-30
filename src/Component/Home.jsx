import React from "react";
import { Link } from "react-router-dom";
import posts from "../DB";
import "./style.css"

function Home() {
  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-4">
          <div>
            <h3>Статья: {post.id}</h3>
            <h2>{post.title}</h2>
            <img src={post.src} className="img" alt={post.title} />
            <h3>{post.SmallText}</h3>
            <Link to={`/${post.id}`}>Просмотреть</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;