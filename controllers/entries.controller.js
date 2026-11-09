// Importamos las funciones del modelo de entries.
const {
  getAllEntries,
  getEntriesByEmail,
  updateEntry,
  createEntry,
  deleteEntry,
} = require("../models/entries.model");

// Función para obtener todas las entries.
const getAllEntriesController = async (req, res) => {
  const email = req.query.email;
  try {
    let entries;

    if (email) {
      entries = await getEntriesByEmail(email);
    } else {
      entries = await getAllEntries();
    }

    res.status(200).json(entries);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al obtener las entries",
    });
  }
};

// Función para modificar una entry.
const updateEntryController = async (req, res) => {
  try {
    const { content, date, id_author, category, title } = req.body;
    const result = await updateEntry(content, date, id_author, category, title);
    if (result === 0) {
      return res.status(404).json({
        message: "No se ha encontrado la entry",
      });
    }
    res.status(200).json({
      message: `Se ha modificado la entry '${title}' `,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al modificar la entry",
    });
  }
};

// Función para crear una nueva entry.
const createEntryController = async (req, res) => {
  try {
    const { title, content, date, id_author, category } = req.body;

    const result = await createEntry(
      title,
      content,
      date,
      id_author,
      category
    );

    res.status(201).json({
      message: `Se ha creado la entry '${title}'`,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al crear la entry",
    });
  }
};

// Función para eliminar una entry mediante su título.
const deleteEntryController = async (req, res) => {
  try {
    const { title } = req.body;

    const result = await deleteEntry(title);

    if (result === 0) {
      return res.status(404).json({
        message: "No se ha encontrado la entry",
      });
    }

    res.status(200).json({
      message: `Se ha borrado la entry '${title}' `,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error al eliminar la entry",
    });
  }
};

// Exportamos el controlador.
module.exports = {
  getAllEntriesController,
  updateEntryController,
  createEntryController,
  deleteEntryController,
};
