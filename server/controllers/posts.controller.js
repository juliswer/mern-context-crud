import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

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
    if (!post) return res.sendStatus(400);
    res.status(200).send(post);
  } catch (error) {
    res.status(404).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const postPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      console.log(result);
    }
    const post = new Post({ title, description, image });
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
    if (!post) return res.status(400).json({ message: "Post not found" });
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
    if (!deletedPost)
      return res.status(400).json({ message: "Post not found" });
    if (deletedPost.image.public_id) {
      await deleteImage(deletedPost.image.public_id);
    }
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
