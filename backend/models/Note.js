const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Category = require('./Category');

const Note = sequelize.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'note',
    timestamps: false
});

Note.belongsToMany(Category, {
    through: 'note_category',
    timestamps: false
})
Category.belongsToMany(Note, {
    through: 'note_category',
    timestamps: false
})

module.exports = Note;