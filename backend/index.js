const express = require("express");
const app = express();
const cors = require("cors");
const notesController = require("./controllers/notesController");
const categoriesController = require("./controllers/categoriesController");
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Notes routes
app.get("/notes/active", notesController.getActiveNotes);
app.get("/notes/archived", notesController.getArchivedNotes);
app.post("/notes", notesController.createNote);
app.delete("/notes/:id", notesController.deleteNote);
app.put("/notes/:id", notesController.updateNote);
app.put("/notes/:id/archive", notesController.archiveNote);
app.put("/notes/:id/unarchive", notesController.unarchiveNote);

// Category routes
app.post("/categories", categoriesController.createCategory);
app.get("/categories/:categoryId/notes", categoriesController.getNotesByCategory);
app.post("/notes/:noteId/categories/:categoryId", categoriesController.addCategory);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  