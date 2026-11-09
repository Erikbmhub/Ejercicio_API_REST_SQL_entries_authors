// Importamos el pool para ejecutar consultas en PostgreSQL.
const pool = require("../config/db_pgsql");

// Importamos las consultas SQL que vamos a utilizar.
const {
  GET_ALL_ENTRIES,
  GET_ENTRIES_BY_EMAIL,
  UPDATE_ENTRY,
  CREATE_ENTRY,
  DELETE_ENTRY,
} = require("../queries/entries.queries");

// Función para obtener todas las entries.
const getAllEntries = async () => {
  const result = await pool.query(GET_ALL_ENTRIES);

  return result.rows;
};
// Función para obtener las entries de un autor mediante su email.
const getEntriesByEmail = async (email) => {
  const result = await pool.query(GET_ENTRIES_BY_EMAIL, [email]);

  return result.rows;
};

// Función para modificar una entry mediante su título.
const updateEntry = async (content, date, id_author, category, title) => {
  const result = await pool.query(UPDATE_ENTRY, [
    content,
    date,
    id_author,
    category,
    title,
  ]);

  return result.rowCount;
};

// Función para crear una nueva entry.
const createEntry = async (title, content, date, id_author, category) => {
  const result = await pool.query(CREATE_ENTRY, [
    title,
    content,
    date,
    id_author,
    category,
  ]);

  return result.rowCount;
};

// Función para eliminar una entry mediante su título.
const deleteEntry = async (title) => {
  const result = await pool.query(DELETE_ENTRY, [title]);

  return result.rowCount;
};

// Exportamos la función para que pueda utilizarse desde el controlador.
module.exports = {
  getAllEntries,
  getEntriesByEmail,
  updateEntry,
  createEntry,
  deleteEntry,
};