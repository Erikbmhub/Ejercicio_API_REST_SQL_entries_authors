// Importamos Pool desde el paquete pg.
const { Pool } = require("pg");

// Cargamos las variables del archivo .env.
require("dotenv").config();

// Creamos el conjunto de conexiones a PostgreSQL.
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

// Exportamos el Pool para utilizarlo desde otros archivos.
module.exports = pool;
