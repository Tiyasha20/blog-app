import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null);

  // fetch my posts
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get("/posts/my")
      .then(res => setPosts(res.data))
      .catch(() => alert("Login required"));
  };

  // create post
  const handleCreate = async () => {
    try {
      await axios.post("/posts", form);
      alert("Post created");
      setForm({ title: "", content: "" });
      fetchPosts(); // refresh list
    } catch {
      alert("Error creating post");
    }
  };
  const handleDelete = async (id) => {
  try {
    await axios.delete(`/posts/${id}`);
    alert("Deleted");
    fetchPosts(); // refresh
  } catch {
    alert("Error deleting");
  }
  };
  const handleEdit = (post) => {
  setForm({ title: post.title, content: post.content });
  setEditingId(post._id);
  };
  const handleUpdate = async () => {
  try {
    await axios.put(`/posts/${editingId}`, form);
    alert("Updated");
    setEditingId(null);
    setForm({ title: "", content: "" });
    fetchPosts();
  } catch {
    alert("Error updating");
  }
  };

  return (
    <div className="container">
      <h2>My Posts</h2>

      {/* CREATE FORM */}
      <input
        placeholder="Title"
        value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Content"
        value={form.content}
        onChange={e => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={editingId ? handleUpdate : handleCreate}>
      {editingId ? "Update Post" : "Create Post"}</button>

      {/* POSTS */}
      {posts.map(post => (
        <div className="card" key={post._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
          <button onClick={() => handleEdit(post)}>Edit</button>
        </div>
      ))}
    </div>
  );
}