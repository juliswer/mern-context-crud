import { useEffect, useState } from "react";
import { usePosts } from "../context/postContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

export function PostForm() {
  const { createPost, getPost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPost(params.id);
        setPost(res);
      }
    })();
  }, [getPost, params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black rounded-xl">
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={async (values, actions) => {
            await createPost(values);
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400"
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="title"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />
              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400"
              >
                Description
              </label>
              <Field
                name="description"
                component="textarea"
                placeholder="description"
                rows={3}
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                component="p"
                name="description"
                className="text-red-400 text-sm"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
              >
                {params.id ? "Update" : "Save"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
