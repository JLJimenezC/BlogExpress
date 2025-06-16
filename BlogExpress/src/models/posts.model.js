const db = require("../config/db");

//SELECT * FROM posts
const selectAll = async () => {
  const [result] = await db.query("SELECT * FROM posts");
  return result;
};

const selectById = async(postId) =>{
  const [result] = await db.query("SELECT * FROM posts WHERE id= ?", [postId])
  return result[0]
}


const insert = async (titulo, descripcion, categoria, autor_id) => {
  const [result] = await db.query(
    "INSERT INTO posts (titulo, descripcion, categoria, autor_id) VALUES (?,?,?,?)",
    [titulo, descripcion, categoria, autor_id]
  );
  return result;
};



module.exports = { selectAll, selectById, insert };
