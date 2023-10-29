import React from "react";

function Article({ title, date, content, imageUrl }) {
  return (
    <div className="article">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>Published: {date}</p>
      <p>{content}</p>
      <button>Read more</button>
    </div>
  );
}

export default Article;
