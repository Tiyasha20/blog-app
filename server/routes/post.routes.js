const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  createPost,
  getAllPosts,
  getMyPosts,
  updatePost,
  deletePost
} = require("../controllers/post.controller");

// protected routes
router.post("/", authMiddleware, createPost);
router.get("/my", authMiddleware, getMyPosts);
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);

// public route
router.get("/", getAllPosts);

module.exports = router;