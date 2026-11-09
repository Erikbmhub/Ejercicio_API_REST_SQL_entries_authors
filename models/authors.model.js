// Importamos el pool para ejecutar consultas en PostgreSQL.
const pool = require("../config/db_pgsql");

// Importamos las consultas SQL que vamos a utilizar.
const {
  GET_ALL_AUTHORS,
  GET_AUTHOR_BY_EMAIL,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
} = require("../queries/authors.queries");

// Función para obtener todos los autores.
const getAllAuthors = async () => {
  const result = await pool.query(GET_ALL_AUTHORS);

  return result.rows;
};

// Función para obtener un autor mediante su email.
const getAuthorByEmail = async (email) => {
  const result = await pool.query(GET_AUTHOR_BY_EMAIL, [email]);

  return result.rows;
};

// Función para crear un nuevo autor.
const createAuthor = async (name, surname, email, image) => {
  const result = await pool.query(CREATE_AUTHOR, [
    name,
    surname,
    email,
    image,
  ]);

  return result.rowCount;
};

// Función para actualizar un autor mediante su email.
const updateAuthor = async (name, surname, image, email) => {
  const result = await pool.query(UPDATE_AUTHOR, [
    name,
    surname,
    image,
    email,
  ]);

  return result.rowCount;
};

// Función para eliminar un autor mediante su email.
const deleteAuthor = async (email) => {
  const result = await pool.query(DELETE_AUTHOR, [email]);

  return result.rowCount;
};

// Exportamos las funciones para que puedan utilizarse desde el controlador.
module.exports = {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};