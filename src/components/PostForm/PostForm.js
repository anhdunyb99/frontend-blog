import React, { useState } from "react";
import axios from "axios";
import "./PostForm.css";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("files.image", image, image.name);
    }

    try {
      const response = await axios.post(
        "https://sincere-hero-563078a6a4.strapiapp.com/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response here
      console.log(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error creating post:", error.response.data);
    }
  };

  return (
    <div className="blogpost-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength="100"
            placeholder="Enter the title of your post"
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="5000"
            placeholder="What are you thinking about?"
            required
          />
        </label>
        <label>
          Upload Image:
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </label>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
