// client/src/pages/PostFeed.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import "./PostFeed.css";

const PostFeed = () => {
  const { user } = useUser();
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    setPosts(res.data);
  };

  const handlePost = async () => {
    if (!question.trim()) return;
    await axios.post("http://localhost:5000/api/posts/create", {
      question,
      askedBy: {
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        photo: user.imageUrl,
      },
    });
    setQuestion("");
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/posts/${id}`);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      <h2>Ask Your Doubts</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="What's your question?"
        className="question-box"
      />
      <button onClick={handlePost} className="post-btn">Post</button>

      <div className="post-list">
        {posts.map((post) => (
          <div key={post._id} className="post-card">
            <div className="poster-info">
              <img src={post.askedBy.photo} alt="user" className="poster-img" />
              <strong>{post.askedBy.name}</strong>
              <span>{new Date(post.createdAt).toLocaleString()}</span>
            </div>
            <p>{post.question}</p>
            {user.primaryEmailAddress.emailAddress === "snehal.admin@email.com" && (
              <button onClick={() => handleDelete(post._id)} className="delete-btn">Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;
