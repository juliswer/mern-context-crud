import toast from 'react-hot-toast';

function PostCard({ post }) {
  return (
    <div className="bg-zinc-800 text-white rounded-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <p>{post.title}</p>
          <button className="bg-red-600 text-sm px-2 py-1 rounded-sm" onClick={() => toast.success('hello world')}>
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default PostCard;
