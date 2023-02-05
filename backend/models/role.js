const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const role = db.define('Role', {

},
{
    modelName: 'Role',
    tableName: 'roles'
})

module.exports = {
    Store
}