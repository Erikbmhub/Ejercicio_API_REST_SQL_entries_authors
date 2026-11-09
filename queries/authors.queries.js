// Consulta para obtener todos los autores.
const GET_ALL_AUTHORS = `
  SELECT * FROM authors;
`;
// Consulta para obtener un autor mediante su email.
const GET_AUTHOR_BY_EMAIL = `
  SELECT *
  FROM authors
  WHERE email = $1;
`;

// Consulta para crear un nuevo autor.
const CREATE_AUTHOR = `
  INSERT INTO authors (
    name,
    surname,
    email,
    image
  )
  VALUES ($1, $2, $3, $4);
`;

// Consulta para actualizar un autor mediante su email.
const UPDATE_AUTHOR = `
  UPDATE authors
  SET
    name = $1,
    surname = $2,
    image = $3
  WHERE email = $4;
`;
// Consulta para eliminar un autor mediante su email.
const DELETE_AUTHOR = `
  DELETE FROM authors
  WHERE email = $1;
`;

// Exportamos las consultas SQL.
module.exports = {
  GET_ALL_AUTHORS,
  GET_AUTHOR_BY_EMAIL,
  CREATE_AUTHOR,
  UPDATE_AUTHOR,
  DELETE_AUTHOR,
};