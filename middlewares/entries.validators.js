// Importamos body y param de express-validator.
const { body } = require("express-validator");

// Validaciones para crear una entry.
const createEntryValidator = [
  // Comprobamos que el título sea obligatorio.
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("El título es obligatorio.")
    .isString()
    .withMessage("El título debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El título no puede estar vacío."),
  // Comprobamos que el contenido sea obligatorio.
  body("content")
    .exists({ checkFalsy: true })
    .withMessage("El contenido es obligatorio.")
    .isString()
    .withMessage("El contenido debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El contenido no puede estar vacío."),
  // Comprobamos que la fecha sea obligatoria y tenga un formato válido.
  body("date")
    .exists({ checkFalsy: true })
    .withMessage("La fecha es obligatoria.")
    .isISO8601()
    .withMessage("La fecha debe tener un formato válido (AAAA-MM-DD)."),
  // Comprobamos que la categoría sea obligatoria y contenga texto.
  body("category")
    .exists({ checkFalsy: true })
    .withMessage("La categoría es obligatoria.")
    .isString()
    .withMessage("La categoría debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("La categoría no puede estar vacía."),
  // Comprobamos que el identificador del autor sea obligatorio y válido.
  body("id_author")
    .exists({ checkFalsy: true })
    .withMessage("El identificador del autor es obligatorio.")
    .isInt({ min: 1 })
    .withMessage(
      "El identificador del autor debe ser un número entero mayor que cero.",
    ),
];
// Validaciones para modificar una entry.
const updateEntryValidator = [
  // Comprobamos que el título de la entry sea obligatorio.
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("El título es obligatorio.")
    .isString()
    .withMessage("El título debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El título no puede estar vacío."),
  // Comprobamos que el contenido sea obligatorio.
  body("content")
    .exists({ checkFalsy: true })
    .withMessage("El contenido es obligatorio.")
    .isString()
    .withMessage("El contenido debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El contenido no puede estar vacío."),
  // Comprobamos que la fecha sea obligatoria y tenga un formato válido.
  body("date")
    .exists({ checkFalsy: true })
    .withMessage("La fecha es obligatoria.")
    .isISO8601()
    .withMessage("La fecha debe tener un formato válido (AAAA-MM-DD)."),
  // Comprobamos que el identificador del autor sea obligatorio y válido.
  body("id_author")
    .exists({ checkFalsy: true })
    .withMessage("El identificador del autor es obligatorio.")
    .isInt({ min: 1 })
    .withMessage(
      "El identificador del autor debe ser un número entero mayor que cero.",
    ),
  // Comprobamos que la categoría sea obligatoria y contenga texto.
  body("category")
    .exists({ checkFalsy: true })
    .withMessage("La categoría es obligatoria.")
    .isString()
    .withMessage("La categoría debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("La categoría no puede estar vacía."),
];

// Validaciones para eliminar una entry.
const deleteEntryValidator = [
  // Comprobamos que el título sea obligatorio para eliminar la entry.
  body("title")
    .exists({ checkFalsy: true })
    .withMessage("El título es obligatorio.")
    .isString()
    .withMessage("El título debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El título no puede estar vacío."),
];
// Exportamos las validaciones para crear una entry.
module.exports = {
  createEntryValidator,
  updateEntryValidator,
  deleteEntryValidator,
};
