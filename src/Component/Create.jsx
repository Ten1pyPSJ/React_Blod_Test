import React, { useState } from "react";
import posts from "../DB";

function Create() {
  const [title, setTitle] = useState("");
  const [smallText, setSmallText] = useState("");
  const [text, setText] = useState("");
  const [src, setSrc] = useState("");

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      title: title,
      SmallText: smallText,
      Text: text,
      src: src,
    };

    posts.push(newPost);
    console.log("New post added:", newPost);

    // Здесь можно добавить логику для сохранения массива posts в базе данных или файле

    // Очищаем поля формы
    setTitle("");
    setSmallText("");
    setText("");
    setSrc("");
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Small Text:</label>
      <input
        type="text"
        value={smallText}
        onChange={(e) => setSmallText(e.target.value)}
      />
      <label>Text:</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <label>Image URL:</label>
      <input
        type="text"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
      />
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
}

export default Create;