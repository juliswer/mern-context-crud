import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();

  res.send(posts);
};

export const getSinglePost = (req, res) => {
  res.send("getting a post");
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

export const deletePost = (req, res) => {
  res.send("deleting a post");
};
