import React from "react";
import "./MainContent.css"; // Đảm bảo bạn đã tạo file CSS này để style
import Post from "../Post/Post"; // Giả sử bạn đã có component Post để hiển thị mỗi bài đăng

const MainContent = ({ blogPosts }) => {
  return (
    <div className="main-content">
      {blogPosts.map((post, index) => {
        // Destructuring để lấy 'title', 'content', và 'image' từ mỗi bài đăng
        const { title, content, image } = post;

        // Bạn không cần giả sử 'attributes' ở đây vì đã xử lý trong App.js
        return (
          <Post
            key={index}
            title={title}
            content={content}
            image={image} // Thêm prop 'image' để hiển thị ảnh, nếu có
          />
        );
      })}
    </div>
  );
};

export default MainContent;
