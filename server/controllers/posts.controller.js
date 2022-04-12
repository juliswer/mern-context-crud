import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).send(posts);
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    res.status(200).send(post);
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const postPost = async (req, res) => {
  const { title, description } = req.body;

  try {
    const post = new Post({ title, description });
    await post.save();
    console.log(post);
    res.status(200).json({
      message: "Post saved successfully",
      post,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const updatePost = async (req, res) => {
  const updatedPost = req.body;
  const { id } = req.params;

  try {
    const post = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    res.status(200).json({
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    res.status(200).json({
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};
