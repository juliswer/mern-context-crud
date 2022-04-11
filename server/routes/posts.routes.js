import { Router } from "express";
const router = Router();
import {
  getPosts,
  getSinglePost,
  postPost,
  updatePost,
  deletePost,
} from "../controllers/posts.controller.js";

router.get("/posts", getPosts);

router.get("/posts/:id", getSinglePost);

router.post("/posts", postPost);

router.put("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

export default router;
