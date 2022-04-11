export const getPosts = (req, res) => {
  res.send([]);
};

export const getSinglePost = (req, res) => {
  res.send("getting a post");
};

export const postPost = (req, res) => {
  res.send("new post created");
};

export const updatePost = (req, res) => {
  res.send("updating a post");
};

export const deletePost = (req, res) => {
  res.send("deleting a post");
};
