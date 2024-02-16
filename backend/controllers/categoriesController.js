const Category = require('../models/Category');
const Note = require('../models/Note');

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.addCategory = async (req, res) => {
    try {
        const { noteId, categoryId } = req.params;
        const note = await Note.findByPk(noteId);
        const category = await Category.findByPk(categoryId);
        
        if (!note || !category) {
            return res.status(404).json({ message: 'Note or Category not found' });
        }

        await note.addCategory(category);
        res.json({ message: 'Category added to note successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getNotesByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await Category.findByPk(categoryId, { include: Note });
        
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const notes = await category.getNotes();

        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
