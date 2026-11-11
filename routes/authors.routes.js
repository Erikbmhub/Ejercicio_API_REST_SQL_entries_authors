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

// Importamos las validaciones de authors.
const {
  createAuthorValidator,
  updateAuthorValidator,
  deleteAuthorValidator,
} = require("../middlewares/authors.validators");

// Importamos el middleware que comprueba los errores de validación.
const validate = require("../middlewares/validate");

// Obtener todos los autores o buscar uno por email.
// http://localhost:3000/api/authors
router.get("/", getAllAuthorsController);

// Crear un nuevo autor.
// http://localhost:3000/api/authors
router.post("/", createAuthorValidator, validate, createAuthorController);

// Actualizar un autor mediante su email.
// http://localhost:3000/api/authors
router.put("/", updateAuthorValidator, validate, updateAuthorController);

// Eliminar un autor mediante su email.
// http://localhost:3000/api/authors
router.delete("/", deleteAuthorValidator, validate, deleteAuthorController);

// Exportamos el router para utilizarlo en app.js.
module.exports = router;
