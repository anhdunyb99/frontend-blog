import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Layout from "./components/Layout/Layout";
import { LoginContextProvider } from "./Context/LoginContext";
import { FormContextProvider, useFormContext } from "./Context/FormContext";
import PostForm from "./components/PostForm/PostForm";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const { isBlogPostFormVisible } = useFormContext();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Hàm để gọi API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://sincere-hero-563078a6a4.strapiapp.com/api/posts?populate=*"
        );
        if (response.data && Array.isArray(response.data.data)) {
          setPosts(
            response.data.data.map((post) => {
              return {
                id: post.id,
                title: post.attributes.title,
                content: post.attributes.content,
                image: post.attributes.image
                  ? post.attributes.image.data[0].attributes.url
                  : null,
              };
            })
          );
        } else {
          // Xử lý trường hợp không nhận được dữ liệu như mong đợi
          console.error("Data not received in expected format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Gọi hàm fetchPosts khi component được mount
    fetchPosts();
  }, []);

  return (
    <Router>
      <div className="App">
        <LoginContextProvider>
          <FormContextProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <MainContent blogPosts={posts} />
                  </Layout>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* ... other routes that use Layout */}
            </Routes>
          </FormContextProvider>
        </LoginContextProvider>
      </div>
    </Router>
  );
}

export default App;
