import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import {Link} from 'react-router-dom'

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">
          There are no posts yet. Start creating one!
        </h1>
      </div>
    );

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link to="/new">Create New Post</Link>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
