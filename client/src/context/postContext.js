import { createContext, useState, useContext } from "react";

export const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <postContext.Provider
      value={{
        setPosts,
        posts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
