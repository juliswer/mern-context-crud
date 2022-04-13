import { createContext, useState, useContext, useEffect } from "react";
import {getPostsRequest} from '../api/posts';

export const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const {data} = await getPostsRequest();
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
