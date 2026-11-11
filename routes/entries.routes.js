// Importamos Express.
const express = require("express");

// Creamos un router para gestionar las rutas de entries.
const router = express.Router();

// Importamos los controladores de entries.
const {
  getAllEntriesController,
  updateEntryController,
  createEntryController,
  deleteEntryController,
} = require("../controllers/entries.controller");

// Importamos las validaciones de entries.
const {
  createEntryValidator,
  updateEntryValidator,
  deleteEntryValidator,
} = require("../middlewares/entries.validators");

// Importamos el middleware que comprueba los errores de validación.
const validate = require("../middlewares/validate");

// Obtener todas las entries.
//http://localhost:3000/api/entries
router.get("/", getAllEntriesController);

// Modificar una entry mediante su título.
//http://localhost:3000/api/entries
router.put("/", updateEntryValidator, validate, updateEntryController);

// Crear una nueva entry.
// http://localhost:3000/api/entries
router.post("/", createEntryValidator, validate, createEntryController);

// Eliminar una entry mediante su título.
// http://localhost:3000/api/entries
router.delete("/", deleteEntryValidator, validate, deleteEntryController);

// Exportamos el router para utilizarlo en app.js.
module.exports = router;
