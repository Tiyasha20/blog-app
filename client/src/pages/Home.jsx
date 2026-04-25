import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container"> 
      <h2>All Posts</h2>

      {posts.map(post => (
        <div className="card" key={post._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By: {post.author?.username}</small>
        </div>
      ))}
    </div>
  );
}