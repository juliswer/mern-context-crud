import { createContext, useState, useContext, useEffect } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts";

export const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await getPostsRequest();
    setPosts(data);
  };

  const createPost = async (post) => {
    try {
      const { data } = await createPostRequest(post);
      setPosts([...posts, data.post]);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    await deletePostRequest(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id);
    return res;
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);
    setPosts(posts.filter((p) => p._id !== id).concat(res.post));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
