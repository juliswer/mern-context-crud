import { createContext, useState } from "react";

export const context = createContext();

export const PostContainer = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <context.Provider
      value={{
        setPosts,
        posts,
      }}
    >
      {children}
    </context.Provider>
  );
};
