const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const client = db.define('Client', {

},
{
    modelName: 'Client',
    tableName: 'clients'
})

module.exports = {
    client
}