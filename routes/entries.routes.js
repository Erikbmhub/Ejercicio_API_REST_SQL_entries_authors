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

// Obtener todas las entries.
//http://localhost:3000/api/entries
router.get("/", getAllEntriesController);

// Modificar una entry mediante su título.
//http://localhost:3000/api/entries
router.put("/", updateEntryController);

// Crear una nueva entry.
// http://localhost:3000/api/entries
router.post("/", createEntryController);

// Eliminar una entry mediante su título.
// http://localhost:3000/api/entries
router.delete("/", deleteEntryController);

// Exportamos el router para utilizarlo en app.js.
module.exports = router;
