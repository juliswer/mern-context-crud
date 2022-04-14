import {usePosts} from '../context/postContext';
import { Formik, Form, Field } from "formik";

export function PostForm() {

  const {createPost} = usePosts();

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values, actions) => {
          createPost(values)
        }}
      >
        {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name="title" placeholder="title" />
            <Field name="description" placeholder="description" />
            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
