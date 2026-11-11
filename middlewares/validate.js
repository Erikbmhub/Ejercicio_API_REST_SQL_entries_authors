
// Importamos validationResult de express-validator.
const { validationResult } = require("express-validator");

// Middleware para comprobar si existen errores de validación.
const validate = (req, res, next) => {
  // Recogemos los errores de validación de la petición.
  const errors = validationResult(req);

  // Si existen errores de validación, devolvemos una respuesta 400.
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  // Si no existen errores, continuamos con el siguiente middleware o controlador.
  next();
};

// Exportamos el middleware para poder utilizarlo en las rutas.
module.exports = validate;
