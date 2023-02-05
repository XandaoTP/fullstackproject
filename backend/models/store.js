const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const Store = db.define('store', {

},
{
    modelName: 'Store',
    tableName: 'stores'
})

module.exports = {
    Store
}