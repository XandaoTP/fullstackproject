const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db.js')

const users = db.define('User', {

},
{
    modelName: 'User',
    tableName: 'users'
})

module.exports = {
    Store
}