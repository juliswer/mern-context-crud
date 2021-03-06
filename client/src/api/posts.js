import axios from "axios";
// const PRODUCTION_URL = process.env.REACT_APP_PRODUCTION_URL;

// NOTE: IF YOU ARE DEPLOYING THIS APP, YOU MUST MAKE THE PRODUCTION_URL IN THE .ENV FILE. THEN YOU PASS IT TO THE AXIOS FUNCTION.

export const getPostsRequest = async () =>
  await axios.get("http://localhost:4000/posts");

export const createPostRequest = async (post) => {
  const form = new FormData();

  for (let key in post) {
    form.append(key, post[key]);
  }

  return await axios.post("http://localhost:4000/posts", form, {
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletePostRequest = async (id) => {
  await axios.delete(`http://localhost:4000/posts/${id}`);
};

export const getPostRequest = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/posts/${id}`);
  return data;
};

export const updatePostRequest = async (id, post) => {
  const { data } = await axios.put(`http://localhost:4000/posts/${id}`, post);
  return data;
};
