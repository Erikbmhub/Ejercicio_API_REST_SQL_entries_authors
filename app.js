// Importamos Express.
const express = require("express");

// Importamos Morgan personalizado con nuestros tokens.
const morgan = require("./middlewares/morgan.middleware");

// Importamos las rutas de entries.
const entriesRoutes = require("./routes/entries.routes");

// Importamos las rutas de authors.
const authorsRoutes = require("./routes/authors.routes");

// Importamos Helmet para proteger las cabeceras HTTP.
const helmet = require("helmet");

// Creamos la aplicación Express.
const app = express();

// Activamos Helmet para configurar las cabeceras HTTP de seguridad.
app.use(helmet());

// Permitimos que Express pueda recibir datos en formato JSON.
app.use(express.json());

// Registramos las peticiones HTTP con nuestro formato personalizado.
app.use(morgan(":host :method :clean-url :status :response-time ms :body"));

// Conectamos las rutas de entries con el prefijo /api/entries.
app.use("/api/entries", entriesRoutes);

// Conectamos las rutas de authors con el prefijo /api/authors.
app.use("/api/authors", authorsRoutes);

// Definimos el puerto en el que escuchará el servidor.
const port = process.env.PORT || 3000;

// Ponemos el servidor a escuchar peticiones.
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Exportamos app para que se puedan ejecutar los tests correctamente.
module.exports = app;
