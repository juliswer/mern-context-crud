import toast from "react-hot-toast";
import {usePosts} from '../context/postContext'

function PostCard({ post }) {

  const {deletePost} = usePosts();

  const handleDelete = async (id) => {
    toast((t) => (
      <div>
        <p className="text-white">Are you sure you want to delete this post? <strong>{id}</strong></p>
        <div>
          <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2" onClick={() => deletePost(id)}>Delete</button>
          <button className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2" onClick={() => toast.dismiss(t.id)}>
            Cancel
          </button>
        </div>
      </div>
    ), {
      style: {
        background: '#202020'
      }
    });
  };

  return (
    <div className="bg-zinc-800 text-white rounded-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <p>{post.title}</p>
          <button
            className="bg-red-600 text-sm px-2 py-1 rounded-sm"
            onClick={() => handleDelete(post._id)}
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default PostCard;
