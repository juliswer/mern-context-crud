import express from "express";
import fileUpload from "express-fileupload";
import postRoutes from "./routes/posts.routes.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// MIDDLEWARE
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(cors());

// ROUTES
app.use(postRoutes);

console.log(__dirname)
app.use(express.static(join(__dirname, "../client/build")));

export default app;
