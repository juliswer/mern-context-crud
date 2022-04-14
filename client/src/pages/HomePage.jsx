import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { AiOutlineLink } from "react-icons/ai";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">
          There are no posts yet.{" "}
          <Link to="/new" className="text-blue-500 flex">
            Start creating one!
            <AiOutlineLink className="ml-2" />
          </Link>
        </h1>
      </div>
    );

  return (
    <div className="text-white">
      <header className="flex justify-between py-4">
        <h1 className="text-3xl font-bold">
          Posts ({posts.length} {posts.length === 1 ? "Post" : "Posts"})
        </h1>
        <Link
          to="/new"
          className="px-2 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl flex items-center"
        >
          Create New Post <IoIosAddCircleOutline className="ml-1" />
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
