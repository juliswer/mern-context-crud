import { useContext } from "react";
import { context } from "../context/postContext";

export function HomePage() {
  const appContext = useContext(context);
  console.log(appContext);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
