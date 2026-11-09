// Importamos las funciones del modelo de authors.
const {
  getAllAuthors,
  getAuthorByEmail,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../models/authors.model");
const { deleteEntryController } = require("./entries.controller");

// Función para obtener todos los autores o buscar uno por email.
const getAllAuthorsController = async (req, res) => {
  const email = req.query.email;

  try {
    let authors;

    if (email) {
      authors = await getAuthorByEmail(email);
    } else {
      authors = await getAllAuthors();
    }

    res.status(200).json(authors);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener los autores",
    });
  }
};

// Función para crear un nuevo autor.
const createAuthorController = async (req, res) => {
  try {
    const { name, surname, email, image } = req.body;

    await createAuthor(name, surname, email, image);

    res.status(201).json({
      message: `usuario creado: ${email}`,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al crear el usuario",
    });
  }
};

// Función para actualizar un autor mediante su email.
const updateAuthorController = async (req, res) => {
  try {
    const { name, surname, image, email } = req.body;

    const result = await updateAuthor(name, surname, image, email);

    if (result === 0) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.status(200).json({
      message: `usuario actualizado: ${email}`,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al actualizar el usuario",
    });
  }
};

// Función para eliminar un autor mediante su email.
const deleteAuthorController = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await deleteAuthor(email);

    if (result === 0) {
      return res.status(404).json({
        message: "Autor no encontrado",
      });
    }

    res.status(200).json({
      message: `Se ha borrado ${email}`,
    });

  } catch (error) {
    console.error(error);

    // Comprobamos si el autor tiene entries asociadas.
    if (error.code === "23503") {
      return res.status(409).json({
        message: "No se puede eliminar el autor porque tiene entries asociadas",
      });
    }

    res.status(500).json({
      message: "Error al eliminar el usuario",
    });
  }
};
// Exportamos el controlador.
module.exports = {
  getAllAuthorsController,
  createAuthorController,
  updateAuthorController,
  deleteAuthorController,
};