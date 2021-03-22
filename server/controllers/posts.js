import Post from "../models/Post.js"

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.status(201).json({posts})
  }
  catch(error) {
    res.status(404).json({error})
  }
}

export const createPost = (req,res,next) => {
  res.send('Create post')
}