const Post = require("../models/post.model");

// CREATE POST
async function createPost(req, res) {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      author: req.user.id   // from JWT middleware
    });

    res.status(201).json(post);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET ALL POSTS
async function getAllPosts(req, res) {
  try {
    const posts = await Post.find().populate("author", "username email");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

// GET MY POSTS
async function getMyPosts(req, res) {
  try {
    const posts = await Post.find({ author: req.user.id });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
// UPDATE POST
async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // check ownership
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    await post.save();

    res.json(post);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
// DELETE POST
async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // check ownership
    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not allowed" });
    }

    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getMyPosts,
  updatePost,
  deletePost
};