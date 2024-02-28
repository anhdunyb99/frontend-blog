import React, { Component, useContext, useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../Context/LoginContext";
import { useFormContext } from "../../Context/FormContext";
const Header = () => {
  let navigate = useNavigate();
  const [showPostForm, setShowPostForm] = useState(false);
  const { isLogin, setLogin } = useLoginContext();
  const { showBlogPostForm, isBlogPostFormVisible } = useFormContext();
  const handleSignin = async () => {
    navigate("/login");
  };

  const handleCreatePost = () => {};

  return (
    <header className="header">
      <div className="logo">My Blog</div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>{" "}
          {/* This is the Font Awesome magnifying glass icon */}
        </button>
      </div>
      <nav className="navigation">
        <a href="/mail">Mail</a>
        <a href="/news">News</a>
        <a href="/finance">Finance</a>
        <a href="/sports">Sports</a>
        <a href="/entertainment">Entertainment</a>
        <a href="/life">Life</a>
        <a href="/yahoo-plus">Yahoo Plus</a>
        <a href="/more">More...</a>
      </nav>
      <div className="user-actions">
        {isLogin ? (
          <button className="sign-in" onClick={showBlogPostForm}>
            Create Post
          </button>
        ) : (
          <button className="sign-in" onClick={handleSignin}>
            Sign in
          </button>
        )}

        <div className="icons">
          <span>🔔</span> {/* Replace with actual bell icon */}
          <span>✉️</span> {/* Replace with actual mail icon */}
        </div>
      </div>
    </header>
  );
};

export default Header;
