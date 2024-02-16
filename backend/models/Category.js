const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'category',
    timestamps: false
});

module.exports = Category;