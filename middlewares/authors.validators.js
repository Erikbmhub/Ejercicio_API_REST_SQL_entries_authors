// Importamos body y param de express-validator.
const { body } = require("express-validator");

// Validaciones para crear un autor.
const createAuthorValidator = [
  // Comprobamos que el nombre sea obligatorio.
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("El nombre es obligatorio.")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede estar vacío."),
  // Comprobamos que los apellidos sean obligatorios.
  body("surname")
    .exists({ checkFalsy: true })
    .withMessage("Los apellidos son obligatorios.")
    .isString()
    .withMessage("Los apellidos deben ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("Los apellidos no pueden estar vacíos."),
  // Comprobamos que el email sea obligatorio y tenga un formato válido.
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("El email es obligatorio.")
    .isEmail()
    .withMessage("Debes introducir una dirección de email válida.")
    .normalizeEmail(),
  // Comprobamos que la imagen, si se proporciona, sea una URL válida.
  body("image")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("La imagen debe contener una URL válida."),
];
// Validaciones para actualizar un autor.
const updateAuthorValidator = [
  // Comprobamos que el nombre sea obligatorio.
  body("name")
    .exists({ checkFalsy: true })
    .withMessage("El nombre es obligatorio.")
    .isString()
    .withMessage("El nombre debe ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede estar vacío."),
  // Comprobamos que los apellidos sean obligatorios.
  body("surname")
    .exists({ checkFalsy: true })
    .withMessage("Los apellidos son obligatorios.")
    .isString()
    .withMessage("Los apellidos deben ser un texto.")
    .trim()
    .notEmpty()
    .withMessage("Los apellidos no pueden estar vacíos."),
  // Comprobamos que el email sea obligatorio y tenga un formato válido.
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("El email es obligatorio.")
    .isEmail()
    .withMessage("Debes introducir una dirección de email válida.")
    .normalizeEmail(),
  // Comprobamos que la imagen, si se proporciona, sea una URL válida.
  body("image")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("La imagen debe contener una URL válida."),
];
// Validaciones para eliminar un autor.
const deleteAuthorValidator = [
  // Comprobamos que el email sea obligatorio y tenga un formato válido.
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("El email es obligatorio.")
    .isEmail()
    .withMessage("Debes introducir una dirección de email válida.")
    .normalizeEmail(),
];
// Exportamos las validaciones para gestionar los autores.
module.exports = {
  createAuthorValidator,
  updateAuthorValidator,
  deleteAuthorValidator,
};
