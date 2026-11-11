// Importamos Morgan.
const morgan = require("morgan");

// TOKEN :host
// Obtiene el nombre del servidor.
morgan.token("host", (req, res) => {
  return req.hostname;
});

// TOKEN :body
// Muestra los datos enviados en el cuerpo de la petición.
morgan.token("body", (req, res) => {
  // Comprobamos si existe un body y si contiene datos.
  if (!req.body || Object.keys(req.body).length === 0) {
    return "";
  }

  // Convertimos el objeto JavaScript en texto JSON.
  return JSON.stringify(req.body);
});

// TOKEN :param
// Obtiene un parámetro dinámico de la ruta.
morgan.token("param", (req, res, param) => {
  return req.params[param];
});

// TOKEN :clean-url
// Oculta el valor de API_KEY si aparece en la URL.
morgan.token("clean-url", (req, res) => {
  return req.originalUrl.replace(/(api_key|apikey)=[^&]*/gi, "$1=***");
});

// Exportamos Morgan configurado.
module.exports = morgan;
