const { getAll } = require('../../controllers/autores.controller');

const router = require('express').Router();

// Define your routes here
router.get("/", getAll)

module.exports = router;