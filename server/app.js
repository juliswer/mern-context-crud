import express from "express";
import fileUpload from 'express-fileupload';
import postRoutes from "./routes/posts.routes.js";
import cors from 'cors'

const app = express();

// MIDDLEWARE
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(cors())

// ROUTES
app.use(postRoutes);

export default app;