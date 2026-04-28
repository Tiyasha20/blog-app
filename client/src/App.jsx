import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; 
import Register from "./pages/Register";

import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
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



      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
    

  );
}

export default App;