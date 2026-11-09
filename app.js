// Importamos Express.
const express = require("express");

// Importamos Morgan para registrar las peticiones HTTP.
const morgan = require("morgan");

// Importamos las rutas de entries.
const entriesRoutes = require("./routes/entries.routes");

// Importamos las rutas de authors.
const authorsRoutes = require("./routes/authors.routes");

// Creamos la aplicación Express.
const app = express();

// Permitimos que Express pueda recibir datos en formato JSON.
app.use(express.json());

// Configuramos Morgan para registrar las peticiones HTTP.
app.use(morgan("dev"));

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