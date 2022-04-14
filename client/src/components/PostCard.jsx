function PostCard({ post }) {
  return (
    <div className="bg-zinc-800 text-white rounded-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <h3>{post.title}</h3>
        <h3>{post.description}</h3>
      </div>
    </div>
  );
}

export default PostCard;
