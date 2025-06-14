const db = require("../config/db");

//SELECT * FROM autores
const selectAll = async () => {
  const [results] = await db.query("SELECT * FROM autores");

  return results;
};

module.exports = {selectAll};
