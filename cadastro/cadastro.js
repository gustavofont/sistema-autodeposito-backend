const Sequelize = require("sequelize")
const Connection = require("../database/database")

const Users = Connection.define('Users',{
    name:{
        type : Sequelize.STRING,
        allowNull : false
    },email:{
        type : Sequelize.STRING,
        allowNull : false
    },password : {
        type : Sequelize.STRING,
        allowNull : false
    },department : {
        type : Sequelize.STRING,
        allowNull : true
    },Er_User : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    },Reg_User : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }
})


module.exports = Users