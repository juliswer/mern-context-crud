import { createContext, useState, useContext, useEffect } from "react";
import { getPostsRequest, createPostRequest, deletePostRequest } from "../api/posts";

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
    const res = await createPostRequest(post);
    setPosts([...posts, res.post]);
  }

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    console.log(res)
    window.reload();
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        createPost,
        deletePost
      }}
    >
      {children}
    </postContext.Provider>
  );
};
