import { useEffect, useState } from "react";
import { usePosts } from "../context/postContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as Yup from "yup";

export function PostForm() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: null,
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
      <div className="bg-zinc-800 p-10 shadow-md shadow-black rounded-2xl">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-2xl">{params.id ? "Update" : "New"} Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back Home
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false);
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
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
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
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
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-2"
              />
              <ErrorMessage
                component="p"
                name="description"
                className="text-red-400 text-sm"
              />
              <label
                htmlFor="image"
                className="text-sm block font-bold text-gray-400"
              >
                Select File
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
