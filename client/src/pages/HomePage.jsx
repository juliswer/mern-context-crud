import { usePosts } from "../context/postContext";

export function HomePage() {
  const {posts} = usePosts();
  console.log(posts);

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold">Home Page</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </div>
  );
}
