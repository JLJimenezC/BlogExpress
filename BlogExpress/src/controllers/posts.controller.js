const Posts = require("../models/posts.model");

const getAll = async (req, res) => {
  const posts = await Posts.selectAll();
  res.json({
    results: posts,
  });
};

const create = async (req,res) =>{
    const { titulo, descripcion, categoria, autor_id } = req.body
    const result = await Posts.insert(titulo, descripcion, categoria, autor_id)
    const post = await Posts.selectById(result.insertId)
    res.json({
        post: post 
    })
}

const getById = async (req, res) =>{
    const {postId} = req.params
    const post = await Posts.selectById(postId)
    res.json({
        post:post
    })
}

module.exports = { getAll, create, getById };
