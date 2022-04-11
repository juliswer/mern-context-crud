import express from "express";
const app = express();
import postRoutes from './routes/posts.routes.js';

app.use(postRoutes)

app.listen(4000);
console.log("Server is running on port", 4000);