const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const product = db.define('Product', {

},
{
    modelName: 'Product',
    tableName: 'products'
})

module.exports = {
    Store
}