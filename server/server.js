const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const connectDB = require("./config/db");

const app = express();

// connect DB
connectDB();

// middlewares
app.use(express.json());   // ✅ FIRST
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());

// routes (AFTER middleware)
app.use("/api/auth", authRoutes);   // ✅ NOW CORRECT

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const authMiddleware = require("./middleware/auth.middleware");

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized 🔥",
    user: req.user
  });
});
const postRoutes = require("./routes/post.routes");

app.use("/api/posts", postRoutes);