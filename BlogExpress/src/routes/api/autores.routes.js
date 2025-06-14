const {
  getAll,
  create,
  getById,
  getPostsByAutorId,
} = require("../../controllers/autores.controller");

const router = require("express").Router();

// Define your routes here
router.get("/", getAll);
router.get("/:autorId", getById);
router.get("/:autorId/posts", getPostsByAutorId);
router.post("/", create);

module.exports = router;
