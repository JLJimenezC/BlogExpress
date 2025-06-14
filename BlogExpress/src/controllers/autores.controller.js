const { query } = require("../config/db");
const Autores = require("../models/autores.model");

const getAll = async (req, res) => {
  // Implement your logic here
  const autores = await Autores.selectAll()

  res.json({
    results: autores,
  });
};

module.exports = { getAll };
