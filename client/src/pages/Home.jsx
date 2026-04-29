import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/posts")
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading posts...</p>;
  }

  return (
    <div className="container">
      <h2>All Posts</h2>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map(post => (
          <div className="card" key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.author?.username}</small>
          </div>
        ))
      )}
    </div>
  );
}