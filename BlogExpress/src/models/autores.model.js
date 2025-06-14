const db = require("../config/db");

//SELECT * FROM autores
const selectAll = async () => {
  const [results] = await db.query("SELECT * FROM autores");

  return results;
};

const selectById = async (autorId) => {
  const [autor] = await db.query("SELECT * FROM autores WHERE id = ?", [
    autorId,
  ]);
  return autor[0];
};

const selectPostsByAutorId = async (autorId) => {
  const [results] = await db.query("SELECT * FROM posts WHERE autor_id = ?", [
    autorId,
  ]);
  return results;
};

const insert = async (nombre, email, imagen) => {
  db.query("INSERT INTO autores (nombre, email, imagen) VALUES (?,?,?)", [
    nombre,
    email,
    imagen,
  ]);
};

module.exports = { selectAll, selectById, selectPostsByAutorId, insert };
