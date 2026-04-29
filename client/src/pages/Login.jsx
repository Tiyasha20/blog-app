import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post("/auth/login", form, {
      withCredentials: true   // 🔥 VERY IMPORTANT
     });
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
        console.log(err.response);  
      alert("Login failed");
    }
  };

  return (
    <div className="auth-wrapper">
    <div className="auth-container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}