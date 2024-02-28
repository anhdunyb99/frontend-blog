import React, { Component } from "react";
import "./Post.css";
const Post = ({ title, content, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <span className="blog-category"></span>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{content}</p>
      </div>
    </div>
  );
};
export default Post;
