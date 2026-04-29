import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import Register from "./pages/Register";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
   const location = useLocation();
   const [token, setToken] = useState(localStorage.getItem("token"));
  const [darkMode, setDarkMode] = useState(false);
  const handleLogout = () => {
  localStorage.removeItem("token");
  setToken(null);          // 🔥 update state
  navigate("/login");
  };
   useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
  document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);
  return (
    
       <div className={darkMode ? "dark" : ""}>

      {/* Toggle Button */}
        <div className="top-bar">
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  </div>
  <div className="navbar">
  <h2 className="logo">Blog App</h2>

  <div className="nav-buttons">

    {/* Show Login/Register only if NOT logged in AND not on login/register page */}
    {!token &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" && (
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </>
    )}

    {/* Show Logout if logged in */}
    {token && (
      <button onClick={handleLogout}>Logout</button>
    )}

  </div>
</div>



      
        <Routes>
          {/* Home protected */}
  <Route 
    path="/" 
    element={token ? <Home /> : <Navigate to="/login" />} 
  />

  {/* Login blocked if already logged in */}
  <Route 
    path="/login" 
    element={!token ? <Login /> : <Navigate to="/dashboard" />} 
  />

  {/* Register blocked if already logged in */}
  <Route 
    path="/register" 
    element={!token ? <Register /> : <Navigate to="/dashboard" />} 
  />

  {/* Dashboard protected */}
  <Route 
    path="/dashboard" 
    element={token ? <Dashboard /> : <Navigate to="/login" />} 
  />
        </Routes>
      

    </div>
    

  );
}

export default App;