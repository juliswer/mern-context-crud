import express from "express";
import postRoutes from "./routes/posts.routes.js";

const app = express();

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.use(postRoutes);

export default app;