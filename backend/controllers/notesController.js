const Note = require('../models/Note');

exports.getActiveNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({ where: { archived: false } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getArchivedNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({ where: { archived: true } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        await note.destroy();
        res.json({ message: "Note deleted!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        await note.update(req.body);
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.archiveNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        await note.update({ archived: true });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.unarchiveNote = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id);
        await note.update({ archived: false });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}