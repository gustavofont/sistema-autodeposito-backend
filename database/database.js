require('dotenv').config()
const Sequelize = require("sequelize")

const connection = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD,{
    host : process.env.HOST,
    dialect : 'mysql'
})

module.exports = connection