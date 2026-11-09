// Importamos Express.
const express = require("express");

// Creamos un router para gestionar las rutas de authors.
const router = express.Router();

// Importamos los controladores de authors.
const {
  getAllAuthorsController,
  createAuthorController,
  updateAuthorController,
  deleteAuthorController,
} = require("../controllers/authors.controller");

// Obtener todos los autores o buscar uno por email.
// http://localhost:3000/api/authors
router.get("/", getAllAuthorsController);

// Crear un nuevo autor.
// http://localhost:3000/api/authors
router.post("/", createAuthorController);

// Actualizar un autor mediante su email.
// http://localhost:3000/api/authors
router.put("/", updateAuthorController);

// Eliminar un autor mediante su email.
// http://localhost:3000/api/authors
router.delete("/", deleteAuthorController);

// Exportamos el router para utilizarlo en app.js.
module.exports = router;