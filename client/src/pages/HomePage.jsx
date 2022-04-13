import { usePosts } from "../context/postContext";

export function HomePage() {
  const context = usePosts();
  console.log(context);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
