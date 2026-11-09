// Consulta para obtener todas las entries.
const GET_ALL_ENTRIES = `
  SELECT
  e.title,
  e.content,
  e.date,
  e.category,
  a.name,
  a.surname,
  a.email AS email_author,
  a.image
FROM entries AS e
INNER JOIN authors AS a
  ON e.id_author = a.id_author;
`;

// Consulta para obtener las entries de un autor mediante su email.
const GET_ENTRIES_BY_EMAIL = `
  SELECT
    e.title,
    e.content,
    e.date,
    e.category,
    a.name,
    a.surname,
    a.email AS email_author,
    a.image
  FROM entries AS e
  INNER JOIN authors AS a
    ON e.id_author = a.id_author
  WHERE a.email = $1
  ORDER BY e.title;
`;

// Consulta para modificar una entry mediante su título.
const UPDATE_ENTRY = `
  UPDATE entries
  SET
    content = $1,
    date = $2,
    id_author = $3,
    category = $4
  WHERE title = $5;
`;

// Consulta para crear una nueva entry.
const CREATE_ENTRY = `
  INSERT INTO entries (
    title,
    content,
    date,
    id_author,
    category
  )
  VALUES ($1, $2, $3, $4, $5);
`;

// Consulta para eliminar una entry mediante su título.
const DELETE_ENTRY = `
  DELETE FROM entries
  WHERE title = $1;
`;

// Exportamos las consultas SQL.
module.exports = {
  GET_ALL_ENTRIES,
  GET_ENTRIES_BY_EMAIL,
  UPDATE_ENTRY,
  CREATE_ENTRY,
  DELETE_ENTRY,
};