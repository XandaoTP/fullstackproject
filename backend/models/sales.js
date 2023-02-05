const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const sales = db.define('sales', {

},
{
    modelName: 'sales',
    tableName: 'sale'
})

const salesItem = db.define('saleItem', {

},
{
    modelName: 'saleItem',
    tableName: 'saleItem'
})


module.exports = {
    sales,
    salesItem
}