const { query } = require("../config/db");
const Autores = require("../models/autores.model");

const getAll = async (req, res) => {
  // Implement your logic here
  const autores = await Autores.selectAll();

  res.json({
    results: autores,
  });
};

const getById = async (req, res) => {
  const { autorId } = req.params;
  const result = await Autores.selectById(autorId);
  res.json({
    result
  })

};

const getPostsByAutorId = async (req, res) =>{
  const {autorId} = req.params
  const posts = await Autores.selectPostsByAutorId(autorId)

  res.json({
    posts
  })
}


const create = async (req, res) => {
  const { nombre, email, imagen } = req.body;
  const result = await Autores.insert(nombre, email, imagen);
  const autor = await Autores.selectById(result.insertId)
  res.json({
    autor,
  });
};

module.exports = { getAll, getById, getPostsByAutorId, create };
