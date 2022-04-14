import express from "express";
import fileUpload from 'express-fileupload';
import postRoutes from "./routes/posts.routes.js";
import cors from 'cors'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// MIDDLEWARE
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
app.use(cors())

app.use(express.static(path.join(__dirname, '../client/build')));

// ROUTES
app.use(postRoutes);

export default app;