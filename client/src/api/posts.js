import axios from "axios";
// const PRODUCTION_URL = process.env.REACT_APP_PRODUCTION_URL;

// NOTE: IF YOU ARE DEPLOYING THIS APP, YOU MUST MAKE THE PRODUCTION_URL IN THE .ENV FILE. THEN YOU PASS IT TO THE AXIOS FUNCTION.

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/posts");
