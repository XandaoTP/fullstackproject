const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const category = db.define('Category', {

},
{
    modelName: 'Category',
    tableName: 'Categorys'
})

module.exports = {
    Store
}