import PostMessage from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
