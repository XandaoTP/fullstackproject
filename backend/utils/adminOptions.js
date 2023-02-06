const { category } = require('../models/category.js')
const { role } = require('../models/role.js')
const { Store } = require('../models/store.js')
const { users } = require('../models/user.js')

const generateResource = (model) => {
    return model
}

const generateAdminOptions = () => {
    return {
        resource: [
            generateResource(Store),
            generateResource(role),
            generateResource(users),
            generateResource(category),
            generateResource(sales)
        ],
    }
}

module.exports = {
    generateAdminOptions
}